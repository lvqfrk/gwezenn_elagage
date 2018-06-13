import $ from 'jquery';

class MobileMenu {
  constructor() {
    /*get the button element*/
    this.menuBtnView = $(".header__content__menu-btn");
    this.menuContent = $(".header__content__navbar");
    this.events();
  }

  events() {
    this.menuBtnView.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuContent.toggleClass("header__content__navbar--is-visible");
    console.log("btn is clicked !!!!!!!!!!");

  }
}

export default MobileMenu;
