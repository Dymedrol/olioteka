// import { initWishList } from './wishlist';

$(document).ready(function(){
  // initWishList();
  const burger = $('#burger');
  const mobileMenu = $('#mobile-menu');
  const mobileMenuClose = mobileMenu.find('.olio-header-menu-mobile__close');

  burger.click(function() {
    console.log('!!!!', mobileMenu.length)
    mobileMenu.show("fast");
  });

  mobileMenuClose.click(function() {
    mobileMenu.hide('fast');
  });
})


