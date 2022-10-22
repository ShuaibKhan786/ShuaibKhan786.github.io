const aboutAlign = document.querySelector(".about-hello");
const aboutPas = document.querySelector(".about-main");
const aboutMediaQuery = window.matchMedia('(max-width: 912px)');
    function myFunction(aboutMediaQuery) {
        if (aboutMediaQuery.matches) { 
            aboutAlign.classList.add("text-center","pb-3")
            aboutPas.classList.add("px-5")
        }else {
            aboutAlign.classList.remove("text-center","pb-3")
            aboutPas.classList.remove("px-5")

        }
      }
myFunction(aboutMediaQuery)  
aboutMediaQuery.addEventListener("change",myFunction)