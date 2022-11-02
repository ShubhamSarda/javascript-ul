const cards = document.querySelector(".cards");
const category = document.querySelector(".category");
const categorySpan = document.querySelectorAll(".category span");

const baseUrl = "https://newsapi.org/v2";
const apiKey = "&apiKey=ccd9e1b211374ae385e90428c1ea8e1b";

// const newsA = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9e1b211374ae385e90428c1ea8e1b";
// const newsB = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc8e71f395d841859dc9e564a6e1d9d6";
// const newsC = "https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=ccd9e1b211374ae385e90428c1ea8e1b";
// const newsD = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fc8e71f395d841859dc9e564a6e1d9d6";


async function dataRequest(url){
    try{
        const response = await fetch(baseUrl + url + apiKey);
        const json = response.json();
        return json;
    } catch(error){
        console.log(error);
    }
}


function urlRequest(url){
    dataRequest(url).then(data => {
        data.articles.forEach(item => {
            cards.innerHTML += `<div class="card">
                                    <div class="image">
                                        <img src="${item.urlToImage}" alt="Default News Image">
                                    </div>
                                    <div class="information">
                                        <div>
                                            <p class="title">${item.title}</p>
                                            <p class="description">${item.description}</p>
                                            <p class="time">
                                                <span>${item.publishedAt.replace("Z", "").split("T")[1]}</span>
                                                <span>${item.publishedAt.replace("Z", "").split("T")[0]}</span>
                                            </p>
                                        </div>
                                        <div class="other">
                                            <span class="source">${item.source.name}</span>
                                            <a class="url" href="${item.url}" target="_blank">Read Article <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>`;
        });
    });
}

category.addEventListener("click", event => {
    if(event.target.tagName === "SPAN"){
        cards.innerHTML = "";
        urlRequest(event.target.dataset.id);
        categorySpan.forEach(item => item.classList.remove("active"));
        event.target.classList.add("active");
    }
});

urlRequest("/top-headlines?country=us");