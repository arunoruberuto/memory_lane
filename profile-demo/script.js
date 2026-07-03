// 1. クラスメイトのデータプール（ここにみんなの情報を追加していくよ！）
const studentsData = {
  "student-1": {
    name: "あおちゃん",
    astro: "おひつじ座 ♈",
    birthday: "1999年4月1日",
    // サンプルの猫写真（本物の画像パスに変更してね）
    photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&fit=crop", 
    q1: "秋葉原でアニメグッズを爆買いする！",
    q2: "みんなに出会えてよかった！卒業してもずっと友達だよー！"
  },
  "student-2": {
    name: "あかちゃん",
    astro: "うお座 ♓",
    birthday: "2000年5月15日",
    // 写真がない場合は空欄にしておくと、デフォルト画像が表示されます
    photo: "", 
    q1: "ディズニーランドのホテルに泊まりたいな🏰",
    q2: "みんな最高！それぞれの道でがんばろうね、絶対また集まろう！"
  }
};

// 写真がないときのデフォルト画像（かわいい犬の画像）
const defaultPhoto = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop";

const win = document.getElementById('student-window');

// 2. ウィンドウを開いて、選択された生徒のデータを流し込む関数
function openStudentWindow(id) {
  const data = studentsData[id];
  if (!data) return;

  // テキストデータを各項目に埋め込む
  document.getElementById('win-title').textContent = `📌 ${data.name} のお部屋`;
  document.getElementById('val-name').textContent = data.name;
  document.getElementById('val-astro').textContent = data.astro;
  document.getElementById('val-birthday').textContent = data.birthday;
  document.getElementById('val-q1').textContent = data.q1;
  document.getElementById('val-q2').textContent = data.q2;

  // 写真の判定と表示
  const photoImg = document.getElementById('val-photo');
  if (data.photo && data.photo.trim() !== "") {
    photoImg.src = data.photo;
  } else {
    photoImg.src = defaultPhoto;
  }

  // ウィンドウを表示する
  win.style.display = 'flex';
}

// 3. ウィンドウを閉じる関数
function closeStudentWindow() {
  win.style.display = 'none';
}

// 4. ウィンドウをマウスでドラッグ移動できるようにする処理（即時実行関数）
(function enableDrag() {
  const header = document.getElementById('win-header');
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  header.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('close-btn')) return; // 閉じるボタンの上ではドラッグしない
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = win.offsetLeft;
    initialTop = win.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    win.style.left = `${initialLeft + dx}px`;
    win.style.top = `${initialTop + dy}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
})();