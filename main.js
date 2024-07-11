//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');
window.addEventListener('scroll', function () {
    windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');

})
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollbtn');
    scroll.classList.toggle("active", window.scrollY >  300)
})
function scrollToTop(){
    window.scrollTo({
        top: 0
    })
}
let progress = document.getElementsByClassName("progressbar");
let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressheight = (window.pageXOffset/totalheight)*100;
    progress.style.height = progressheight + '%'
}

