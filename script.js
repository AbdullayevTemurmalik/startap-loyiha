const grid = document.querySelector(".grid");

// Fetch qilish
fetch("http://localhost:3000/ekoNews")
  .then((res) => res.json())
  .then((news) => {
    news.forEach((item) => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <div class="thumb" aria-label="IMG QO'YING">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="body">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <time class="date">${item.date}</time>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch((err) => console.error("Xatolik:", err));
