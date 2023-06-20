/* HAMBURGER MENU */
$(function(){
    $hamburgerMenu.hide();
})

const $hamburgerMenu = $('#hamburgerMenu');

$('#hamburgerBtn').on('click', ()=>{
    if($hamburgerMenu.hasClass('active')){
        $hamburgerMenu.animate({
            height: [ "toggle", "swing" ],
            opacity: "toggle"
        }, 300, "linear")
        $(this).addClass('hidden');
    }
    else{
        $hamburgerMenu.animate({
            height: [ "toggle", "swing" ],
            opacity: "toggle"
        }, 300, "linear")
        $(this).removeClass('hidden');
    }
})

$hamburgerMenu.on('mouseleave', () => {
    $hamburgerMenu.animate({
        height: [ "toggle", "swing" ],
        opacity: "toggle"
    }, 200, "linear")
    $(this).addClass('hidden');
})
