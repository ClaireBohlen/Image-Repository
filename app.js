const panels = document.querySelectorAll('.panel');
const icon = document.querySelector('.icon');
const input = document.querySelector('.input');
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const gallery = document.querySelector('.gallery');

//API AUTH
const auth = "563492ad6f91700001000001dad42820d13a4564af0a88ab82c69e51";
let page = 1;
let fetchLink;
let searchValue;
let currentSearch;


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

  function generatePictures(data) {
    data.photos.forEach((photo) => {
      const galleryImg = document.createElement("div");
      galleryImg.classList.add("panel");
      galleryImg.innerHTML = `
      <h3>${photo.photographer}</h3>
      <a href=${photo.src.original}>Download</a>
     
      <img src=${photo.src.large}></img>
      
      `;
      gallery.appendChild(galleryImg);
    });
  }
//   <div class="gallery-info">
//       <p>${photo.photographer}</p>
//       <a href=${photo.src.original}>Download</a>
//       </div>
//       <img src=${photo.src.large}></img>

  //query on page load
    async function curatedPhotos() {
    fetchLink = "https://api.pexels.com/v1/curated?per_page=15&page=1";
    const data = await fetchApi(fetchLink);
    generatePictures(data);
  }

  curatedPhotos();


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