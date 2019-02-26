var elements = document.getElementsByClassName('myImg');
var ele = ["https://www.youtube.com/embed/KtYw2V1qNbU?autoplay=1",
  "https://www.youtube.com/embed/DjXOOh37AhU?autoplay=1",
  "https://www.youtube.com/embed/JEt8HjBJIHE?autoplay=1",
  "https://www.youtube.com/embed/9L6cn0HBxDU?autoplay=1"]
var modal = document.getElementsByClassName('modal');
console.log("mooodal", modal);

// Get the image and insert it inside the modal - use its "alt" text as a caption

var img = elements;
console.log("img");
var modalImg = document.getElementsByClassName("modal-content");
console.log("modalImg");
var captionText = document.getElementsByClassName("caption");
console.log("captionText");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}


function imgOnClick(i) {
  console.log(i)
  modal[i].style.display = "block";
  console.log("elements", ele[i]);
  modalImg[i].src = ele[i];
  console.log("model", img);
  captionText[i].innerHTML = this.alt;
}