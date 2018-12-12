import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.header = $(".header");
    this.menuBtnView = $(".header__content__menu-btn");
    this.menuContent = $(".header__content__navbar");
    this.events();
  }

  events() {
    this.menuBtnView.click(this.toggleMenu.bind(this));
    this.menuContent.click(this.hideMenu.bind(this));
  }

  toggleMenu() {
    this.header.toggleClass("header--menu-is-active");
    this.menuContent.toggleClass("header__content__navbar--is-visible");
  }

  hideMenu() {
    this.menuContent.removeClass("header__content__navbar--is-visible");
  }
}

export default MobileMenu;
