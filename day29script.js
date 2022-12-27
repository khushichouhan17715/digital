const scroller = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
 });



it=gsap.timeline(); 

it
.from("#img1",{
   y:"100px",
   duration:1,
   opacity:0    
})
.from("#img2",{
    x: "100px",
    duration:1,
    opacity:0    
 },'-=1')
 .from("#img3",{
    y: "-100px",
    duration:1,
    opacity:0    
 },'-=1')

 .from("#center_div2 h3",{
     y:"70px",
   duration:.8,
    opacity:0
 })
 
 
 
 var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });