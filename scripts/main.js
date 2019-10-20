
$( document ).ready(function() {
    // console.log( "Document Loaded" )
    
    // Menun & Header Style Manipulation
    $('.menu-icon').on("click", function() {
        if ($('header').hasClass('menu-open')) {
            $('header').removeClass('menu-open')
            $('.menu-icon').removeClass('menu-open')
            console.log( "remove class menu-open to header" )
        } else {
            $('header').addClass('menu-open')
            $('.menu-icon').addClass('menu-open')
            console.log( "add class menu-open to header" )
        }
    })
})
// setTimeout(function(){
//     document.getElementsByTagName('.logo-title').className = 'hide';
// }, 2500);