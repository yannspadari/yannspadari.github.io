// PUSH FOOTER TO BOTTOM
// var innerScreenHeight = window.innerHeight;
// document.querySelector("#footer").style.top = innerScreenHeight + "px";

$('input').focus(function() {
    $('footer').addClass('hidden-footer');
 });
 
 $('input').focusout(function() {
    $('footer').removeClass('hidden-footer');
 });