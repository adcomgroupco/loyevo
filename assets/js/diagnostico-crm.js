(() => {
    const toggles = document.querySelectorAll('#crm .crm-toggle');
    toggles.forEach((button) => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const label = button.querySelector('span');
      if (!panel || !label) return;
      button.addEventListener('click', () => {
        const open = panel.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
        panel.setAttribute('aria-hidden', String(!open));
        label.textContent = open ? button.dataset.close : button.dataset.open;
      });
    });
  })();
