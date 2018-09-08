import $ from 'jquery';
import parallax from 'jquery-parallax';

class ParallaxEffect {
  constructor() {
    this.backgroundElagage = $(".elagage");
    this.backgroundAbattage = $(".abattage");
    this.events();
  }

  events() {
    $(window).scroll(this.parallaxEffect());
  }

  parallaxEffect() {
    this.backgroundElagage.parallax("center", 0.1, true);
    this.backgroundAbattage.parallax("center",0.1, true);
  }
}

export default ParallaxEffect;
