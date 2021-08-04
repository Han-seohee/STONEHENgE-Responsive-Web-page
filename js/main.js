
$(function(){

  $(window).resize(function(){
    var windowWidth = $(this).width();


    if(windowWidth<=1024){
      $('.gnb').off('mouseover');
      $('.gnb').off('mouseout');
    }else{
      $('.gnb').on('mouseover', function(){
        $('.sub-menu, .sub-bg').stop().show();
      });
      $('.gnb').on('mouseout', function(){
        $('.sub-menu, .sub-bg').stop().hide();
      });
    }//1024
  });
  
  $(window).trigger('resize');

  //menu-btn 클릭이벤트
  $('#toggle-btn').click(function(){
    $('nav').show();
  });

  $('.close-btn').click(function(){
    $('nav').hide();
  });

  $('.gnb>li>a').click(function(){
    $(this).siblings('.sub-menu').slideToggle();
  });

  //외부영역 클릭시 팝업메뉴 닫기
  //has() - 특정요소를 가지고 있는 요소를 선택하는 메서드
  menuArea.mouseup(function(e){
    console.log(menuArea.has(e.target).length);
    console.log(menuArea.has(e.target));
    
    if(menuArea.has(e.target).length===0) {
      menuArea.hide();
      $('.index-wrap').css({filter:'blur(0px)'});
      $('body,html').css({height:'auto', overflow:'visible'});
      $('.h-top').animate({right:'-100%'},200);
    }
  });



});//로딩함수 끝