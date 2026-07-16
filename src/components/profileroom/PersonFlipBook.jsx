import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
} from "react";
import HTMLFlipBook from "react-pageflip";
import * as THREE from "three";
import { QUESTIONS } from "@/data/roomData";
import "./PersonFlipBook.css";

const QUESTIONS_PER_PAGE = 3;
const FLIP_DURATION = 1050;

function chunk(array, size) {
  const groups = [];
  for (let i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }
  return groups;
}

// Komponen Page murni (forwardRef) wajib dipertahankan untuk membaca koordinat sudut lipatan!
const Page = forwardRef((props, ref) => {
  return (
    <div
      className={`page ${props.className || ""}`}
      data-density={props.density || "soft"}
      ref={ref}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
});
Page.displayName = "Page";

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothstep(edge0, edge1, value) {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function ThreePageCurl({ turn }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const turnRef = useRef(turn);
  const frameRef = useRef(null);

  useEffect(() => {
    turnRef.current = turn;
  }, [turn]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-420, 420, 300, -300, 0.1, 2000);
    camera.position.set(0, 0, 900);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(420, 600, 72, 32);
    const basePositions = Float32Array.from(geometry.attributes.position.array);

    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = 512;
    pageCanvas.height = 768;
    const ctx = pageCanvas.getContext("2d");
    const paperGradient = ctx.createLinearGradient(0, 0, pageCanvas.width, pageCanvas.height);
    paperGradient.addColorStop(0, "#ffffff");
    paperGradient.addColorStop(0.55, "#fff7fa");
    paperGradient.addColorStop(1, "#f6dce5");
    ctx.fillStyle = paperGradient;
    ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.52)";
    ctx.fillRect(26, 26, pageCanvas.width - 52, pageCanvas.height - 52);
    ctx.strokeStyle = "rgba(255, 117, 140, 0.22)";
    ctx.lineWidth = 3;
    ctx.strokeRect(28, 28, pageCanvas.width - 56, pageCanvas.height - 56);

    const pageTexture = new THREE.CanvasTexture(pageCanvas);
    pageTexture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshStandardMaterial({
      map: pageTexture,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      roughness: 0.7,
      metalness: 0,
    });

    const pageMesh = new THREE.Mesh(geometry, material);
    pageMesh.visible = false;
    scene.add(pageMesh);

    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 512;
    shadowCanvas.height = 768;
    const shadowCtx = shadowCanvas.getContext("2d");
    const shadowGradient = shadowCtx.createLinearGradient(0, 0, shadowCanvas.width, 0);
    shadowGradient.addColorStop(0, "rgba(0,0,0,0)");
    shadowGradient.addColorStop(0.55, "rgba(0,0,0,0.2)");
    shadowGradient.addColorStop(1, "rgba(0,0,0,0)");
    shadowCtx.fillStyle = shadowGradient;
    shadowCtx.fillRect(0, 0, shadowCanvas.width, shadowCanvas.height);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(420, 600), shadowMaterial);
    shadowMesh.position.z = -6;
    shadowMesh.visible = false;
    scene.add(shadowMesh);

    scene.add(new THREE.AmbientLight(0xffffff, 1.45));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.25);
    keyLight.position.set(-220, 180, 520);
    scene.add(keyLight);

    sceneRef.current = {
      basePositions,
      camera,
      geometry,
      material,
      pageMesh,
      renderer,
      shadowMaterial,
      shadowMesh,
    };

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const render = (time) => {
      const current = turnRef.current;
      const state = sceneRef.current;
      const rect = mount.getBoundingClientRect();
      const pageWidth = rect.width / 2;
      const pageHeight = rect.height;

      if (current) {
        const elapsed = time - current.startedAt;
        const raw = Math.min(1, Math.max(0, elapsed / current.duration));
        const progress = easeInOutCubic(raw);
        const direction = current.direction === "back" ? -1 : 1;
        const positions = state.geometry.attributes.position.array;
        const turnArc = Math.sin(progress * Math.PI);
        const curlDepth = pageWidth * (0.12 + 0.42 * turnArc);
        const lift = pageHeight * 0.026 * turnArc;

        for (let i = 0; i < positions.length; i += 3) {
          const baseX = basePositions[i];
          const baseY = basePositions[i + 1];
          const normalized = (baseX + 210) / 420;
          const vertical = (baseY + 300) / 600;
          const fromCenterY = vertical - 0.5;
          const edgeBias = Math.pow(normalized, 1.75);
          const travelingFold = smoothstep(
            progress - 0.55,
            progress + 0.22,
            normalized
          );
          const bend = edgeBias * travelingFold;
          const diagonalTug = fromCenterY * fromCenterY * edgeBias * turnArc;
          const flutter =
            Math.sin((normalized * 5.5 + progress * 2.25) * Math.PI) *
            Math.sin(vertical * Math.PI) *
            edgeBias *
            turnArc;
          const localX = normalized * pageWidth;
          const foldedX = localX - pageWidth * 0.085 * bend * turnArc;

          positions[i] =
            direction === 1
              ? foldedX
              : foldedX - pageWidth;
          positions[i + 1] =
            (baseY / 600) * pageHeight +
            lift * bend -
            pageHeight * 0.018 * diagonalTug;
          positions[i + 2] =
            curlDepth * bend +
            pageWidth * 0.025 * flutter;
        }

        state.geometry.attributes.position.needsUpdate = true;
        state.geometry.computeVertexNormals();

        state.pageMesh.scale.set(1, 1, 1);
        state.pageMesh.position.x = 0;
        state.pageMesh.rotation.y = direction * -Math.PI * progress;
        state.pageMesh.rotation.z = direction * 0.04 * turnArc;
        state.pageMesh.visible = true;
        state.material.opacity = Math.min(0.88, turnArc * 1.1);

        state.shadowMesh.scale.set(pageWidth / 420, pageHeight / 600, 1);
        state.shadowMesh.position.x = direction * pageWidth * (0.5 - progress * 0.48);
        state.shadowMesh.rotation.y = direction * -Math.PI * progress * 0.42;
        state.shadowMesh.visible = true;
        state.shadowMaterial.opacity = 0.28 * turnArc;
      } else {
        state.pageMesh.visible = false;
        state.shadowMesh.visible = false;
        state.material.opacity = 0;
        state.shadowMaterial.opacity = 0;
      }

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      pageTexture.dispose();
      shadowMesh.geometry.dispose();
      shadowMaterial.dispose();
      shadowTexture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      sceneRef.current = null;
    };
  }, []);

  return <div className="three-page-curl" ref={mountRef} aria-hidden="true" />;
}

