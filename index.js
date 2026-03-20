//img slider

// const slides = document.querySelectorAll(".slides img")
// let slideIndex =0;
// let intervalid = null;


// initializeSlider()
// function initializeSlider(){
//    slides[slideIndex].classList.add("displaySlide");
// }
// function showSlide(index){

// }
// function prevSlide(){

// }
// function nextSlide(){

// }

const slides = document.getElementById("slides");

let currentIndex = 0;

const animeSlides = [
  { img: "Naruto.jpg", title: "Naruto" },
  { img: "Aot.jpg", title: "Attack on Titan" },
  { img: "Demon Slayer.jpg", title: "Demon Slayer" },
  { img: "Jjk.jpg", title: "Jujutsu Kaisen" },
  { img: "MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "One Piece" },
  { img: "images (2).jpg", title: "Death Note" },
  { img: "Tokyo Ghoul.jpg", title: "Tokyo Ghoul" }
];

animeSlides.forEach(anime => {
  const slide = document.createElement("div");

  slide.style.minWidth = "100%";
  slide.style.height = "400px";
  slide.style.display = "flex";
  slide.style.alignItems = "center";
  slide.style.justifyContent = "center";
  slide.style.background = "#000";
  slide.style.position = "relative"; // ✅ FIX HERE

  slide.innerHTML = `
    <img src="${anime.img}" style="
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    ">

    <h2 style="
      position:absolute;
      bottom:20px;
      left:20px;
      color:white;
      background:rgba(0,0,0,0.6);
      padding:10px 15px;
      border-radius:8px;
    ">
      ${anime.title}
    </h2>
  `;

  slides.appendChild(slide);
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % animeSlides.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + animeSlides.length) % animeSlides.length;
  updateSlide();
}

setInterval(nextSlide, 4000);




const container = document.getElementById("animeContainer");






// Fetch top anime
fetch("https://api.jikan.moe/v4/top/anime")
  .then(res => res.json())
  .then(data => {
    const animeList = data.data;

    animeList.forEach(anime => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" />
        <h3>${anime.title}</h3>
        <p>⭐ ${anime.score || "N/A"}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.log(error));



//diiferent page

  card.onclick = () => {
  window.location.href = `details.html?anime=${anime.title}`;
};

  