const mainImg = document.getElementById("main-img");
const photos = document.querySelectorAll('.preview img');

let index = 0;


function advanceSlider(num) {
    index += num;

    if(index > photos.length - 1) index = photos.length - 1;
    if(index < 0) index = 0;

    toggleActivePhoto(photos[index]);
    changePhoto(photos[index].src);
}

function changePhoto(url) {
    mainImg.src = url;
}

function toggleActivePhoto(photo) {
    const activePhoto = document.querySelector('.preview .active');

    if(activePhoto) {
        activePhoto.classList.remove('active');
    }

    photo.classList.add('active');
}

export function initSliderEvents() {

    const prevBtn =  document.getElementById("prev-btn");
    const nextBtn =  document.getElementById("next-btn");


    photos.forEach((photo, photoIndex) => {
        photo.addEventListener('click', 
            () => {
                index = photoIndex;
                toggleActivePhoto(photo);
                changePhoto(photo.src);
            }
        );
    });

    nextBtn.addEventListener("click", () => {
        advanceSlider(1);
    });

    prevBtn.addEventListener("click", () =>{
        advanceSlider(-1);
    });

}