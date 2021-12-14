// Creazione array "titles"

const titles = ["Titolo 1", "Titolo 2", "Titolo 3", "Titolo 4"];

// Creazione array "Paragraph"

const paragraph = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus magni iusto? Aspernatur odio odit totam aut laborum necessitatibus a, reiciendis, quis possimus fuga quaerat, autem optio accusamus. Quidem, quibusdam.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero itaque ex, molestias soluta nesciunt sit ipsum iusto sunt dignissimos tempora maiores tempore eaque delectus perferendis provident aliquid autem repudiandae beatae!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae quisquam modi ad nam, assumenda commodi esse nesciunt adipisci sit eveniet quam quia nisi. Expedita minima nihil quis iusto? Adipisci?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestias? Qui culpa deleniti quia nesciunt accusamus amet est atque iusto, tenetur eum illo nisi maxime quam cum! Distinctio, eius eos.",
];

// Creo current Index = 0

let currentIndex = 0;

// Creo gli agganci con il DOM del Title e del Paragraph

const hookTitleHtml = document.querySelector(".hook-title");

const hookParagraphHtml = document.querySelector(".hook-paragraph");

// Creo gli agganci con il Dom delle arrows FW e BW

const arrowFw = document.getElementById("arrow-fw");

const arrowBw = document.getElementById("arrow-bw");

/* Associo "titles" array nella posizione "current index"
  al div .hook-title */

hookTitleHtml.innerHTML = titles[currentIndex];

/* Associo "paragraph" array nella posizione "current index"
  al div .hook-paragraph */

hookParagraphHtml.innerHTML = paragraph[currentIndex];

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
});
