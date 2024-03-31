// LOADER ANIMATION
function loaderanimation(){
    var t5 = gsap.timeline()
    t5.to("#tags h5", {
        y: -76,
        delay: .5,
        duration: 2.5,
      })
      .to("#fullchange", {
        y: -50,
        rotateX: -90,
        duration: 1,
        opacity: 0
      })
      .to("#loader1", {
        height: 0,
        duration: 0.8,
        delay: 0.5
      })
      .to("#loader2", {
        height: 0,
        duration: 0.8,
      }, "-=0.3")
      .to("#loader3", {
        height: 0,
        duration: 0.8,
      }, "-=1")
      .to("#loader4", {
        height: 0,
        duration: 0.8,
      }, "-=0.7")
      .to(".loader", {
        opacity:0,
        duration: 0.1
      })
}
loaderanimation();


//MENU 
let navigation = document.querySelector(".navigation");
let bar = document.querySelector(".bar");
const list = bar.classList;
const list2 = navigation.classList;
document.querySelector(".bar").onclick = function () {
    if (flag === 0) {
        bar.classList.add("active");
        navigation.classList.add("active")
        flag = 1
    }
    else if (flag === 1) {
        bar.classList.remove("active");
        navigation.classList.remove("active")
        flag = 0
    }
}


// THEME CHANGE EFFECT
var toggle = document.querySelector("#toggle #tglcircle");
var sun = document.querySelector("#toggle #tglcircle i .ri-sun-line")
var flag = 0;
toggle.addEventListener("click", function () {
    if (flag === 0) {
        delay:1;
        toggle.style.transform = "translate(0%,88%)";
        document.documentElement.style.setProperty("--pri", "rgb(255, 255, 255)")
        document.documentElement.style.setProperty("--sec", "rgb(23, 23, 23)")
        document.documentElement.style.setProperty("--shw", "#e0553a")
        document.querySelector('#video').style.display="none";
        flag = 1;
    }
    else {
        delay:1;
        toggle.style.transform = "translate(0%,0%)";
        document.documentElement.style.setProperty("--pri", "rgb(23, 23, 23)")
        document.documentElement.style.setProperty("--sec", "rgb(255, 255, 255)")
        document.documentElement.style.setProperty("--shw", "#FBE094")
        document.querySelector('#video').style.display="initial";

        flag = 0;
    }
})





// PAGE TRANSITION ON CLICK OF THEME TOGGLE BUTTON
const topanime = document.querySelector("#tglcircle");
topanime.addEventListener("click", function () {
    let tl = gsap.timeline({ ease: "power4.inOut" });
    tl.to(".from-top .tile", {
        duration: 1,
        height: "100%",
        top: "0%",
        stagger: 0.05,
    });
    tl.to(".from-top .tile", {
        duration: 0.4,
        height: "100%",
        top: "100%",
        stagger: -0.05,
    });
    tl.set(".from-top .tile", { top: "0", height: "0" });
}
);


// HI THERE AND FRONTEND WEB DEVELOPER ANIMATION FOR CLASS best IN PAGE 1 
var text = document.querySelectorAll(".best");
text.forEach(function (elem) {
    gsap.set(elem, { opacity: 0 });
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            scroller: '#main',
            start: 'top 100%',
        },
        opacity: 1,
        delay: 6,

        onStart: function () {
            $(elem).textillate({ in: { effect: 'fadeInLeft' } });
        }
    });
})


// CREATIVE WEB DEVELOPER ANIMATION FOR CLASS best2 IN PAGE 1 
var text2 = document.querySelectorAll(".best2");
text2.forEach(function (elem) {
    gsap.set(elem, { opacity: 0 });
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            scroller: '#main',
            start: 'top 100%',
            // markers: true
        },
        opacity: 1,
        delay: 6,
        onStart: function () {
            $(elem).textillate({ in: { effect: 'fadeIn' } });
        }
    });
})


// CURSOR ENLARGES ON HOVER OVER CREATIVE WEB DEVELOPER IN PAGE 1
// var cursor = document.querySelector("#cursor");
// document.querySelector(".best2").addEventListener("mousemove", function () {
//     cursor.style.height = '15vh';
//     cursor.style.width = '15vh';
// })
// document.querySelector(".best2").addEventListener("mouseleave", function () {
//     cursor.style.height = '3vh';
//     cursor.style.width = '3vh';
// })


// LINE 1 OF MARQUEE EFFECT OF PAGE 2
gsap.to('.marquee h1', {
    ease: 'linear',
    x: '100%',
    repeat: -1,
    duration: 4
})


// LINE 2 OF MARQUEE EFFECT OF PAGE 2
gsap.to('#page2 .marquee-1 h1', {
    ease: 'linear',
    x: '-100%',
    repeat: -1,
    duration: 4
})


function circlesWalaAnimation(){
    const circle1 = document.querySelector("#circle_1_");
    const circle2 = document.querySelector("#circle_2_");
    const circle3 = document.querySelector("#circle_3_");
    const circle4 = document.querySelector("#circle_4_");
    
    const content= document.querySelector("#content_")
    
    content.addEventListener("mouseenter",move())
    
    const totalWidth = content.getBoundingClientRect().width;
    const totalHeight = content.getBoundingClientRect().height;
    
    function move(){
        content.addEventListener("mousemove",function(dets){
    
            circle1.style.transform = `translate(${(dets.x - (totalWidth/2))/(totalWidth/100)}%,  ${((dets.y - 300) - (35/2))/(2.84)/2}%)`
            circle2.style.transform = `translate(${-(dets.x - (totalWidth/2))/(totalWidth/100)}%, ${-((dets.y - 300) - (35/2))/(2.84)/2}%)`
            circle3.style.transform = `translate(${-(dets.x - (totalWidth/2))/(totalWidth/100)}%, ${((dets.y - 300) - (35/2))/(2.84)/2}%)`
            circle4.style.transform = `translate(${(dets.x - (totalWidth/2))/(totalWidth/100)}%,  ${-((dets.y - 300) - (35/2))/(2.84)/2}%)`
    
        })
    }       
}
circlesWalaAnimation();


