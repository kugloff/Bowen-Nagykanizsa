let hamburgerMenu = document.getElementById('hamburgerMenu');
let hamburgerBtn = document.getElementById('hamburgerBtn');

hamburgerBtn.addEventListener('click', ()=>{
    if(hamburgerMenu.classList.contains('active')){
        hamburgerMenu.classList.remove('active');
        hamburgerMenu.classList.add('hidden');
    }else{
        hamburgerMenu.classList.add('active');
        hamburgerMenu.classList.remove('hidden');
    }
})