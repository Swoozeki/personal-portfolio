const $hamburger = document.getElementById('hamburger');
const $menu = document.getElementById('main-menu');
const $navbar = document.getElementById('nav-bar');

$hamburger.addEventListener('click', toggleMenu);

function toggleMenu(){
    
    if($menu.classList.contains('open')) 
        $hamburger.classList.replace('fa-times', 'fa-bars');
    else $hamburger.classList.replace('fa-bars', 'fa-times');

    $menu.classList.toggle('open');
}   

let currentProjectActive = 0;
const $projects = document.getElementsByClassName('project');
const $nextProjectBtn = document.getElementById('project-next');
const $prevProjectBtn = document.getElementById('project-prev');
[$nextProjectBtn, $prevProjectBtn].forEach($btn => {
    $btn.addEventListener('click', function(e){
        if(this.dataset.role==='next' && currentProjectActive < $projects.length-1){
            $projects[currentProjectActive].classList.remove('active');
            $projects[++currentProjectActive].classList.add('active');

            $prevProjectBtn.classList.remove('unclickable');
            if(currentProjectActive >= $projects.length-1) $nextProjectBtn.classList.add('unclickable');
        }
        if(this.dataset.role==='prev' && currentProjectActive > 0){
            $projects[currentProjectActive].classList.remove('active');
            $projects[--currentProjectActive].classList.add('active');

            $nextProjectBtn.classList.remove('unclickable');
            if(currentProjectActive <= 0) $prevProjectBtn.classList.add('unclickable');
        }
        
    });
});

AOS.init({
    duration:1200
});