const products = [
  { name: 'Ração para cães', category: 'racoes', emoji: '🥣', description: 'Alimentação completa para seu melhor amigo.' },
  { name: 'Ração para gatos', category: 'racoes', emoji: '🐱', description: 'Opções para diferentes fases da vida.' },
  { name: 'Cuidados e saúde', category: 'medicamentos', emoji: '💊', description: 'Produtos para a rotina de cuidados.' },
  { name: 'Acessórios', category: 'acessorios', emoji: '🦴', description: 'Itens para conforto, passeio e diversão.' }
];

const grid = document.querySelector('#products');
const search = document.querySelector('#search');

function renderProducts(filter = '') {
  const term = filter.toLowerCase().trim();
  const list = products.filter(p =>
    !term || p.name.toLowerCase().includes(term) || p.category.includes(term)
  );

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-image">${p.emoji}</div>
      <small>${p.category}</small>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <a class="buy" href="https://wa.me/5522998959626?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre ' + p.name + '.')}" target="_blank" rel="noopener">Consultar no WhatsApp</a>
    </article>
  `).join('');
}

document.querySelectorAll('.category-card').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    search.value = filter;
    renderProducts(filter);
    document.querySelector('#destaques').scrollIntoView({ behavior: 'smooth' });
  });
});

search.addEventListener('input', e => renderProducts(e.target.value));
document.querySelector('#year').textContent = new Date().getFullYear();
renderProducts();
