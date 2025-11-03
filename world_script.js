document.addEventListener("DOMContentLoaded", () => {
  // Отключаем перетаскивание у всех картинок
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
  });

  const paper = document.getElementById('paper');
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');

  const diamond1 = document.getElementById('diamond1');
  const diamond2 = document.getElementById('diamond2');
  const diamond3 = document.getElementById('diamond3');

  function resetDiamonds() {
    diamond1.classList.remove('active');
    diamond2.classList.remove('active');
    diamond3.classList.remove('active');
  }

  diamond2.addEventListener('click', () => {
    // Меняем картинку бумаги
    paper.src = 'first_world_page/бумага 2.png';

    // Скрываем тексты
    text1.style.display = 'none';
    text2.style.display = 'none';

    // Активируем ромб 2 и сбрасываем остальные
    resetDiamonds();
    diamond2.classList.add('active');
  });

  diamond3.addEventListener('click', () => {
    // Меняем картинку бумаги
    paper.src = 'first_world_page/бумага 3.png';

    // Скрываем тексты
    text1.style.display = 'none';
    text2.style.display = 'none';

    // Активируем ромб 3 и сбрасываем остальные
    resetDiamonds();
    diamond3.classList.add('active');
  });

  diamond1.addEventListener('click', () => {
    // Возвращаем бумагу и показываем тексты
    paper.src = 'first_world_page/бумага.png';

    text1.style.display = '';
    text2.style.display = '';

    resetDiamonds();
    // Если нужно, можно сделать ромб 1 активным
    // diamond1.classList.add('active');
  });
});
