(() => {
  const tabs = document.querySelectorAll('.hero-tabs__item');
  const heroImage = document.querySelector('.hero-image');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  const heroContent = [
    {
      subtitle: 'Javascript',
      title: 'Расширение Chrome защищает от атак',
      bg: '1',
      subClr: '#4592FF',
    },
    {
      subtitle: 'javascript',
      title: 'На каком стандарте писать скрипты, если я фрилансер',
      bg: '2',
      subClr: '#6E99AE',
    },
    {
      subtitle: 'html',
      title: 'Правильно вставляем картинку на сайт для Retina дисплея',
      bg: '3',
      subClr: '#AC8EE3',
    },
    {
      subtitle: 'web design',
      title: 'ТОП-10 плагинов для Figma',
      bg: '4',
      subClr: '#FFA34D',
    },
    {
      subtitle: 'css',
      title: 'Возможности CSS Grid Layout , которые уже можно применять',
      bg: '5',
      subClr: '#3DC47E',
    },
  ];
  addActiveContent(heroContent[0], tabs[0]);

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      removeActive();
      addActiveContent(heroContent[i], tab);
    });
  });

  function removeActive() {
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
  }

  function addBg(bg) {
    return `linear-gradient(
      0deg,
      rgba(64, 48, 61, 0.35),
      rgba(64, 48, 61, 0.35)
    ), url(./img/hero/hero-image-${bg}.webp)`;
  }

  function addActiveContent({ subtitle, title, bg, subClr }, tab) {
    heroTitle.innerText = title;
    heroSubtitle.innerText = subtitle;
    heroSubtitle.style.color = subClr;
    tab.classList.add('active-tab');
    heroImage.style.backgroundImage = addBg(bg);
  }
})();
