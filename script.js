'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  
  /* [DONE] remove class 'active' from all article links  */

  const activeArticles = document.querySelectorAll('.titles a.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  const activeLinks = document.querySelectorAll('.title a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.add('active');
  }
  
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  /* [DONE] get 'href' attribute from the clicked link */

  const clickHandler = document.articleSelector ('href');

  console.log('articleSelector');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('href');

  console.log('querySelector')

  /* add class 'active' to the correct article */
  
  const targetArticle = document.querySelector('href');

  for(let activeLink of activeLinks){
    activeLink.targerArticle.add('active');
  }

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

{
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector('optTitleListSelector').innerHTML;

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();
}