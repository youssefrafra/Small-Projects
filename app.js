
/* setting the date */
const date = document.getElementById('date');
date.innerHTML= new Date().getFullYear()


/* close Links */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () =>{
    const containerHeight= linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`;
    }else{
        linksContainer.style.height=0;

    }
})
/* Fixed Nav Bar */
const navBar=document.getElementById('nav');
const topLink= document.querySelector('.top-link');

window.addEventListener('scroll', ()=>{
    const scrollHeight= window.pageYOffset;
    const navHeight= navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    }else{
        navBar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
})

/* Smooth Scroll */
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        /* prevent default behaviour */
        e.preventDefault();
        /* navigate to specific coords */
        const id= e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight=navBar.getBoundingClientRect().height;
        const containerHeight=linksContainer.getBoundingClientRect().height;
        const fixedNav=navBar.classList.contains('fixed-nav')
        let position=element.offsetTop - navHeight;
        if(!fixedNav){
            position=position-navHeight;
        }
        if(navHeight > 82){
            position= position+containerHeight;
        }
        window.scrollTo({
            left:0,top:position
        });
        /* Close after scroll to position */
        linksContainer.style.height=0;
    })
} )