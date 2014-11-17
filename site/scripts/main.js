/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

 /*global $:false */

'use strict';

var Prechu = {};

Prechu.Nav = {
  nodes: {
    navdrawerContainer: $('.navdrawer-container'),
    appbar: $('.app-bar'),
    menuBtn: $('.js-nav-toggle'),
    main: $('main')
  },

  closeMenu: function () {
    Prechu.Nav.nodes.appbar.removeClass('open');
    Prechu.Nav.nodes.navdrawerContainer.removeClass('open');
  },

  toggleMenu: function () {
    Prechu.Nav.nodes.appbar.toggleClass('open');
    Prechu.Nav.nodes.navdrawerContainer.toggleClass('open');
    Prechu.Nav.nodes.navdrawerContainer.addClass('opened');
  },

  initNav: function() {
    this.nodes.main.on('click', this.closeMenu);
    this.nodes.menuBtn.on('click', this.toggleMenu);
    this.nodes.navdrawerContainer.on('click', function (event) {
      if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
        this.closeMenu();
      }
    });
  }
};

Prechu.Slider = {
  node: $('.js-unslider'),

  handleArrowClick: function() {
    var fn = $(this).data('slider-action');
    Prechu.Slider.node.data('unslider')[fn]();
  },

  initSliderArrows: function() {
    if(this.node.find('.banner-slide').length > 1) {
      this.node.find('.unslider-arrow')
        .addClass('unslider-arrow_enabled')
        .click(this.handleArrowClick);
    }
  },

  initSlider: function() {
    if(typeof $.fn.unslider === 'function') {
      this.node.addClass('unslider-enabled')
        .unslider({
          fluid: true
        });
      this.initSliderArrows();
    }
  }
};

$(function () {

  Prechu.Nav.initNav();
  Prechu.Slider.initSlider();

});
