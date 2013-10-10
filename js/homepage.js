var paragraphs = new Array();
$(document).ready(function (){
  less.modifyVars({'@BGC-A': 'rgba(' + Math.random()*225 + ',' + Math.random()*225 +',' + Math.random()*225 +',.45)'});
  for(i=0; i<$('.content-detail-section').length; i++){
    paragraphs[i] = $('.content-detail-section:nth-child(' + (i+1) +')');
  } 
  $('.top-nav').click(function (){
  $('html, body').animate({
    scrollTop: $("#" + $(this).attr('id').replace($(this).attr('class'),'box')).offset().top-80
  }, 1500,function() {
    less.modifyVars({'@BGC-A': 'rgba(' + Math.random()*225 + ',' + Math.random()*225 +',' + Math.random()*225 +',.45)'});
  });
});
$('#side-nav #top-btn').click(function (){
  $('html, body').animate({
    scrollTop: $('#about-box').offset().top-80
  }, 500);
});
$('#side-nav #up-btn').click(function (){
  for(i=0; i<$('.content-detail-section').length; i++){
    if((window.scrollY - paragraphs[i].offset().top) <= -80 ){
      $('html, body').animate({
        scrollTop: paragraphs[i-1].offset().top-80
      }, 500);
      break;
    }
  }
});
$('#side-nav #down-btn').click(function (){
  for(i=0; i<$('.content-detail-section').length; i++){
    if((window.scrollY - paragraphs[i].offset().top) < -80 ){
      $('html, body').animate({
        scrollTop: paragraphs[i].offset().top-80
      }, 500);
      break;
    }
  }
});
$('#toggle-btn').click(function (){
   $(this).parent().toggleClass('right-nav-close');
});
});


