function bannerAnimate() {
    let element = document.getElementById('animateBanner');
    setTimeout(() => {
        element.classList.add('animateBanner')
    }, 4000)

}

function toggleNav() {
    var element = document.getElementById("responsiveNav");
    var button = document.getElementById('hamButton');
    element.classList.toggle("active_nav");
    button.classList.toggle("act_button");
}



bannerAnimate();