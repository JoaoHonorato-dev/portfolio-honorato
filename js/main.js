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
      'about.card1.text': "Minha trajetória na tecnologia começou no ensino médio técnico, onde a paixão pela programação nasceu. Hoje, como graduando em ADS e desenvolvedor atuante, foco em construir soluções robustas utilizando PHP com Laravel, JavaScript e SQL. \n\r Um grande diferencial do meu trabalho atual é a integração de Inteligência Artificial, com experiência prática na API do Gemini. Acredito que o futuro do desenvolvimento está na sinergia entre boas práticas e IA, por isso invisto constantemente em especializações nessa área. Buscando sempre novos patamares técnicos, estou atualmente aprofundando meus estudos em C# (.NET) e expandindo meu stack para Python. Sou um profissional comprometido com a excelência, em constante evolução para alcançar os mais altos níveis da engenharia de software.",
      'about.card2.title': 'O que faço',
      'about.card2.text': 'Desenvolvo aplicações web e projetos práticos utilizando JavaScript, PHP e consumo de APIs. \n\r Tenho experiência com versionamento de código usando Git e foco em criar soluções funcionais, organizadas e escaláveis. \n\r Atualmente venho explorando conceitos de Inteligência Artificial e automação, aplicando esses conhecimentos em projetos pessoais.',
      'about.card3.title': 'Objetivos',
      'about.card3.text': 'Meu objetivo é me tornar um desenvolvedor especialista em soluções escaláveis e inteligentes. Atualmente, foco em dominar o ecossistema .NET e aprofundar minha expertise na integração de IAs (Gemini API). Busco ambientes que valorizem a inovação tecnológica e as melhores práticas de engenharia de software, onde eu possa crescer junto com a equipe.',
      'about.card4.title1':'Stack Principal',
      'about.card4.title2':'Tecnologias em Evolução', 
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
      'curiosities.text': 'Tive a honra de servir à Força Aérea Brasileira na Academia da Força Aérea (AFA), uma experiência que fortaleceu minha disciplina, resiliência e trabalho em equipe.',
      'curiosities.text2': 'Além do aprendizado profissional e pessoal, levo comigo grandes amizades e valores que influenciam diretamente minha forma de encarar desafios e evoluir constantemente.',
      'curiosities.image': 'Imagem ou ilustração',
      'footer': '© 2026 Portfólio. João Honorato.'
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
      'about.card1.text': 'My journey in technology began during my technical high school years, where my passion for programming was born. Currently, as a Software Analysis and Development student and an active developer, I focus on building robust solutions using PHP with Laravel, JavaScript, and SQL. \n\r A key differentiator in my current work is the integration of Artificial Intelligence, with hands-on experience using the Gemini API. I believe the future of development lies in the synergy between best practices and AI implementation, which is why I constantly invest in specializing in this field. To reach new technical heights, I am currently deepening my studies in C# (.NET) and expanding my stack to Python. I am a professional committed to excellence, in constant evolution to reach the highest levels of software engineering.',
      'about.card2.title': 'What I do',
      'about.card2.text': 'I develop web applications and practical projects using JavaScript, PHP, and API integration.\n\r I have experience with code versioning using Git and focus on creating functional, well-structured, and scalable solutions.\n\r Currently, I am exploring concepts in Artificial Intelligence and automation, applying this knowledge to personal projects.',
      'about.card3.title': 'Goals',
      'about.card3.text': 'My goal is to become an expert developer specializing in scalable and intelligent solutions. Currently, I am focused on mastering the .NET ecosystem and deepening my expertise in AI integration (Gemini API). I am looking for environments that value technological innovation and software engineering best practices, where I can grow together with the team.',
      'about.card4.title1':'Main Stack',
      'about.card4.title2':'Learning', 
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
      'curiosities.text': "I had the honor of serving in the Brazilian Air Force at the Air Force Academy (AFA), an experience that strengthened my discipline, resilience, and teamwork skills.",
      'curiosities.text2': "Beyond the professional and personal growth, I carry with me great friendships and values that directly influence the way I face challenges and continuously evolve.",
      'curiosities.image': 'Image or illustration',
      'footer': '© 2026 Portfolio. João Honorato.'
    }
  };

  let currentLang = document.documentElement.lang === 'en' ? 'en' : 'pt';

  function applyTranslations(lang) {
    const t = translations[lang] || translations.pt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.innerText = t[key];
    });
    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'en' ? 'EN' : 'PT';
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch (e) {}
  }

  //forçando a tradução ao entrar na tela.
  applyTranslations(currentLang);


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

  const image = document.querySelector('.profile-image');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }, {
    threshold: 0.5
  });

  imgObserver.observe(image);
})();
