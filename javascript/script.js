//JavaScript Document

jQuery(document).ready(function(){
   
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
         $(this).find('.submenu').stop().slideUp(500);
    });
   
var imgs = 2;
var now = 0;

start();

function start(){
    $(".imgslide>a").eq(0).siblings().animate({width:"-800px"});
    
    setInterval(function(){
        now = now==imgs?0:now+=1;
        $(".imgslide>a").eq(now-1).animate({width:"-800px"});
        $(".imgslide>a").eq(now).animate({width:"800px"});},3000);
}
 
    $(function(){
       $('.tabmenu>li>a').click(function(){
          $(this).parent().addClass("active").siblings().removeClass("active");return false;
           
           
       });
    });
    
    $(".notice li:first").click(function(){
       $("#modal").addClass("active"); 
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
});

