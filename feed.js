fetch("content.json")
  .then(response => response.json())
  .then(data => {
    const feed = document.getElementById("feed");

    // Sort newest first
    data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    data.posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";

      let innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`;

      if (post.type === "video" && post.youtubeId) {
        innerHTML += `
          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/${post.youtubeId}"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>
        `;
      }

      if (post.type === "blog" && post.image) {
        innerHTML += `<img src="${post.image}" alt="${post.title}" style="width:100%;border-radius:8px;margin-top:1rem;">`;
      }

      card.innerHTML = innerHTML;
      feed.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading content:", error);
  });
