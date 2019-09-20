$(document).ready(function() {
   $(".action").click(function(){
    //    document.querySelector('div').style.display="none"
       $("div").slideToggle(1000)
   })


   var count = 1;
    $(".assitem").click( function() {
        $(".list").append("<li>" + count++ + "</li>")
        
        


    } )

    $(".ullist li a").click(function(){
        // $("li").removeClass('active')
        $(this).addClass('active').parent().siblings().find("a").removeClass('active')
    })


     var headerTop = $("header").offset().top
    $(window).scroll(function() {
        var windowscroll = $(this).scrollTop();
        if(windowscroll >= headerTop) {
            $("header").css({
                'position': 'fixed',
                "top":0,
                "width" :'100%'
            })

        } else{
            $("header").css({
                'position':'static'
            })
        }
    });
})
