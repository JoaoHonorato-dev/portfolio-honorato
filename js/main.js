/**
 * Portfólio — Animações ao rolar, menu mobile, toggle de idioma (PT/EN)
 */

(function () {
  'use strict';

  // ========== Traduções PT-BR / EN ==========
  const translations = {
    pt: {
      'nav.home': 'Home',
      'nav.about': 'Sobre mim',
      'nav.projects': 'Projetos',
      'nav.curiosities': 'Curiosidades',
      'hero.greeting': 'Olá, eu sou',
      'hero.name': 'Seu Nome',
      'hero.subtitle': 'Desenvolvedor apaixonado por criar soluções que fazem diferença. Aqui você encontra um pouco do meu trabalho e da minha trajetória.',
      'hero.photo': 'Sua foto',
      'about.title': 'Sobre mim',
      'about.card1.title': 'Quem sou',
      'about.card1.text': 'Texto sobre você: formação, valores, o que te move. Edite este bloco no HTML ou via CMS.',
      'about.card2.title': 'O que faço',
      'about.card2.text': 'Suas áreas de atuação, tecnologias e tipos de projeto. Personalize conforme sua experiência.',
      'about.card3.title': 'Objetivos',
      'about.card3.text': 'Onde você quer chegar, projetos dos sonhos ou foco atual. Este espaço é seu.',
      'about.image1': 'Imagem opcional',
      'projects.title': 'Projetos',
      'projects.item1.title': 'Nome do Projeto 1',
      'projects.item1.desc': 'Breve descrição e tecnologias usadas.',
      'projects.item2.title': 'Nome do Projeto 2',
      'projects.item2.desc': 'Breve descrição e tecnologias usadas.',
      'projects.item3.title': 'Nome do Projeto 3',
      'projects.item3.desc': 'Breve descrição e tecnologias usadas.',
      'projects.link': 'Ver projeto →',
      'curiosities.title': 'Curiosidades',
      'curiosities.text': 'Espaço para contar algo que te define: um hobby, uma viagem, um aprendizado fora do código. Pode ser texto mais longo e até dividido em parágrafos. Aqui também dá para incluir listas ou citações.',
      'curiosities.text2': 'Segunda parte do texto, se quiser. Ou use só um bloco. O layout se adapta.',
      'curiosities.image': 'Imagem ou ilustração',
      'footer': '© 2025 Portfólio. Feito com cuidado.'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About me',
      'nav.projects': 'Projects',
      'nav.curiosities': 'Curiosities',
      'hero.greeting': "Hi, I'm",
      'hero.name': 'Your Name',
      'hero.subtitle': "Developer passionate about building solutions that make a difference. Here you'll find some of my work and journey.",
      'hero.photo': 'Your photo',
      'about.title': 'About me',
      'about.card1.title': 'Who I am',
      'about.card1.text': 'Text about you: background, values, what drives you. Edit this block in the HTML or via CMS.',
      'about.card2.title': 'What I do',
      'about.card2.text': 'Your areas of work, technologies and types of projects. Customize to match your experience.',
      'about.card3.title': 'Goals',
      'about.card3.text': 'Where you want to go, dream projects or current focus. This space is yours.',
      'about.image1': 'Optional image',
      'projects.title': 'Projects',
      'projects.item1.title': 'Project Name 1',
      'projects.item1.desc': 'Short description and technologies used.',
      'projects.item2.title': 'Project Name 2',
      'projects.item2.desc': 'Short description and technologies used.',
      'projects.item3.title': 'Project Name 3',
      'projects.item3.desc': 'Short description and technologies used.',
      'projects.link': 'View project →',
      'curiosities.title': 'Curiosities',
      'curiosities.text': "Space to share something that defines you: a hobby, a trip, learning outside of code. It can be longer text and even split into paragraphs. You can also add lists or quotes here.",
      'curiosities.text2': "Second part of the text if you like. Or use just one block. The layout adapts.",
      'curiosities.image': 'Image or illustration',
      'footer': '© 2025 Portfolio. Made with care.'
    }
  };

  let currentLang = document.documentElement.lang === 'en' ? 'en' : 'pt';

  function applyTranslations(lang) {
    const t = translations[lang] || translations.pt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'en' ? 'EN' : 'PT';
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch (e) {}
  }

  function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslations(currentLang);
  }

  // Restaurar idioma salvo
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'pt') {
      currentLang = saved;
      applyTranslations(currentLang);
    }
  } catch (e) {}

  document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);

  // ========== Animações ao rolar (Intersection Observer) ==========
  const animated = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    }
  );

  animated.forEach(function (el) {
    observer.observe(el);
  });

  // ========== Menu mobile ==========
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  function openMenu() {
    navMenu?.classList.add('is-open');
    navToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navMenu?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }

  navToggle?.addEventListener('click', function () {
    if (navMenu?.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', function (e) {
    if (navMenu?.classList.contains('is-open') && !navMenu.contains(e.target) && !navToggle?.contains(e.target)) {
      closeMenu();
    }
  });
})();
