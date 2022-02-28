$(function() {
  $('a[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 800);
              return false;
          }
      }
  });
});

///hover container lang menu
$('#lang-menu').hover(
  function(){
      $(this).addClass('cls-border-lang');
      $('#lang-menu ul').stop().slideToggle(100);
  },
  function(){
       $(this).removeClass('cls-border-lang');
      $('#lang-menu ul').stop().slideToggle(100);  
  }
);
/// click languages
$('#lang-menu ul li').on('click', function(){
    //select lang and apply changes
    $lang = $(this).text();
    $('#lang-menu .current-lang').text($lang);
});

$('#hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('#sf-nav').toggleClass('show');
    $('body').toggleClass('overflow-y-hidden');
});

$('a.sf-nav-item').click(function() {
    $('a.sf-nav-item').removeClass('active');
    $(this).addClass('active');
    $('#hamburger').toggleClass('is-active');
    $('body').toggleClass('overflow-y-hidden');
    $('#sf-nav').toggleClass('show');
});

$('#values-metaverse-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false
});

$('#product-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false
});