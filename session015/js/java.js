$(document).ready(function(){
    $("ul li a").click( function(){
     
          
        $("html , body").animate({
            scrollTop:$( $(this).attr('href') ).offset().top
        } ,700)
    })
    $(window).scroll(function(){
        if($(this).scrollTop() > 200 ) {

            $(".top").fadeIn();

               $('header').addClass('samll')

        } else {

            $(".top").fadeOut()

            $("header").removeClass('samll')
        }
    })
    $(".top").click(function(){
        $("html , body").animate({
            scrollTop:0
        } , 700)
    })
   $("#sum").click(function(){
       var num1 =parseInt($("#num1").val());
       var num2 =parseInt($("#num2").val());
       console.log(num1 + num2);
   })
   setTimeout(function(){
       if($('span').hasClass('span') ) {
           $("span").hide();
       
       }else{
           return;
       }
    } ,2000)
   
})

 document.querySelector("#sum").onclick=function(){
     
var num1 =parseInt( document.querySelector('#num1').value)
var num2 = parseInt(document.querySelector('#num2').value)
     console.log(num1 + num2)
 }