//ONCLICK ON EMAIL, COPY IN CLIPBOARD
function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    alert("Email copied to clipboard !!")
}


// CURSOR 
function cur() {
    var csr = document.querySelector('#cursor');
    window.addEventListener('mousemove', function (dets) {
        console.log(dets);
        if (window.matchMedia("(max-width: 500px)").matches) {
            csr.style.display = 'none';
        } else {
            csr.style.display = 'block';
        }
        var posX = dets.clientX - csr.getBoundingClientRect().width / 2;
        var posY = dets.clientY - csr.getBoundingClientRect().height / 2;
        gsap.to(csr, {
            top: posY + "px",
            left: posX + "px",
            duration: 0.5
        })
    });
};
cur();


// --------------------------------------------------------
// gsap.set(".w1", { opacity: 1 });
// gsap.from(".w1",{
//     scrollTrigger:{
//         trigger:"#webhead",
//         scroller:"body",
//         start:"top 60%",
//     },
//     opacity: 0,
//     duration:1.5,
//     x:"10vw", 
// })

gsap.from("#c1 #webcap",{
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        start:"top 60%",
    },
    opacity: 0,
    duration:1.5,
    x:"10vw", 
})

gsap.from("#c2 #webcap",{
    scrollTrigger:{
        trigger:"#c2",
        scroller:"body",
        start:"top 60%",
    },
    opacity: 0,
    duration:1.5,
    x:"-10vw", 
})

gsap.from("#c3 #webcap",{
    scrollTrigger:{
        trigger:"#c3",
        scroller:"body",
        start:"top 60%",
    },
    opacity: 0,
    duration:1.5,
    x:"10vw", 
})

gsap.from("#c4 #webcap",{
    scrollTrigger:{
        trigger:"#c4",
        scroller:"body",
        start:"top 60%",
    },
    opacity: 0,
    duration:1.5,
    x:"-10vw", 
})

gsap.from("#c5 #webcap",{
    scrollTrigger:{
        trigger:"#c5",
        scroller:"body",
        start:"top 60%",
    },
    opacity: 0,
    duration:1.5,
    x:"10vw", 
})




gsap.to('#page3 h2', {
  duration: 1,
  opacity: 1,
  rotateX: 0,
// x:"20vh",
  scrollTrigger: {
    trigger: '#page3 h2',
    scroller: 'body',
    // scrub: 2,
    // end: 'bottom 85%',
    start: 'top 60%',
  },
})

gsap.to('.cards', {
    duration: 1,
    opacity: 1,
    rotateX: 0,
    scrollTrigger: {
      trigger: '.cards',
      scroller: 'body',
      start: 'top 70%',
    },
  })

  


gsap.set("#aboutme",{opacity:0})
gsap.to('#aboutme', {
    scrollTrigger: {
      trigger: '#aboutme>h1',
      scroller: 'body',
      start: 'top 65%',
    },
    opacity: 1,
    duration:1,
    onStart: function () {
      $(document).ready(function () {
        $('#aboutme h1').textillate({ in: { effect: 'fadeInUp' } });
      })
    },
  })

  gsap.set("#webprojects",{opacity:0})
gsap.to('#webprojects', {
    scrollTrigger: {
      trigger: '#webprojects',
      scroller: 'body',
      start: 'top 65%',
    },
    opacity: 1,
    duration:1,
    onStart: function () {
      $(document).ready(function () {
        $('#webprojects h2').textillate({ in: { effect: 'fadeInLeft' } });
      })
    },
  })
  

//   gsap.to("#myimage ",{
//     scrollTrigger:{
//         trigger:"#page1",
//         start:"top top",
//         // end: "bottom 10%",
//         scrub:2,
//         // end:"bottom 80%",
//         scroller:"body",
//         // markers: true
//     },
//     x:"40vw",
//     rotate: "180",
//     duration:1,
// })

  



//FIREBASE
// const form = document.getElementById('contactform');
// const alert = document.querySelector(".alert");

// const firebaseConfig = {
//     apiKey: "AIzaSyBLrmQK0BS6xcdYLk9cq1XHEmd9e3zrBN4",
//     authDomain: "portfoliowebsite-42824.firebaseapp.com",
//     databaseURL: "https://portfoliowebsite-42824-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "portfoliowebsite-42824",
//     storageBucket: "portfoliowebsite-42824.appspot.com",
//     messagingSenderId: "181429551702",
//     appId: "1:181429551702:web:8baf6b7d4d4aea810171f7",
//     measurementId: "G-TSZPTZE7HC"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   const database = firebase.database()

//   const ref = database.ref("messages")


// form.addEventListener("submit",(e)=>{

//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;


//     ref.push({
//         name:name,
//         email:email,
//         message:message
//     })

//     console.log(name,email,message);
//     alert.style.display = "block"

//     setTimeout(()=>{
//         alert.style.display = "none"
//     },2000)

//     form.reset()
// })
