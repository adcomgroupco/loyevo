document.querySelectorAll('.audience-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.closest('.audience');
        const expanded = card.classList.toggle('expanded');
        button.setAttribute('aria-expanded', expanded);
        button.firstChild.nodeValue = expanded ? 'Menos info' : 'Más info';
      });
    });
