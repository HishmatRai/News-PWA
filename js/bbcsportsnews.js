let api = `https://newsapi.org/v1/articles?source=bbc-sport&apikey=8c98666b124e44a38d4953c9152591a7`

 var div = document.getElementById("news");
 fetch(api)
 .then((sucees) => {
     return sucees.json();
 }).then((data) => {
    //  console.log(data);
var articles = data.articles;
console.log(articles);


for(let key in articles){
let div2 = document.createElement("div");
div2.setAttribute("class","allnews");
div.appendChild(div2);
let titleTxt = document.createElement("h3");
titleTxt.innerHTML = `Title : ${articles[key].title}` ;
div2.appendChild(titleTxt);
let img = document.createElement("img");
img.setAttribute("class","allImg");
img.setAttribute("src",articles[key].urlToImage);
div2.appendChild(img);
let newsD = document.createElement("p");
newsD.innerHTML =`Description : ${articles[key].description}` ;
div2.appendChild(newsD);
let authorTxt = document.createElement("h3");
authorTxt.setAttribute("class","autorTxt");
authorTxt.innerHTML = `Author : ${articles[key].author}`;
div2.appendChild(authorTxt);

  

    }


 })