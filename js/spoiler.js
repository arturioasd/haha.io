$(document).ready(function(){
    $('.filter__item__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(100)
    })
})