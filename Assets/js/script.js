// Scroll Top Button hilang jika scrolling navbar yg dibawah aktif
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.scroll-top').fadeIn();
        }
        else{
            $('.scroll-top').fadeOut();
        }
    })
    $('.scroll-top').click(function(){
        $("html, body").animate({
            scrollTop:0
        },600);
        return false;
    })
})

// Scrolling Navbar, bentok sama scroll top button
// $(window).on("scroll", function (){ 
//     if ($(window).scrollTop()) { 
//         $('nav').addClass('navbar-white'); 
//         document.getElementById("BrandCA").innerHTML = "<img class='logo' src='Assets/img/logo_ca1.png'>";
//     } 
//     else { 
//         $('nav').removeClass('navbar-white'); 
//         document.getElementById("BrandCA").innerHTML = "<img class='logo' src='Assets/img/logo_ca.png' width='150px'>"; 
//     } 
// })







