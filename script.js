let input = document.querySelector("#amount");

let from = document.querySelector("#from");

let to = document.querySelector("#to");

let dropdowns = document.getElementsByTagName("select");

let rate = document.querySelector('#rate');

let button = document.querySelector('#exchange');

let BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

for(select of dropdowns){
    for(countryCode in countryList){
        let option = document.createElement('option');
        option.innerText = countryCode;
        option.value = countryCode;

        select.append(option)

        if(select.name === "from" && countryCode === "INR"){
            option.selected = "selected";
        }

        if(select.name === "to" && countryCode === "USD"){
            option.selected = "selected";
        }
    }
    select.addEventListener("change",(evt) => {
        updateImage(evt.target)
    })
}

function updateImage(code){
    let currCode = code.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    code.parentElement.querySelector('img').setAttribute("src",newSrc);
}

button.addEventListener("click",async (e) => {
    e.preventDefault();

    let fromCountry = from.value.toString().toLowerCase();

    let toCountry = to.value.toString().toLowerCase();

    BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCountry}.json`

    let response = await fetch(BASE_URL);

    let data = await response.json();

    let country = data[fromCountry];

    let amt = country[toCountry];

    let result = input.value * amt;

    result = result.toFixed(2);

    rate.innerHTML = `${input.value} ${from.value} = ${result} ${to.value}`;

});

