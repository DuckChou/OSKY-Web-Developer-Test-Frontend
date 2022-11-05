
const mem_option = document.querySelector('.membership');
const subMenu = document.querySelector('.subMenu');
const exitButton = document.querySelector('.exit-button');
const whole = document.querySelector('.whole');
const optionul = document.querySelector('.options');
const options = document.querySelectorAll('.option');
const youtubeIcon = document.querySelector('.youtube-icon');
const linkedinIcon = document.querySelector('.linkedin-icon');
const twitterIcon = document.querySelector('.twitter-icon');
const resYoutubeIcon = document.querySelector('.res-youtube');
const resLinkedinIcon = document.querySelector('.res-linkedin');
const resTwitterIcon = document.querySelector('.res-twitter');
const sidebar = document.querySelector('.sidebar-btn');
const resMem = document.querySelector('.res-mem');
const resOptions = document.querySelectorAll('.res-option');
const resMenu = document.querySelector('.responsive-menu');


// variable for implementing exclusive click for menu options
let optionNum = -1;

// implementing exclusive click event by javaScript event bubbling
optionul.addEventListener('click',(e)=>{
  if(e.target.value===undefined){
    return;
  }
    // when click membership option
    else if(e.target.value === 4){
      if(optionNum === 4){
        return;
      }else{
        if(optionNum !==-1){
          options[optionNum].classList.remove('bottom-border');
        }
        subMenu.classList.remove('toggle-display');
        whole.classList.remove('toggle-display');
        mem_option.classList.add('bottom-border');
        optionNum = 4;
      }
    }

    // when click other options
    else{
      if(optionNum === -1){
        options[e.target.value].classList.add('bottom-border');
      }else if(optionNum !== 4){
        options[optionNum].classList.remove('bottom-border');
        options[e.target.value].classList.add('bottom-border');
      }else{
        options[e.target.value].classList.add('bottom-border');
        subMenu.classList.add('toggle-display');
        whole.classList.add('toggle-display');
        mem_option.classList.remove('bottom-border');
      }
      optionNum = e.target.value;
    }
  
}
)

// click event listener for implementing quit sunmenu when click anywhere outside the submenu
whole.addEventListener('click',()=>{
  subMenu.classList.toggle('toggle-display');
  whole.classList.toggle('toggle-display');
  mem_option.classList.toggle('bottom-border');
  optionNum = -1;
})

// click event listener for exit button in submenu
exitButton.addEventListener('click',()=>{
  subMenu.classList.add('toggle-display');
  whole.classList.toggle('toggle-display');
  mem_option.classList.toggle('bottom-border');
  optionNum = -1;
})


// click event listener for social media confirm function
youtubeIcon.addEventListener('click',()=>{
  if(window.confirm("Do you really want to leave and go yo Youtube?")){
    window.open("https://www.youtube.com");
  }
})

// click event listener for social media confirm function
resYoutubeIcon.addEventListener('click',()=>{
  if(window.confirm("Do you really want to leave and go yo Youtube?")){
    window.open("https://www.youtube.com");
  }
})

// click event listener for social media confirm function
linkedinIcon.addEventListener('click',()=>{
  if(window.confirm("Do you really want to leave and go yo Linkedin?")){
    window.open("https://www.linkedin.com/");
  }
})

// click event listener for social media confirm function
resLinkedinIcon.addEventListener('click',()=>{
  if(window.confirm("Do you really want to leave and go yo Linkedin?")){
    window.open("https://www.linkedin.com/");
  }
})

// click event listener for social media confirm function
twitterIcon.addEventListener('click',()=>{
  if(window.confirm("Do you really want to leave and go yo Twitter?")){
    window.open("https://www.twitter.com");
  }
})

// click event listener for social media confirm function
resTwitterIcon.addEventListener('click',()=>{
  if(window.confirm("Do you really want to leave and go yo Twitter?")){
    window.open("https://www.twitter.com");
  }
})

// click event listener for responsive sidebar button
sidebar.addEventListener('click',()=>{
  sidebar.classList.toggle("selected");
  resMenu.classList.toggle("toggle-display");

})

// click event listener for submenu in responsive menu
resMem.addEventListener('click',()=>{
  resOptions.forEach(e => {
    e.classList.toggle("toggle-display");
  });
})