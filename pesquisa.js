const perfis = [
  { nome: "caveira games", descricao: "Especialista em assistencia tecnica e um grande fã de karrot" },
  { nome: "Gameskauuu", descricao: "além de garoto de programa e gamer próficional (top 10 do bairro). é um dos maiores usuarios de gambiarra do brasil" },
  { nome: "Ronaldo", descricao: "Por favor parem de me mandar o meme Ronaldo toda vez na minha dm >:(" }
];

const searchInput = document.querySelector('input[type="text"]');
const feed = document.getElementById("feed");

// Função para renderizar posts
function renderPosts(postsList) {
  feed.innerHTML = ''; // Limpa o feed
  postsList.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <div class="post-title">${post.titulo}</div>
      <div class="post-content">${post.conteudo}</div>
    `;
    feed.appendChild(div);
  });
}

// Função para renderizar perfis (adiciona ao feed como posts simples)
function renderPerfis(perfisList) {
  perfisList.forEach((perfil) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <div class="post-title">Perfil: ${perfil.nome}</div>
      <div class="post-content">${perfil.descricao}</div>
    `;
    feed.appendChild(div);
  });
}

// Evento de busca
searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  if (query === '') {
    // Se vazio, mostra tudo
    renderPosts(posts);
    renderPerfis(perfis);
    return;
  }

  // Filtra posts
  const filteredPosts = posts.filter(post =>
    post.titulo.toLowerCase().includes(query) ||
    post.conteudo.toLowerCase().includes(query)
  );

  // Filtra perfis
  const filteredPerfis = perfis.filter(perfil =>
    perfil.nome.toLowerCase().includes(query) ||
    perfil.descricao.toLowerCase().includes(query)
  );

  // Limpa e renderiza resultados
  feed.innerHTML = '<h3>Resultados da Busca:</h3>';
  if (filteredPosts.length > 0) {
    renderPosts(filteredPosts);
  }
  if (filteredPerfis.length > 0) {
    renderPerfis(filteredPerfis);
  }
  if (filteredPosts.length === 0 && filteredPerfis.length === 0) {
    feed.innerHTML += '<p>Nenhum resultado encontrado.</p>';
  }
});

// Renderiza tudo inicialmente
renderPosts(posts);
renderPerfis(perfis);