function PersonFlipBook({ person }) {
  const bookRef = useRef(null);
  const pointerDirectionRef = useRef("next");
  const [turn, setTurn] = useState(null);
  const [isPageTurning, setIsPageTurning] = useState(false);

  const playCurl = useCallback((direction = "next") => {
    setTurn({
      id: `${Date.now()}-${Math.random()}`,
      direction: direction === "prev" || direction === "back" ? "back" : "next",
      duration: FLIP_DURATION,
      startedAt: performance.now(),
    });
  }, []);

  // Memicu kibasan halaman pertama otomatis secara smooth dari cover yang tertutup
  useEffect(() => {
    const timer = setTimeout(() => {
      const flip = bookRef.current?.pageFlip?.();
      if (flip) {
        playCurl("next");
        flip.flipNext();
      }
    }, 150); // Jeda sedikit setelah remount agar langsung ngibas cantik
    return () => clearTimeout(timer);
  }, [person.id, playCurl]);

  const pages = useMemo(() => {
    const built = [];

    // Halaman Cover
    built.push(
      <Page density="hard" style={{ background: "transparent" }} key="cover">
        <div
          className="page-content person-cover"
          style={{
            background: `radial-gradient(circle, ${person.color} 0%, ${person.color} 60%, #ffffff22 100%)`,
          }}
        >
          <div className="person-cover-icon">{person.icon}</div>
          <h2 className="person-cover-name">{person.name}</h2>
          <p className="person-cover-hint">▶ めくってひらいてね</p>
        </div>
      </Page>
    );

    // Halaman Photo
    built.push(
      <Page key="photo">
        <div className="page-content photo-page-content">
          <div className="photo-box" style={{ borderColor: person.color }}>
            <img
              src={person.photo}
              alt={person.name}
              decoding="async"
              loading="eager"
            />
            <span className="photo-tag" style={{ background: person.color }}>
              MY PHOTO
            </span>
          </div>
          <div className="deco-space">
            <div className="life-motto-title" style={{ color: person.color }}>
              自分の人生への一言
            </div>
            <p className="life-motto-text" style={{ color: person.color }}>
              {person.answers.q7}
            </p>
            <div className="card-subtitle" style={{ color: person.color }}>
              🌟 Free Space 🌟
            </div>
            <p className="handwritten-text" style={{ color: person.color }}>
              ずっとズッ友だよ！友情不滅！★
            </p>
          </div>
          <div className="mini-decorations">
            <span>🌈</span>
            <span>✨</span>
            <span>💖</span>
          </div>
        </div>
      </Page>
    );

    // Halaman Info
    built.push(
      <Page key="info">
        <div className="page-content info-page-content">
          <div
            className="card-title person-realname"
            lang={person.realnameLang}
            style={{ color: person.color }}
          >
            {person.icon} {person.name}
          </div>
          <div className="profile-list">
            <div className="profile-row">
              <label style={{ color: person.color }}>なまえ：</label>
              <span className="underline-value person-realname" lang={person.realnameLang}>
                {person.name}
              </span>
            </div>
            <div className="profile-row">
              <label style={{ color: person.color }}>出席番号：</label>
              <span className="underline-value">{person.class}</span>
            </div>
            <div className="profile-row">
              <label style={{ color: person.color }}>星座：</label>
              <span className="underline-value">{person.astro}</span>
            </div>
          </div>
        </div>
      </Page>
    );

    // Halaman Q&A
    const questionsPerPage = person.questionsPerPage ?? QUESTIONS_PER_PAGE;
    const questionGroups = chunk(QUESTIONS, questionsPerPage);
    questionGroups.forEach((group, i) => {
      built.push(
        <Page key={`qa-${i}`}>
          <div className="page-content qa-page-content">
            <div className="card-title" style={{ color: person.color }}>
              💌 Questions
              {questionGroups.length > 1
                ? ` (${i + 1}/${questionGroups.length})`
                : ""}
            </div>
            <div className="q-a-section">
              {group.map((question, questionIndex) => (
                <div className="qa-item" key={question.id}>
                  <div
                    className="qa-number"
                    style={{ background: person.color }}
                  >
                    {i * questionsPerPage + questionIndex + 1}
                  </div>
                  <div className="qa-copy">
                    <p className="qa-question">{question.label}</p>
                    <p className="q-a-answer">
                      {person.answers[question.id] ?? ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>
      );
    });

    built.push(
      <Page
        key="end-sheet"
        className="end-sheet"
        density="soft"
        style={{ background: "transparent" }}
      >
        <div
          className="page-content end-sheet-content"
          style={{
            background: `radial-gradient(circle, ${
              person.backCoverColor || person.color
            } 0%, ${person.backCoverColor || person.color} 60%, #ffffff22 100%)`,
          }}
        />
      </Page>
    );

    return built;
  }, [person]);

  return (
    /* 
      KUNCI UTAMA DI SINI:
      Bungkus HTMLFlipBook dengan div yang memiliki key={person.id}.
      Setiap ganti orang, seluruh flipbook di-render ulang dari cover tertutup, 
      tapi karena div ini posisinya di dalam BookStage, layout binder lu luar gak bakal geser!
    */
    <div key={person.id} style={{ width: "100%", height: "100%" }}>
      <div
        className={`person-flipbook-shell ${
          isPageTurning ? "is-paper-turning" : ""
        }`}
        onPointerDownCapture={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          pointerDirectionRef.current =
            event.clientX - rect.left < rect.width / 2 ? "back" : "next";
        }}
      >
        <HTMLFlipBook
          width={420}
          height={600}
          maxShadowOpacity={0.28}
          drawShadow={true}
          showCover={true}
          size="fixed"
          flippingTime={FLIP_DURATION}
          className="person-flipbook"
          ref={bookRef}
          onChangeState={(event) => {
            if (event.data === "flipping") {
              setIsPageTurning(true);
              playCurl(pointerDirectionRef.current);
            } else if (event.data === "read") {
              setIsPageTurning(false);
              setTurn(null);
            }
          }}
          onFlip={() => {
            window.setTimeout(() => {
              setIsPageTurning(false);
              setTurn(null);
            }, 120);
          }}
        >
          {pages}
        </HTMLFlipBook>
        <ThreePageCurl turn={turn} />
      </div>
    </div>
  );
}

export default PersonFlipBook;
