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
  elements: {
    navdrawerContainer: $('.navdrawer-container'),
    appbarElement: $('.app-bar'),
    menuBtn: $('.js-nav-toggle'),
    main: $('main')
  },

  closeMenu: function () {
    this.elements.appbarElement.classList.remove('open');
    this.elements.navdrawerContainer.classList.remove('open');
  },

  toggleMenu: function () {
    this.elements.appbarElement.classList.toggle('open');
    this.elements.navdrawerContainer.classList.toggle('open');
    this.elements.navdrawerContainer.classList.add('opened');
  },

  initNav: function() {
    this.elements.main.on('click', this.closeMenu);
    this.elements.menuBtn.on('click', this.toggleMenu);
    this.elements.navdrawerContainer.on('click', function (event) {
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
    this.node.datthis.node('unslider')[fn]();
  },

  initSliderArrows: function() {
    if(this.node.find('.banner-slide').length > 1) {
      this.node.find('.unslider-arrow').addClass('unslider-arrow_enabled');
      this.node.find('.unslider-arrow').click(this.handleArrowClick);
    }
  },

  initSlider: function() {
    if(typeof $.fn.unslider === 'function') {
      this.node.unslider({
        fluid: true
      });
    }
  }
};

$(function () {

  Prechu.Nav.initNav();
  Prechu.Slider.initSlider();

});
