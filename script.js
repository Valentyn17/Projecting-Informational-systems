window.addEventListener('load', () => {
    const form = document.querySelector(".top-banner form");
    const list = document.querySelector(".info-section ul");
    const msg = document.querySelector(".top-banner span");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const apiRapidKey = '50d603c887msh0ce2eeeb09803c3p172057jsn5c5b01ce397e';
        const input = form.querySelector('input')
        const inputVal = input.value;
        const url = `https://api-football-v1.p.rapidapi.com/v3/teams?name=${inputVal}`;

        fetch(url, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "50d603c887msh0ce2eeeb09803c3p172057jsn5c5b01ce397e",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
    }
})
    .then(response =>
        response.json())
    .then(result => {
        const li = document.createElement("li");
    li.classList.add("team");
    li.innerHTML = `
<h2 class="team-name"  data-name="${result.response[0].team["name"]},${result.response[0].team["country"]}">
<span>${result.response[0].team["name"]}</span>
<div>
<span class="country">${result.response[0].team["country"]}</span>
</div></h2>
<img src="${result.response[0].team["logo"]}">
<span class="year">${result.response[0].team["founded"]}</span>
`;
    list.appendChild(li);}
        
    )
    .catch(() => {
        msg.textContent = "Please search for a valid TEAM 😩";
    });
msg.textContent = "";
form.reset();
input.focus();
});
})
