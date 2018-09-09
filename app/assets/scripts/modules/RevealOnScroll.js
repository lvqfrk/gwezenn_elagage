import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(){
    this.itemToReveal = $('.revealOnScroll');
    this.scrollingWrapper = $('.scrolling-wrapper');
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemToReveal.addClass("reveal-item");
    this.scrollingWrapper.addClass("reveal-item");
  }

  createWaypoints() {
    this.itemToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: "85%"
      });
    });

    this.scrollingWrapper.each(function() {
      var currentWrapper = this;
      new Waypoint({
        element: currentWrapper,
        handler: function() {
          $(currentWrapper).addClass("reveal-item--is-visible");
        },
        offset: "85%"
      });
    });
  }

}

export default RevealOnScroll;
