const galleryItem = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const lightboxImage = document.getElementById("lightbox-image");

galleryItem.forEach((item) => {
  item.addEventListener("click", ()=>{
    lightBox.classList.add("show");
    lightboxImage.src = item.src.replace("-thumbnail", "");
  });
});

const hideLightbox = () =>lightBox.classList.remove("show");
closeBtn.addEventListener("click", hideLightbox);

lightBox.addEventListener("click", (e)=>{
  if(e.target === lightBox){
    hideLightbox();
  }
});
