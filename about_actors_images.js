const about = document.getElementById("about-h5");
const actors = document.getElementById("actors-h5");
const images = document.getElementById("images-h5");

const aboutContent = document.getElementById("about-content");
const actorsContent = document.getElementById("actors-content");
const imagesContent = document.getElementById("images-content");

aboutContent.innerHTML = "<p> Filmens info! </p>";
actorsContent.innerHTML = "<p> skådis skådis </p>";
imagesContent.innerHTML = "<p> bild </p>";

aboutContent.style.display = "block";
actorsContent.style.display = "none";
imagesContent.style.display = "none";

about.addEventListener("click", function () {
    showContent(aboutContent);
});
actors.addEventListener("click", function () {
    showContent(actorsContent);
});
images.addEventListener("click", function () {
    showContent(imagesContent);
});

function showContent(contentDiv) {
    aboutContent.style.display = "none";
    actorsContent.style.display = "none";
    imagesContent.style.display = "none";

    contentDiv.style.display = "block";
}