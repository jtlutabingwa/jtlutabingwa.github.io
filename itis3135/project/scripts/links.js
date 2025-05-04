const input = document.getElementById('brandSearch');
    input.addEventListener('input', () => {
      const filter = input.value.toLowerCase();
      document.querySelectorAll('.link-card').forEach((card) => {
        card.style.display = card.textContent.toLowerCase().includes(filter) ? '' : 'none';
      });
    });