const carousel = [...document.querySelectorAll('.carousel img')];
let carouselImageIndex = 0
const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active')
    if(carouselImageIndex >= carousel.length-1){
        carouselImageIndex = 0
    } else{
        carouselImageIndex++
    }
    carousel[carouselImageIndex].classList.toggle('active')
}
setInterval( ()=>{
    changeCarousel();
},3000);

const musicPlayerSection = document.querySelector('.music-player-section')
let clickCount = 1

musicPlayerSection.addEventListener('click', ()=>{
    if(clickCount >= 2){
        musicPlayerSection.classList.add('active');
        clickCount = 1
        return;
    }
    clickCount++;
    setTimeout(()=>{
        clickCount= 1;
    }, 250);
})

const backToHomeBtn = document.querySelector('.music-player-section .back-btn')
backToHomeBtn.addEventListener('click', ()=> {
    musicPlayerSection.classList.remove('active')
})

const  playerlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn')

navBtn.addEventListener('click', () => {
    playerlistSection.classList.add('active')
    
})
 const backToMusicPlayer = document.querySelector('.playlist.back-btn')
  backToMusicPlayer.addEventListener('click', () => {
    playerlistSection.classList.remove('active')
  })

