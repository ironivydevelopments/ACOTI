// feed.js

// ===== Your content arrays =====
const videos = [
  { title: "My First Video", videoId: "VIDEO_ID_1" },
  { title: "Another Video", videoId: "VIDEO_ID_2" },
  { title: "Cool Tutorial", videoId: "VIDEO_ID_3" }
];

const blogPosts = [
  { title: "Welcome to Anissa's Corner", link: "blog/post1.html" },
  { title: "My Top 5 Inspirations", link: "blog/post2.html" },
  { title: "Creative Drops Guide", link: "blog/post3.html" }
];

// ===== Grab the feed container =====
const feed = document.getElementById("feed");

// ===== Helper functions =====
function createVideoCard(video) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${video.title}</h3>
    <iframe 
      src="https://www.youtube.com/embed/${video.videoId}" 
      title="${video.title}" 
      frameborder="0" 
      allowfullscreen>
    </iframe>
  `;
  return card;
}

function createBlogCard(post) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${post.title}</h3>
    <a href="${post.link}" class="hero-btn">Read More</a>
  `;
  return card;
}

// ===== Alternate the content =====
let maxLength = Math.max(videos.length, blogPosts.length);

for (let i = 0; i < maxLength; i++) {
  if (i < videos.length) {
    feed.appendChild(createVideoCard(videos[i]));
  }
  if (i < blogPosts.length) {
    feed.appendChild(createBlogCard(blogPosts[i]));
  }
}
