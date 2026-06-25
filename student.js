// CLOCK

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


// WEATHER API

const weatherApiKey = "8c2add5376e592b06b497795636f7a0a";

async function getWeather(){

const city = document.getElementById("city").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

try{

const response = await fetch(url);

const data = await response.json();

document.getElementById("weather").innerHTML =
`
<h3>${data.name}</h3>
<p>🌡 ${data.main.temp} °C</p>
<p>💧 ${data.main.humidity}%</p>
<p>🌬 ${data.wind.speed} m/s</p>
`;

}catch(error){

document.getElementById("weather").innerHTML =
"Weather not found";

}

}


// MOTIVATIONAL QUOTE API

async function getQuote(){

const response =
await fetch("https://api.quotable.io/random");

const data =
await response.json();

document.getElementById("quote").innerHTML =
`"${data.content}"`;

}

getQuote();


// NEWS API

const newsApiKey = "YOUR_NEWS_API_KEY";

async function getNews(){

const url =
`https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${newsApiKey}`;

const response = await fetch(url);

const data = await response.json();

const newsList =
document.getElementById("news");

data.articles.slice(0,5).forEach(article=>{

const li =
document.createElement("li");

li.innerHTML =
`<a href="${article.url}" target="_blank">
${article.title}
</a>`;

newsList.appendChild(li);

});

}

getNews();


// CURRENCY CONVERTER

async function convertCurrency(){

const amount =
document.getElementById("amount").value;

const from =
document.getElementById("from").value;

const to =
document.getElementById("to").value;

const url =
`https://open.er-api.com/v6/latest/${from}`;

const response =
await fetch(url);

const data =
await response.json();

const rate =
data.rates[to];

const result =
amount * rate;

document.getElementById("result").innerHTML =
`${amount} ${from} = ${result.toFixed(2)} ${to}`;

}


// TODO LIST

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function renderTasks(){

const list =
document.getElementById("taskList");

list.innerHTML = "";

tasks.forEach((task,index)=>{

const li =
document.createElement("li");

li.innerHTML =
`${task}
<button onclick="deleteTask(${index})">
❌
</button>`;

list.appendChild(li);

});

}

function addTask(){

const input =
document.getElementById("taskInput");

if(input.value.trim() !== ""){

tasks.push(input.value);

saveTasks();

renderTasks();

input.value = "";

}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

renderTasks();