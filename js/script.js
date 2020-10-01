{
    'use strict';

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles',
        optTitleListArticleSelector = '.titles a',
        optArticleTagsSelector = '.post-tags .list',
        optArticleAuthorSelector = '.post-author',
        optTagsListSelector = '.tags.list',
        optCloudClassCount = '5',
        optCloudClassPrefix = 'tag-size-',

    const titleClickHandler = function (event) {
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!');

        /* [DONE] remove class 'active' from all article links  */

        const activeArticles = document.querySelectorAll(optArticleSelector);

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

        const href = clickedElement.getAttribute('href');

        console.log('articleSelector');

        /* [DONE] find the correct article using the selector (value of 'href' attribute) */

        /* add class 'active' to the correct article */

        const targetArticle = document.querySelector(href);
        targetArticle.classList.add('active');
    }


    function generateTitleLinks(customSelector = '') {

        /* [DONE] remove contents of titleList */

        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';

        /* [DONE] for each article */

        const articles = document.querySelectorAll(optArticleSelector + customSelector);

        let html = '';

        for (let article of articles) {
            console.log(article);

            /* [DONE] get the article id */

            const articleId = article.getAttribute('id');

            /* [DONE] find the title element */

            const articleTitle = article.querySelector(optTitleSelector).innerHTML;

            /* [DONE] get the title from the title element */

            /* [DONE] create HTML of the link */

            const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
            console.log(linkHTML);

            /* [DONE] insert link into titleList */

            html = html + linkHTML;
        }

        titleList.innerHTML = html;

        const links = document.querySelectorAll(optTitleListArticleSelector)

        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }

    }

    generateTitleLinks();

    function generateTags() {

        /* find all articles */

        const articles = document.querySelectorAll(optArticleSelector);

        /* START LOOP: for every article: */

        for (let article of articles) {
            console.log(articles);


            /* find tags wrapper */

            const tagsWrapper = article.querySelector(optArticleTagsSelector);
            tagsWrapper.innerHTML = '';

            /* make html variable with empty string */

            let html = '';

            /* get tags from data-tags attribute */

            const articleTags = article.getAttribute('data-tags');

            /* split tags into array */

            const articleTagsArray = articleTags.split(' ');

            /* START LOOP: for each tag */

            for (let tag of articleTagsArray) {

                /* generate HTML of the link */

                const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

                /* add generated code to html variable */
                html += linkHTML;
                /* END LOOP: for each tag */

            }
            /* insert HTML of all the links into the tags wrapper */

            tagsWrapper.innerHTML = html;

            /* END LOOP: for every article: */
        }

        generateTags();

        function tagClickHandler(event) {
            /* prevent default action for this event */

            event.preventDefault();

            /* make new constant named "clickedElement" and give it the value of "this" */

            const clickedElement = this;
            console.log('Link was clicked!');
            /* make a new constant "href" and read the attribute "href" of the clicked element */

            const href = clickedElement.getAttribute('href');

            /* make a new constant "tag" and extract tag from the "href" constant */

            const tag = href.replace('#tag-', '');

            /* find all tag links with class active */
            const activeLinks = document.querySelectorAll('.post-tags a.active');

            /* START LOOP: for each active tag link */

            for (let activeLink of activeLinks) {
                activeLink.classList.remove('active');
            }

            /* END LOOP: for each active tag link */

            /* find all tag links with "href" attribute equal to the "href" constant */

            const activeArticlesAll = document.querySelectorAll('[href^="#tag-' + tag + '"]');

            /* START LOOP: for each found tag link */

            for (let activeArticle of activeArticlesAll) {
                activeArticle.classList.add('active');
            }
            /* END LOOP: for each found tag link */
        }
        /* execute function "generateTitleLinks" with article selector as argument */
        generateTitleLinks('[data-tags~="' + tag + '"]');
    }


    function addClickListenersToTags() {

        /* find all links to tags */

        const activeLinks = document.querySelectorAll('.post-tags a')

        /* START LOOP: for each link */

        for (let link of activeLinks) {
            link.addEventListener('click', tagClickHandler);
        }

        /* add tagClickHandler as event listener for that link */

        /* END LOOP: for each link */
    }

    addClickListenersToTags();
}

generateAuthors();

function authorClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    const authors = document.querySelectorAll(optArticleAuthorSelector);
    for (const author of authors) {

        generateTitleLinks('[post-author=","]');

        function addClickListenersToAuthors() {

            const activeAuthors = document.querySelectorAll('.post-author a')

            for (let link of activeLinks) {
                link.addEventListener('click', tagClickHandler);
            }
        }

        addClickListenersToAuthors();
    }

    function calculateTagClass(count, params) {

        const normalizedCount = count - params.min;


        const normalizedMax = params.max - params.min;


        const percentage = normalizedCount / normalizedMax;


        const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);


        function generateTags() {
            /* [NEW] create a new variable allTags with an empty array */

            let allTags = {};

            /* find all articles */
            const allArticles = articles

            /* START LOOP: for every article: */
            for (let activeArticle of activeArticles) {

                /* find tags wrapper */
                const tagsWrapper = document.querySelectorAll(optTagsListSelector);
                tagsWrapper.innerHTML = '';

                /* make html variable with empty string */
                let html = '';

                /* get tags from data-tags attribute */
                const articleTags = article.getAttribute('data-tags');

                /* split tags into array */
                const articleTagsArray = articleTags.split(' ');

                /* START LOOP: for each tag */
                for (let tag of articleTagsArray) {

                    /* generate HTML of the link */
                    const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

                    /* add generated code to html variable */
                    html += linkHTML;

                    /* [NEW] check if this link is NOT already in allTags */
                    if (!allTags[tag]) {
                        /* [NEW] add tag to allTags object */
                        allTags[tag] = 1;
                    } else {
                        allTags[tag]++;
                    }
                    /* [NEW] add generated code to allTags array */
                    allTags.push(linkHTML);
                }

                /* END LOOP: for each tag */
            }

            /* insert HTML of all the links into the tags wrapper */
            tagsWrapper.innerHTML = html;
            /* END LOOP: for every article: */
        }
        /* [NEW] find list of tags in right column */
        const tagList = document.querySelector('.tags');

        const tagsParams = calculateTagsParams(allTags);
        console.log('tagsParams:', tagsParams)

        /* [NEW] create variable for all links HTML code */
        allTagsHTML += tagLinkHTML;

        const tagLinkHTML = '<li>' + calculateTagClass(allTags[tag], tagsParam) + '</li>';
        console.log('tagLinkHTML:', tagLinkHTML);

        /* [NEW] START LOOP: for each tag in allTags: */
        for (let tag in allTags) {
            /* [NEW] generate code of a link and add it to allTagsHTML */
            allTagsHTML += tag + 'class="" (' + allTags[tag] + ') ';
        }
        /* [NEW] END LOOP: for each tag in allTags: */

        /*[NEW] add HTML from allTagsHTML to tagList */
        tagList.innerHTML = allTagsHTML;
    }
}

function calculateTagsParams(tags) {
    const params = {
        max: 0,
        min: 999999
    }

    for (let tag in tags) {
        console.log(tag + ' is used ' + tags[tag] + ' times');
    }

    if (tags[tag] > params.max) {
        params.max = tags[tag];
    }

    if (tags[tag] < params.min) {
        params.min = tags[tag];
    }

}
return params;
}