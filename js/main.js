$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assistir(){
    window.open("https://www.youtube.com/watch?v=9GgxinPwAGc");
}

function info(){
    document.getElementById("container").innerHTML = "<i id='close' class='far fa-window-close' onClick='fechar()'></i><img src='img/info.JPG' id='img-info'>";
}

function fechar(){
    window.location.href = ("index.html");
}


