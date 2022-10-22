const cusSizing = document.querySelector("#cus-sizing-1")
// const mediaQuery = window.matchMedia('(max-width: 768px)')
    function myFunction(mediaQuery) {
        if (mediaQuery.matches) { 
            cusSizing.classList.remove("mt-5","pt-5")
            cusSizing.classList.add("mt-4","pt-4")

        }else {
            cusSizing.classList.add("mt-5","pt-5")
            cusSizing.classList.remove("mt-4","pt-4")
        }
      }
myFunction(mediaQuery)  
mediaQuery.addEventListener("change",myFunction)
