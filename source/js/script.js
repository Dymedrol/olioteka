import { initCollectionPage } from './collection-page';
import { initProductPage } from './productPage';
$(document).ready(function(){
  initCollectionPage();
  initProductPage();

  const burger = $('#burger');
  const mobileMenu = $('#mobile-menu');
  const mobileMenuClose = mobileMenu.find('.olio-header-menu-mobile__close');

  burger.click(function() {
    mobileMenu.show("fast");
  });

  mobileMenuClose.click(function() {
    mobileMenu.hide('fast');
  });
})


