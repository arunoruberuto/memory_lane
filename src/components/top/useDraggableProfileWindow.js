import { useEffect, useRef, useState } from "react";

const WINDOW_MARGIN = 16;
const DEFAULT_POSITION = {
  x: 120,
  y: 60
};

function getBoundedPosition(position, element) {
  if (typeof window === "undefined" || !element) {
    return position;
  }

  const maxX = Math.max(WINDOW_MARGIN, window.innerWidth - element.offsetWidth - WINDOW_MARGIN);
  const maxY = Math.max(WINDOW_MARGIN, window.innerHeight - element.offsetHeight - WINDOW_MARGIN);

  return {
    x: Math.min(Math.max(WINDOW_MARGIN, position.x), maxX),
    y: Math.min(Math.max(WINDOW_MARGIN, position.y), maxY)
  };
}

export function useDraggableProfileWindow(isOpen) {
  const windowRef = useRef(null);
  const dragStateRef = useRef(null);
  const [position, setPosition] = useState(DEFAULT_POSITION);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.requestAnimationFrame(() => {
      setPosition((currentPosition) => getBoundedPosition(currentPosition, windowRef.current));
    });
  }, [isOpen]);

  useEffect(() => {
    function handlePointerMove(event) {
      if (!dragStateRef.current) {
        return;
      }

      const { startX, startY, initialX, initialY } = dragStateRef.current;
      const nextPosition = {
        x: initialX + event.clientX - startX,
        y: initialY + event.clientY - startY
      };

      setPosition(getBoundedPosition(nextPosition, windowRef.current));
    }

    function handlePointerUp() {
      dragStateRef.current = null;
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  function handleDragStart(event) {
    if (event.button !== 0 || event.target.closest("button")) {
      return;
    }

    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      initialX: position.x,
      initialY: position.y
    };
  }

  return {
    position,
    windowRef,
    dragHandleProps: {
      onPointerDown: handleDragStart
    }
  };
}
