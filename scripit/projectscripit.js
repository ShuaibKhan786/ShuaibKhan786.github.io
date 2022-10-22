const proBtnSize = document.querySelector(".cus-btn-project");
const projectMediaQuery = window.matchMedia('(max-width: 400px)');
    function myFunction(projectMediaQuery) {
        if (projectMediaQuery.matches) { 
            proBtnSize.classList.add("cus-btn-project-size")
        }else {
            proBtnSize.classList.remove("cus-btn-project-size")
        }
      }
myFunction(projectMediaQuery)  
projectMediaQuery.addEventListener("change",myFunction)