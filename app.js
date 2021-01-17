const panels = document.querySelectorAll('.panel');
const icon = document.querySelector('.icon');
const input = document.querySelector('.input');
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const gallery = document.querySelector('.gallery');

//API AUTH
const auth = "563492ad6f91700001000001dad42820d13a4564af0a88ab82c69e51";


//API CALL
async function fetchApi(url) {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    const data = await dataFetch.json();
    return data;
  }


//Event Listeners
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    });
});

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
    //Submit Function
})

// input.addEventListener('input', updateInput);

input.addEventListener('enter', () => {
    console.log(input);
})


//Functions 
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}