import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Header {
  constructor() {
    this.siteHeader = $('.header');
    this.headerTriggerElement = $('.home-section__content__logo');
    this.createHeaderWaypoints();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.header__content__navbar a');
    this.createPageSectionsWaypoints();
  }

  createHeaderWaypoints() {
    var that = this;
    new Waypoint({
      element:this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass('header--dark');
        } else {
          that.siteHeader.removeClass('header--dark');
        }
      }
    });
  }

  createPageSectionsWaypoints() {
    var that = this;

    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "50%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default Header;
