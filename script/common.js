"use strict";var headerSlider=new Swiper(".slider",{wrapperClass:"slider-wrapper",slideClass:"slider-slide",direction:"vertical",effect:"fade",fadeEffect:{crossFade:!0},mousewheel:{sensitivity:1}});headerSlider.disable();var wrapper=document.querySelector(".wrapper"),intro=document.querySelector(".intro"),introButton=document.querySelector(".intro__button"),pro=document.querySelector(".pro"),proContent=pro.querySelector(".pro__content"),slider=document.querySelector(".slider"),proContentBorder=pro.querySelector(".pro__content-border"),nav=document.querySelector(".nav"),navTitle=nav.querySelector(".nav__title"),navList=nav.querySelector(".nav__list"),navItems=nav.querySelectorAll(".nav__item"),navButton=nav.querySelector(".nav__title"),navCancel=nav.querySelector(".cancel");introButton.addEventListener("click",function(){intro.classList.add("slide"),headerSlider.enable(),slider.classList.add("active"),navTitle.classList.add("active")}),particlesJS.load("particles-js","../script/particlesjs-config (1).json",function(){console.log("callback - particles.js config loaded")});for(var BORDER_PART_NUMBER=10,i=0;i<BORDER_PART_NUMBER;i++)createBorderPart();function createBorderPart(){var part=document.createElement("div");part.classList.add("pro__content-border-part"),proContentBorder.append(part)}navTitle.addEventListener("click",function(){navList.classList.add("active"),wrapper.classList.add("active")}),window.addEventListener("click",function(e){e.target.closest(".nav")||e.target.closest(".nav__list")||(navItems.forEach(function(item){item.classList.remove("active")}),navList.classList.remove("active"),wrapper.classList.remove("active")),e.target.closest(".nav__title")&&(navItems.forEach(function(item){item.classList.add("active")}),navList.classList.add("active"),wrapper.classList.add("active"))}),navCancel.addEventListener("click",function(){navItems.forEach(function(item){item.classList.remove("active")}),navList.classList.remove("active"),wrapper.classList.remove("active")});