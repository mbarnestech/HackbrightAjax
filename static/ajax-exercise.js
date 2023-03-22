'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  // const responsePromise = fetch('/fortune')
  // const textPromise = responsePromise.then((response) => {
  //   const tp = response.text()
  //   console.log(tp);
  //   console.log(response);
  //   return tp;
  // });
  // console.log(`response P: ${responsePromise}, text P: ${textPromise}`);
  fetch('/fortune')
  .then((response)=>response.text())
  .then((serverData)=>{
    document.querySelector('#fortune-text').innerHTML = serverData;
  })

}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
