import $ from 'jquery';

class StartAnimations {
  constructor() {
    this.mainLogo = $('.home-section__content__logo');
    this.catchWord = $('.home-section__content__text');
    this.contactBtn = $('.home-section__content__btn');
    this.aboutTitle = $('.about__title');
    this.aboutFirstPic = $('.about__first-pic');
    this.aboutFirstText = $('.reveal-item-from-right');
    this.aboutFooter = $('.reveal-item-from-center');
    this.hideInitially();
    this.revealAtStart();
  }

  hideInitially() {
    this.mainLogo.addClass("reveal-item");
    this.catchWord.addClass("reveal-item");
    this.contactBtn.addClass("reveal-item");
    this.aboutTitle.addClass("reveal-item");
    this.aboutFirstPic.addClass("reveal-item--from-left");
    this.aboutFirstText.addClass("reveal-item--from-right");
    this.aboutFooter.addClass("reveal-item");
  }

  revealAtStart() {
    var that = this;
    $(document).ready(function() {
      that.mainLogo.addClass('reveal-item--is-visible');
      that.aboutTitle.addClass('reveal-item--is-visible');
      that.aboutFirstPic.addClass('reveal-item--from-left--is-visible');
      that.aboutFirstText.addClass('reveal-item--from-right--is-visible');
      that.catchWord.addClass('reveal-item--is-visible');
      that.contactBtn.addClass('reveal-item--is-visible');
      that.aboutFooter.addClass('reveal-item--is-visible');
      // setTimeout(function () {
      //   that.catchWord.addClass('reveal-item--is-visible');
      //   that.contactBtn.addClass('reveal-item--is-visible');
      // }, 500);
    });
  }
}

export default StartAnimations;
