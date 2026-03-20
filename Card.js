card.onclick = () => {
  window.location.href = `details.html?anime=${anime.title}`;
};

// Check which page you are on

// 👉 HOMEPAGE LOGIC
if (document.getElementById("animeContainer")) {

  const container = document.getElementById("animeContainer");

  const animeList = [
    { title: "Naruto" },
    { title: "Attack on Titan" }
  ];

  animeList.forEach(anime => {
    const card = document.createElement("div");
    card.innerText = anime.title;

    card.onclick = () => {
      window.location.href = `details.html?anime=${anime.title}`;
    };

    container.appendChild(card);
  });
}


// 👉 DETAILS PAGE LOGIC
if (document.getElementById("animeTitle")) {

  const params = new URLSearchParams(window.location.search);
  const animeName = params.get("anime");

  document.getElementById("animeTitle").innerText = animeName;

  const animeData = {
    "Naruto": {
      video: "https://www.youtube.com/embed/-G9BqkgZXRA",
      episodes: ["Episode 1", "Episode 2"]
    },
    "Attack on Titan": {
      video: "https://www.youtube.com/embed/MGRm4IzK1SQ",
      episodes: ["Episode 1", "Episode 2"]
    }
  };

  const data = animeData[animeName];

  if (data) {
    document.getElementById("player").src = data.video;

    const epContainer = document.getElementById("episodes");

    data.episodes.forEach(ep => {
      const btn = document.createElement("button");
      btn.innerText = ep;
      epContainer.appendChild(btn);
    });
  }
}