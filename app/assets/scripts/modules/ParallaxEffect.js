import $ from 'jquery';
import parallax from 'jquery-parallax';

class ParallaxEffect {
  constructor() {
    this.backgroundAbout = $(".about");
    this.backgroundElagage = $(".elagage");
    this.backgroundAbattage = $(".abattage");
    this.events();
  }

  events() {
    $(window).scroll(this.parallaxEffect());
  }

  parallaxEffect() {
    this.backgroundAbout.parallax("center", 0.2, true);
    this.backgroundElagage.parallax("center", 0.2, true);
    this.backgroundAbattage.parallax("center",0.2, true);

  }

}

export default ParallaxEffect;
