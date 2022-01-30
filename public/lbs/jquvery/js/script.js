$(document).ready(function () {
    
     $(window).scroll(function () {

       if($(this).scrollTop() > 100){

           $('#top').show(600);

       }else{

           $('#top').hide(600);

       }
     });
     $('#top').click(function(){

        $('html , body').animate({
            scrollTop:0
        } , 900)

     });
});