
// swiper js
var swiperOptions2 = {
    loop: true,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    speed: 4000,
    freeModeMomentum: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);


// image view modal
const imgModal = document.getElementById("imgModal");
const showImg = document.getElementById("showImg");

function showImage(src) {
    imgModal.classList.remove('hidden');
    showImg.src = src;
}
function closeImage() {
    imgModal.classList.add('hidden');
}


//  Video popup  code
var player;

const modal = document.getElementById("popup");
const videoFrame = document.getElementById("videoFrame");

function openPopup(videoId) {
    videoFrame.src = "https://www.youtube.com/embed/" + videoId;
    modal.style.display = "block";
}

function closePopup() {
    videoFrame.src = "";
    modal.style.display = "none";
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
        imgModal.style.display = "none";
    }
});

function selectCourse(id) {
    console.log(id, dataUrl)
    populateHTML(dataUrl, id);
    var url = window.location.href;
    url.searchParams.append(id)
}
