const section_hero = document.querySelector(".section-hero");


// /*===========================================
//  creating a portfolio tabbed componet
// ======================================= */

const p_btns = document.querySelector(".p-btns");

const p_btn = document.querySelectorAll(".p-btn");

const p_img_elem = document.querySelectorAll(".image-overlay")


p_btns.addEventListener("click",function(e){
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

  p_btn.forEach((value) => value.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);        1
  //hidden all image
  p_img_elem.forEach((curElem)=> curElem.classList.add("p-image-not-active"));
  // click karne ke baad sara image jo jo match karega wo laney ka tarika
  img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));
   
});

// /*===========================================
// swiper js code
// ======================================= */

var swiper = new Swiper(".mySwiper", {
  slidesPerView:2,
  spaceBetween: 30,
  autoplay: {
    delay:1000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
   

/*===========================================
scrool to top button 
======================================= */
// const headerSection = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");
const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top" ></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = function(){
  section_hero.scrollIntoView({behavior:"smooth"});
}

scroollElement.addEventListener('click',scrollTop);



/*===========================================
scrool to down button 
======================================= */


// const scrollToDown = document.createElement("div");

// scrollToDown.classList.add("ScrollDown-style");

// scrollToDown.innerHTML = `<ion-icon name="arrow-down-outline" class="main-contain></ion-icon>`

// heroSection.after(scrollToDown);  


/*===========================================
java script counter 
======================================= */

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;


counterNum.forEach((curEl)=>{
  const updateNumber = () => {
     const targetNumber = parseInt(curEl.dataset.number);
     const initialNum = parseInt(curEl.innerText);

     const incrementNumber = Math.trunc(targetNumber/speed);

     if(initialNum < targetNumber){
      curEl.innerText = initialNum + incrementNumber
      setTimeout(updateNumber,10);
     }
  };
  updateNumber();
})



/*===========================================
creating a responsive navbar component
======================================= */


const mobile_nav = document.querySelector(".mobile-navbar-btn");

const headerElem = document.querySelector(".header");


mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
})



// sticky navbar 


const observer = new IntersectionObserver(
  (entries) =>{
    const ent = entries[0];
    ent.isIntersecting === false
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");
  },
  {
    root:null,
    rootMargin: "-80px",
    threshold:0,
  }

);

observer.observe(section_hero);