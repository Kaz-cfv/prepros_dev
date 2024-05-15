//@prepros-prepend _pages/global.js


(() => {

})();

//DOMContentLoaded
$(() => {
});

//images resources loaded
$(window).on('load', () => {

  $(window).trigger('loading');
});

//after loading animation
$(window).on('loading', () => {

});

// スマホ・タブレットの向き判定
// $(window).on('orientationchange', ()=>{
//   if(isPortrait()){
//     console.log('isPortrait');
//   } else {
//     console.log('isLandscape');
//   }
// });
