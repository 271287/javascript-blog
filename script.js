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

  const targetArticle = document.querySelector('href');

  console.log('querySelector')

  /* add class 'active' to the correct article */

  const targetArticle = document.querySelector('href');

  for (let activeLink of activeLinks) {
    activeLink.targerArticle.add('active');
  }

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);

  const links = document.querySelectorAll('.titles a');
  }

  {
    const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';

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

  generateTitleLinks();