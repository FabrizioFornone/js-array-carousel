// Creazione array "titles"

const titles = ["Titolo 1", "Titolo 2", "Titolo 3", "Titolo 4"];

// Creazione array "Paragraph"

const paragraph = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus magni iusto? Aspernatur odio odit totam aut laborum necessitatibus a, reiciendis, quis possimus fuga quaerat, autem optio accusamus. Quidem, quibusdam.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero itaque ex, molestias soluta nesciunt sit ipsum iusto sunt dignissimos tempora maiores tempore eaque delectus perferendis provident aliquid autem repudiandae beatae!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae quisquam modi ad nam, assumenda commodi esse nesciunt adipisci sit eveniet quam quia nisi. Expedita minima nihil quis iusto? Adipisci?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestias? Qui culpa deleniti quia nesciunt accusamus amet est atque iusto, tenetur eum illo nisi maxime quam cum! Distinctio, eius eos.",
];

// Creazione array "Images"

const images = [
  "./img/6221794_1355_dante.jpg",
  "./img/Gustave_Doré_-_Dante_Alighieri_-_Inferno_-_Plate_13_(Canto_V_-_Minos).jpg",
  "./img/Gustave_Doré_-_The_Inferno,_Canto_13.jpg",
  "./img/Lucifer-King-of-Hell.jpg",
];

// Creo current Index = 0

let currentIndex = 0;

// Creo gli agganci con il DOM del Title, del Paragraph e dell' IMG

const hookTitleHtml = document.querySelector(".hook-title");

const hookParagraphHtml = document.querySelector(".hook-paragraph");

const hookImgHtml = document.getElementById("hook-img");

// Creo gli agganci con il Dom delle arrows FW e BW

const arrowFw = document.getElementById("arrow-fw");

const arrowBw = document.getElementById("arrow-bw");

/* Associo "titles" array nella posizione "current index"
  al h2 class = .hook-title */

hookTitleHtml.innerHTML = titles[currentIndex];

/* Associo "paragraph" array nella posizione "current index"
  al p class = .hook-paragraph */

hookParagraphHtml.innerHTML = paragraph[currentIndex];

/* Associo "images" array nella posizione "current index"
  al tag img class= .hook-img */

hookImgHtml.src = images[currentIndex];

// click Event "Forward Arrow"

arrowFw.addEventListener("click", function () {
  // incremento di 1 ogni click
  currentIndex++;
  // check per farlo ripartire da 0 se arriva alla fine
  if (currentIndex > titles.length - 1 && currentIndex > paragraph.length - 1) {
    currentIndex = 0;
  }
  //   istruzione cambio title
  hookTitleHtml.innerHTML = titles[currentIndex];
  // istruzione cambio paraghraph
  hookParagraphHtml.innerHTML = paragraph[currentIndex];
  // istruzione cambio images
  hookImgHtml.src = images[currentIndex];
});

// click Event "Backward Arrow"

arrowBw.addEventListener("click", function () {
  // incremento di 1 ogni click
  currentIndex--;
  // check per farlo ripartire da 0 se arriva alla fine
  if (currentIndex < 0) {
    currentIndex = titles.length - 1;
    currentIndex = paragraph.length - 1;
  }
  //   istruzione cambio title
  hookTitleHtml.innerHTML = titles[currentIndex];
  // istruzione cambio paraghraph
  hookParagraphHtml.innerHTML = paragraph[currentIndex];
  // istruzione cambio images
  hookImgHtml.src = images[currentIndex];
});
