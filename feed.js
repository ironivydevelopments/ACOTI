const feed = document.getElementById("feed");

const demoContent = [
  {
    type: "Blog",
    title: "Building My Own Space Online",
    excerpt: "Why I wanted a corner of the internet that felt like mine.",
  },
  {
    type: "Video",
    title: "Weekly Check-In",
    excerpt: "A quick update on what I’m working on right now.",
  },
  {
    type: "Update",
    title: "",
    excerpt: "Currently thinking about how much freedom comes from owning your platform.",
  }
];

demoContent.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="type">${item.type}</div>
    ${item.title ? `<h3>${item.title}</h3>` : ""}
    <p>${item.excerpt}</p>
  `;

  feed.appendChild(card);
});
