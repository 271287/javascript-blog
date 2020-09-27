'use strict';

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeArticles = document.querySelectorAll('.titles a.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  const activeLinks = document.querySelectorAll('.title a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.add('active');
  }

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  /* [DONE] get 'href' attribute from the clicked link */

  const clickHandler = document.articleSelector('href');

  console.log('articleSelector');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */

  const targetArticle = document.querySelector('href');

  for (let activeLink of activeLinks) {
    activeLink.targerArticle.add('active');
    console.log('querySelector');
  }

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);

    const links = document.querySelectorAll('.titles a');
  }

  {
    const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';
    optArticleTagsSelector = '.post-tags .list';

    function generateTitleLinks() {

      /* [DONE] remove contents of titleList */

      const titleList = document.querySelector('optTitleListSelector').innerHTML;

      function clearMessages() {
        document.getElementById('messages').innerHTML = '';
      }

      /* [DONE] for each article */

      const articles = document.optArticleSelector('');

      for (let article of articles) {
        console.log(articles);
      }

      /* [DONE] get the article id */

      const articleId = document.querySelector('href');

      /* [DONE] find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] get the title from the title element */

      const d1 = document.getElementById('href');
      d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

      /* [DONE] create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* [DONE] insert link into titleList */

      html = html + linkHTML;
    }

    titleList.innerHTML = html;

  }

  function generateTags() {

    /* find all articles */

    const articles = document.optArticleSelector('');

    /* START LOOP: for every article: */

    for (let article of articles) {
      console.log(articles);
    }

    /* find tags wrapper */

    const titleList = article.querySelector('optArticleListSelector').innerHTML;

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tag');
    console.log(articleId);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */

    for (let tag of articleTagsArray) {

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* add generated code to html variable */

      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */
      html = html + linkHTML;

      /* END LOOP: for every article: */
    }

    generateTags();   

    function tagClickHandler(event){
      /* prevent default action for this event */
    
      /* make new constant named "clickedElement" and give it the value of "this" */
    
      /* make a new constant "href" and read the attribute "href" of the clicked element */
    
      /* make a new constant "tag" and extract tag from the "href" constant */
    
      /* find all tag links with class active */
    
      /* START LOOP: for each active tag link */
    
        /* remove class active */
    
      /* END LOOP: for each active tag link */
    
      /* find all tag links with "href" attribute equal to the "href" constant */
    
      /* START LOOP: for each found tag link */
    
        /* add class active */
    
      /* END LOOP: for each found tag link */
    
      /* execute function "generateTitleLinks" with article selector as argument */
    }
    
    function addClickListenersToTags(){
      /* find all links to tags */
    
      /* START LOOP: for each link */
    
        /* add tagClickHandler as event listener for that link */
    
      /* END LOOP: for each link */
    }
    
    addClickListenersToTags();    