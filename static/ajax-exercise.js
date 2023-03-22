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
  const queryString = `${url}?zipcode=${zipcode}`;

  fetch(queryString)
    .then((response)=>response.json())
    .then((data)=>{
      document.querySelector("#weather-info").innerHTML = data.forecast ;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response)=>response.json())
    .then((data)=>{
      if (data.code === 'ERROR'){
        document.querySelector("#order-status").classList.add("order-error");
      } else {
        document.querySelector("#order-status").classList.remove("order-error");
      };
      document.querySelector("#order-status").innerHTML = data.msg;
    });

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!) (class='order-error')
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
