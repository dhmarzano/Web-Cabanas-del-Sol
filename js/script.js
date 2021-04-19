// efecto scroll
const links = document.querySelectorAll(".nav-link a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// imagen modal 
// imagen dentro de la ventana modal
var modalImg = document.getElementById("imgFull");
// items de la galeria de imagenes 
var imgs = document.getElementsByClassName("item-inner");
// busca el item al que se realizo click
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener(
    "click",
    ((i) => {
      return function () {
        // llama a la ventana modal 
        openModal(i);
      };
    })(i)
  );
}

function openModal(indx) {
//busca el div de la imagen modal y lo muestra por pantalla
  document.getElementById("myModal").style.display = "block";
//obtiene la url del item imagen seleccionado
  var img = document.getElementsByClassName("item-inner")[indx], style = img.currentStyle || window.getComputedStyle(img, false),
    source = style.backgroundImage.slice(5, -2);
    modalImg.src = source;
}

// cierra la ventana modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
