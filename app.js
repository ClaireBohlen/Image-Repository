const panels = document.querySelectorAll('.panel');
const icon = document.querySelector('.icon');
const input = document.querySelector('.input');
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')

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
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}