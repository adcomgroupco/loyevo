const chapterOrder = ['diagnostico', 'captacion', 'medicion', 'plan'];
    const chapterButtons = [...document.querySelectorAll('[data-chapter-filter]')];
    const chapterSections = [...document.querySelectorAll('[data-chapter]')];
    const chapterStatus = document.querySelector('.chapter-status');
    const previousChapter = document.querySelector('[data-chapter-prev]');
    const nextChapter = document.querySelector('[data-chapter-next]');
    let activeChapter = 'diagnostico';

    const setChapter = (chapter, shouldScroll = true) => {
      activeChapter = chapter;
      chapterSections.forEach(section => { section.hidden = chapter !== 'all' && section.dataset.chapter !== chapter; });
      chapterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.chapterFilter === chapter)));
      const index = chapterOrder.indexOf(chapter);
      chapterStatus.textContent = chapter === 'all' ? 'Todo' : `${index + 1} / ${chapterOrder.length}`;
      previousChapter.disabled = chapter === 'all' || index === 0;
      nextChapter.disabled = chapter === 'all' || index === chapterOrder.length - 1;
      if (shouldScroll) {
        const destination = chapter === 'all' ? document.querySelector('#meta-data') : chapterSections.find(section => section.dataset.chapter === chapter);
        requestAnimationFrame(() => destination?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    };

    chapterButtons.forEach(button => button.addEventListener('click', () => setChapter(button.dataset.chapterFilter)));
    previousChapter.addEventListener('click', () => setChapter(chapterOrder[Math.max(0, chapterOrder.indexOf(activeChapter) - 1)]));
    nextChapter.addEventListener('click', () => setChapter(chapterOrder[Math.min(chapterOrder.length - 1, chapterOrder.indexOf(activeChapter) + 1)]));

    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('#main-nav');
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', event => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
      if (!link.hash) return;
      const target = document.querySelector(link.hash);
      const section = target?.closest('[data-chapter]');
      if (!section) return;
      event.preventDefault();
      setChapter(section.dataset.chapter, false);
      history.replaceState(null, '', link.hash);
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }));

    const initialTarget = location.hash ? document.querySelector(location.hash) : null;
    const initialChapter = initialTarget?.closest('[data-chapter]')?.dataset.chapter || 'diagnostico';
    setChapter(initialChapter, false);
    if (initialTarget) requestAnimationFrame(() => requestAnimationFrame(() => initialTarget.scrollIntoView({ block: 'start' })));

    document.querySelectorAll('[role="tablist"]').forEach(list => {
      const tabs = Array.from(list.querySelectorAll('.tab'));
      const panels = tabs.map(tab => document.getElementById(tab.dataset.panel));
      tabs.forEach((tab, index) => tab.addEventListener('click', () => {
        tabs.forEach(item => item.setAttribute('aria-selected', 'false'));
        panels.forEach(panel => panel?.classList.remove('active'));
        tab.setAttribute('aria-selected', 'true');
        panels[index]?.classList.add('active');
      }));
    });

    const progress = document.querySelector('.progress');
    const setProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (window.scrollY / height) * 100 : 0;
      progress.style.setProperty('--progress', `${Math.min(100, value)}%`);
    };
    addEventListener('scroll', setProgress, { passive: true });
    setProgress();
