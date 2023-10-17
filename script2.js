function toggleNav(){
    var sideNav = document.querySelector('.sidenav');
    sidenav.classList.toggle("open");
}
var toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click",toggleNav);

const articles=[
    {id:'test-1', title:'Test 1',timestamp:new
Date('2000-01-01T10:12:54').getDate()}
];
articles.sort((a, b)=> b.timestamp, a.timestamp);

const articleContainer= document.querySelector('.article-container');
articles.forEach(article => {
    const articleElement= document.getElementById(article.id);
    articleContainer.appendChild(articleElement);
});

const articles=[
    {id:'test-1', title:'Test 1',timestamp:new
Date('2000-01-01T10:12:54').getDate(), writer:'Bili Bingus', subject:'1-UP'}
];

const articleContainer=document.querySelector('.article-container');

function displayArticles(articles) {
    articleContainer.innerHTML='';

    articles.forEach(article =>{
        const articleElement=document.getElementById(article.id);
        articleContainer.appendChild(articleElement);
    });
}

function sortByDate() {
    articles.sort((a, b)=> b.timestamp, a.timestamp);
    displayArticles(articles);
}

function sortByWriter() {
    articles.sort((a,b)=> a.writer.localeCompare(b.writer));
    displayArticles(articles);
}