//custom font-weight of the navigation bar item on the current page
document.querySelectorAll(".cus-a-link").forEach((link) =>{
    if(link.href === window.location.href){
        link.setAttribute("aria-current" , "page");
    }
})


const proFooter = document.querySelector(".pro-footer");
const projectMediaQuery = window.matchMedia('(max-width: 400px)');
    function myFunction(projectMediaQuery) {
        if (projectMediaQuery.matches) { 
            proFooter.classList.remove("pb-5")
            proFooter.classList.add("pb-3")
        }else {
            proFooter.classList.add("pb-5")
            proFooter.classList.remove("pb-3")
        }
      }
myFunction(projectMediaQuery)  
projectMediaQuery.addEventListener("change",myFunction)