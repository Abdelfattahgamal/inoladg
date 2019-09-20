$(document).ready(function(){

    $("ul a").click(function(){
        $("a").removeClass('color')
        
        $(this).addClass('color')
        
        var target = $(this).attr('href'); // #about
        
        $("body,html").animate({
            
            scrollTop: $(target).offset().top
            
        } , 1000)
        
    });
    
    if(  $("#show").hasClass('test')  ) {
        
       $(".data").text("Right")
    
    } 
    
    else {
        
       $(".data").text('Wrong')
        
    }
    
    var w = $(".hamada").width();
    var h = $(".hamada").height();
    
    $(".target").css({
        width: w ,
        height: h ,
        background : 'blue'
    })
    
    
//    $(window).scroll(function(){
//        var scroll = $(this).scrollTop();
//        var nav = $(".header").offset().top
//        
//        if( scroll > nav ) {
//            $(".header").css({
//                position:'fixed',
//                width: '100%',
//                top: 0,
//            })
//        }
//    })
    
    $(window).resize(function(){
        if( $(window).width() < 575 ) {
            $('.ads').show()
        } else {
            $('.ads').hide()
        }
    });
    
    
});