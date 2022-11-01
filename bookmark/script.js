const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");
const body = document.body;
const theme = localStorage.getItem("theme");
const opacity = JSON.parse(localStorage.getItem("opacity"));
// about bookmarks
const siteInp = document.querySelector(".site-inp");
const urlInp = document.querySelector(".url-inp");
const btn =  document.querySelector(".btn");
// all bookmarks storage
let bookmarks =  [];
const bookmark = JSON.parse(localStorage.getItem("linksSite"));
// dom
const ele = document.createElement("p");
const val = document.querySelector(".validation");
const update = document.querySelector(".footer-wrapper");
console.log(bookmark)

if(theme && opacity){
    body.classList.add(theme);
    lightIcon.classList.replace(opacity[0],opacity[1]);
    darkIcon.classList.replace(opacity[2],opacity[3]);
}
if(bookmark){
    bookmarks = bookmark;
    updatingBookmarks();
}
lightIcon.onclick = () =>{
    if(lightIcon.classList.contains("light-opacity")){
        lightIcon.classList.replace("light-opacity","dark-opacity");
        darkIcon.classList.replace("dark-opacity","light-opacity");
        body.classList.replace("dark","light");
        localStorage.setItem("theme","light");
        localStorage.setItem("opacity",JSON.stringify(["light-opacity","dark-opacity","dark-opacity","light-opacity"]));
    }
}
darkIcon.onclick = () =>{
    if(darkIcon.classList.contains("light-opacity")){
        lightIcon.classList.replace("dark-opacity","light-opacity");
        darkIcon.classList.replace("light-opacity","dark-opacity");
        body.classList.replace("light","dark");
        localStorage.setItem("theme","dark");
        localStorage.setItem("opacity",JSON.stringify(["dark-opacity","light-opacity","light-opacity","dark-opacity"]));
    }
}

// adding bookmarks to local storage
function addingBookmarks(siteName,urlName){
    let store = {
        site : siteName,
        url : urlName
    }
    bookmarks.push(store);
    localStorage.setItem("linksSite",JSON.stringify(bookmarks));
}
// validating the input value
function validation(site,link){
    const linkRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
    const nameRegEx = /\w{1,}/g;
    if(link.match(linkRegEx) && site.match(nameRegEx)){
        addingBookmarks(siteInp.value,urlInp.value);
        updatingBookmarks();
        ele.remove();
    }else{
        ele.innerText = `Please put a valid site and url name`;
        val.appendChild(ele);
    }
}
// updating bookmarks on dom/html
function updatingBookmarks(){
    let items = "";
    for(let i = 0 ; i < bookmarks.length ; i++){
        items += `<div><a href ="${bookmarks[i].url}" target = "blank" class="link-style">${bookmarks[i].site}</a><span class="material-symbols-outlined bookmark-rem" onclick="removeBookmark(this)">bookmark_remove</span></div>`;
    }
    update.innerHTML = items;
}
// removing bookmarks
function removeBookmark(thisItem){
    let index = 0,
        item = thisItem.parentNode,
        itemName = item.querySelector("a").innerHTML;

    for(let i = 0 ; i < bookmark.length ; i++){
        if(bookmark[i].site === itemName){
            index = i;
            break;
        }
    }
    bookmark.splice(index,1);
    localStorage.setItem("linksSite",JSON.stringify(bookmark));
    updatingBookmarks();

  }
// doing everything upon clicking
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    validation(siteInp.value,urlInp.value)
    siteInp.value = "";
    urlInp.value = "";
})
// localStorage.removeItem("linksSite")
// localStorage.clear()



