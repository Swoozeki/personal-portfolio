const $buttons= document.querySelectorAll('.btn');
const $articles= document.querySelectorAll('#main-content article');

// if(window.location.hash)
//   $buttons.forEach($button => {
//     if($button.dataset.target===window.location.hash.slice(1)) showClickedContent.apply($button);
//   });
  
$buttons.forEach($button => $button.addEventListener('click', showClickedContent));

function showClickedContent(){
  var $chosen=document.getElementById(this.dataset.target);
  $articles.forEach($article => $article.style.display='none');
  
  $chosen.style.display='block';
  // if(window.location.hash) window.location.hash='#'+this.dataset.target;
}