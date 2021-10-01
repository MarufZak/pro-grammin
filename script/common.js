"use strict";var headerSlider=new Swiper(".slider",{wrapperClass:"slider-wrapper",slideClass:"slider-slide",direction:"vertical",effect:"fade",fadeEffect:{crossFade:!0},mousewheel:{sensitivity:1}}),footerSlider=new Swiper(".footer__swiper",{wrapperClass:"footer__swiper-wrapper",slideClass:"footer__swiper-slide",slideActiveClass:"footer__swiper-slide_active",navigation:{nextEl:".footer__swiper-next",prevEl:".footer__swiper-prev"},slidesPerView:1});headerSlider.disable();var wrapper=document.querySelector(".wrapper"),intro=document.querySelector(".intro"),introButton=document.querySelector(".intro__button"),pro=document.querySelector(".pro"),proContent=pro.querySelector(".pro__content"),slider=document.querySelector(".slider"),proContentBorder=pro.querySelector(".pro__content-border"),nav=document.querySelector(".nav"),navTitle=nav.querySelector(".nav__title"),navList=nav.querySelector(".nav__list"),navItems=nav.querySelectorAll(".nav__item"),navButton=nav.querySelector(".nav__title"),navCancel=nav.querySelector(".cancel"),copyTitleSpans=document.querySelectorAll(".copy__title span");introButton.addEventListener("click",function(){intro.classList.add("slide"),headerSlider.enable(),slider.classList.add("active"),navTitle.classList.add("active")}),particlesJS.load("particles-js","../script/particlesjs-config (1).json",function(){console.log("callback - particles.js config loaded")});for(var BORDER_PART_NUMBER=10,i=0;i<BORDER_PART_NUMBER;i++)createBorderPart();function createBorderPart(){var part=document.createElement("div");part.classList.add("pro__content-border-part"),proContentBorder.append(part)}navTitle.addEventListener("click",function(){navList.classList.add("active"),wrapper.classList.add("active")}),window.addEventListener("click",function(e){e.target.closest(".nav")||e.target.closest(".nav__list")||(navItems.forEach(function(item){item.classList.remove("active")}),navList.classList.remove("active"),wrapper.classList.remove("active")),e.target.closest(".nav__item")&&(navItems.forEach(function(item){item.classList.remove("active")}),navList.classList.remove("active"),wrapper.classList.remove("active")),e.target.closest(".nav__title")&&(navItems.forEach(function(item){item.classList.add("active")}),navList.classList.add("active"),wrapper.classList.add("active"))}),navCancel.addEventListener("click",function(){navItems.forEach(function(item){item.classList.remove("active")}),navList.classList.remove("active"),wrapper.classList.remove("active")});var fontFamilies=["Boho","Bubblegum","Cantora","Futura"];copyTitleSpans.forEach(function(item){setInterval(function(){setFontFamily(item)},1e3)});function setFontFamily(element){element.style.fontFamily=fontFamilies[getRandomNumber(0,fontFamilies.length)]}function getRandomNumber(min,max){return Math.round(Math.random()*(max-min)+min)}navItems.forEach(function(item,index){item.addEventListener("click",function(){index===navItems.length-2&&1280>window.innerWidth?headerSlider.slideTo(index+1,500):headerSlider.slideTo(index,500)})});