const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function movemouse(){
    window.addEventListener('mousemove',function(dets){
        this.document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}
movemouse();

function firstpageanimations(){
    var kr = gsap.timeline();
    kr.from("#nav",{
        y :'-10',
        opacity:0,
        duration:0.5,
        ease:Expo.easeInOut
    }).to(".boundingelement",{
        y :'0',
        duration:2,
        ease:Expo.easeInOut,
        stagger:.2,
        delay:-1
    }).from(".herofooter",{
        y :'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,})
}
firstpageanimations();

//image ko move krne wala code
   
document.querySelectorAll(".elements").forEach(function(elem){

    elem.addEventListener("mouseleave",function(details){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5
        })
    })

elem.addEventListener("mousemove",function(details){
    //image ko box me move krne ke liye hame y xsix ki height me se - jaha  {elem.getBoundingClientRect} pr mouse h vaha ki height nikalni padehi
    // console.log(elem.getBoundingClientRect().top) isse height nikal jayegi top se
    var diff = details.clientY - elem.getBoundingClientRect().bottom;
    ;

    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        left:details.clientX,
        top:diff,
    })
})
})