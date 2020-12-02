$(document).ready(function(){
    $(".navigation-section").append("<div class='toggle-bar'><span></span><span></span><span></span></div>");
    $(".toggle-bar").click(function(){
    $("nav").toggleClass("open-menu-bar");
    });
})