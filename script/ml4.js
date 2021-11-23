// Wrap every letter in a span
/*let content = document.querySelectorAll('.main-container1');
let screenPosition = window.innerHeight / 1;
const scrolling = () => {
    for(var i= 0; i < content.length; i++){
        let contentPosition = content[i].getBoundingClientRect().top;
       
        if(contentPosition < screenPosition) {
            content[i].classList.add('act');
        }else{
            content[i].classList.remove('act');
        }
    }
}
window.addEventListener('scroll', scrolling); */
    
    
  /* const scrollElements = document.querySelectorAll(".js-scroll");

   scrollElements.forEach((el) => {
       el.style.opacity = 0;
   })

   const elementInView = (el, percentageScroll = 100) => {
       const elementTop = el.getBoundingClientRect().top;
       return (
           elementTop <= ((window.innerHeight || document.documentElement.clientHeight)*(percentageScroll/100))
       );
       
   };

   const displayScrollElement = (element) => {
       element.classList.add("scrolled");
   };
   
   const hideScrollElement = (element) => {
       element.classList.remove("scrolled");
   };
    
   const handleScrollAnimation = () => {
    scrollElements.forEach((el) =>{
        if(elementInView(el, 100)){
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
}
   
window.addEventListener("scroll", () => {
    handleScrollAnimation();
}) */

/* const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
}); */

/*function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -200;

    if (elementBox.top - window.innerHeight < distanceFromTop){
        return true;
    }else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll(".hidden");
    sectionList.forEach(function(element) {
        if(isVisible(element)) {
            element.classList.remove("hidden");
    
        };
    });
}
document.addEventListener("scroll", scanDocument);*/

let reveal = document.querySelectorAll(".reveal");
let height = window.innerHeight;
const revealElements = () => {
    for(var i = 0; i < reveal.length; i++) {        
        let revealUp = reveal[i].getBoundingClientRect().top;  
        if (revealUp < height - 100){
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealElements);