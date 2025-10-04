document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    // 見出しに対応するコンテンツを取得（id属性などで紐づけてもOK）
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');

    if (!content || !icon) return;

    // 開閉状態を切り替え
    const isOpen = content.classList.contains('open');
    content.classList.toggle('open');

    // アイコンを更新
    icon.textContent = isOpen ? '\u2795' : '\u2796';
  });
});
