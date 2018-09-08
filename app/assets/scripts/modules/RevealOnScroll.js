import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(){
    this.itemToReveal = $('.revealOnScroll');
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemToReveal.addClass("reveal-item");
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
  }

}

export default RevealOnScroll;
