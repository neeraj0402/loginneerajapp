const bars = document.querySelector('i');
const slide = document.querySelector('header');
const xmark = document.querySelector('#x');
const logo = document.querySelector('.logo');
const icons = document.querySelector('.icons');
const p = document.querySelector('.p');
const p1 = document.querySelector('.p1');
const p2= document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const li = document.querySelector('li');
const li1 = document.querySelector('.list1');
const li2 = document.querySelector('.list2');
const li3 = document.querySelector('.list3');
const li4 = document.querySelector('.list4')
const li5 = document.querySelector('.list5');

function logout(){
    alert("id's logout");
}


function barClick(){
    bars.style.display="none"
    xmark.style.display="block";
    slide.style.width="176px";
    logo.style.display="block";
    p.style.display="block";
    p1.style.display="block";
    p2.style.display="block";
    p3.style.display="block";
    p4.style.display="block";
    p5.style.display="block";
    li.style.justifyContent="space-arround";
    li.style.padding="11px 5px 0px 0px";
    li1.style.padding="11px 5px 0px 0px";
    li2.style.padding="11px 5px 0px 0px";
    li3.style.padding="11px 5px 0px 0px";
    li4.style.padding="11px 5px 0px 0px";
    li5.style.padding="11px 5px 0px 0px";
    li1.style.justifyContent="space-arround";
    li2.style.justifyContent="space-arround";
    li3.style.justifyContent="space-arround";
    li4.style.justifyContent="space-arround";
    li5.style.justifyContent="space-arround";
    // mbox.style.width="88.6px";
    // mbox.style.margin="0px 0px 0px 11.4vw";
    // mainbox.style.display="flex";
}

function xClick(){
    xmark.style.display="none";
    bars.style.display="block";
    slide.style.width="60px";
    logo.style.display="none";
    p.style.display="none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="none";
    li.style.padding="11px 0px 0px 10px";
    li1.style.padding="11px 0px 0px 10px";
    li2.style.padding="11px 0px 0px 10px";
    li3.style.padding="11px 0px 0px 10px";
    li4.style.padding="11px 0px 0px 10px";
    li5.style.padding="11px 0px 0px 10px";
    // mbox.style.width="96.1px";
    // mbox.style.margin="0px 0px 0px 3.9vw";
}

const tl = gsap.timeline()

tl.from(
    "#header",{
        x:"-100%",
        opacity:0,
    }
)

tl.from(
    ".click",{
        x:100,
        opacity:0,
    }
)

tl.from(
    "#bars",{
        x:100,
        // opacity:0
    }
)
