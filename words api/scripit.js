// Simple advice utilize my source code instead of copying my code
const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const wordInput = document.getElementById("input");
const button = document.querySelector(".btn");
const word = document.querySelector(".mianWord");
const phonetics = document.querySelector(".phonetics");
const playSound  = document.querySelector(".playSound");
const sourceAudio = document.querySelector(".audio");
const defenition  = document.querySelector('.mainDefinition');
const validation = document.querySelector('.formContainer');
const newElement = document.createElement("p");
const oldHtml = defenition.innerHTML; 

const dictionaryFn = async() =>{
    try{
    const response = await fetch(`${apiUrl}${wordInput.value}`);
    const data = await response.json();
        word.innerHTML = `${data[0].word.toUpperCase()}`;
        phonetics.textContent = `${data[0]?.phonetics[0]?.text || data[0]?.phonetics[1]?.text || data[0]?.phonetics[2]?.text || " "}`;
        sourceAudio.setAttribute('src',`${data[0]?.phonetics[0]?.audio || data[0]?.phonetics[1]?.audio || " "}`);
        defenition.innerHTML = `
                                <h3>${data[0]?.meanings[0]?.partOfSpeech || " "}</h3>
                                <p class="definition">${data[0]?.meanings[0]?.definitions[0]?.definition || data[0]?.meanings[0]?.definitions[1]?.definition || data[0]?.meanings[0]?.definitions[2]?.definition || " "}</p>
                                <p class="example">${data[0]?.meanings[0]?.definitions[0]?.example || data[0]?.meanings[0]?.definitions[1]?.example ||
                                    data[0]?.meanings[0]?.definitions[2]?.example || data[0]?.meanings[0]?.definitions[3]?.example || 
                                    data[0]?.meanings[0]?.definitions[4]?.example || data[0]?.meanings[0]?.definitions[5]?.example || 
                                    data[0]?.meanings[0]?.definitions[6]?.example || " "}</p>
                                <h3>${data[0]?.meanings[1]?.partOfSpeech || " "}</h3>
                                <p class="definition">${data[0]?.meanings[1]?.definitions[0]?.definition || data[0]?.meanings[1]?.definitions[1]?.definition || data[0]?.meanings[1]?.definitions[2]?.definition || " "}</p>
                                <p class="example">${data[0]?.meanings[1]?.definitions[0]?.example || data[0]?.meanings[1]?.definitions[1]?.example ||
                                    data[0]?.meanings[1]?.definitions[2]?.example || data[0]?.meanings[1]?.definitions[3]?.example || 
                                    data[0]?.meanings[1]?.definitions[4]?.example || data[0]?.meanings[1]?.definitions[5]?.example || 
                                    data[0]?.meanings[1]?.definitions[6]?.example || " "}</p>
                                <h3>${data[0]?.meanings[2]?.partOfSpeech || " "}</h3>
                                <p class="definition">${data[0]?.meanings[2]?.definitions[0]?.definition || data[0]?.meanings[2]?.definitions[1]?.definition || data[0]?.meanings[2]?.definitions[2]?.definition || " "}</p>
                                <p class="example">${data[0]?.meanings[2]?.definitions[0]?.example || data[0]?.meanings[2]?.definitions[1]?.example ||
                                    data[0]?.meanings[2]?.definitions[2]?.example || data[0]?.meanings[2]?.definitions[3]?.example || 
                                    data[0]?.meanings[2]?.definitions[4]?.example || data[0]?.meanings[2]?.definitions[5]?.example || 
                                    data[0]?.meanings[2]?.definitions[6]?.example || " "}</p>`;
        newElement.remove();
    }catch(error){
            if(wordInput.value === ""){
            newElement.textContent = `Please input something on the input field`;
            validation.classList.add("validationStyle");
            validation.append(newElement);
            defenition.innerHTML = oldHtml;
        }else{
            defenition.innerHTML = `<h2 class="mianWord">Oops Couldn't Find The Word</h2>`;
            newElement.remove();
        }
    }
}
playSound.addEventListener('click' , () =>{
    sourceAudio.play()
})
    
button.addEventListener('click', () =>{
    dictionaryFn()
})

