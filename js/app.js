'use strict';

let cookieProfiles = document.getElementById('cookieProfiles');
let customerTime = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function SalmonStore(locationName, minCustomers, maxCustomers, avgCookies) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.buyCookies = [];
}

let Seatle = new SalmonStore('Seatle', 23, 65, 6.3);
let Tokyo = new SalmonStore('Tokyo', 3, 24, 1.2);
let Dubai = new SalmonStore('Dubai', 11, 38, 3.7);
let Paris = new SalmonStore('Paris', 20, 38, 2.3);
let Lima = new SalmonStore('Lima', 2, 16, 4.6);
console.log(Seatle, Tokyo, Dubai, Paris, Lima);

SalmonStore.prototype.render = function () {
  let articleElement = document.createElement('article');
  cookieProfiles.appendChild(articleElement);

  let cityTitle = document.createElement('h2');
  articleElement.appendChild(cityTitle);
  cityTitle.textContent = this.locationName;

  let hourTime = document.createElement('ul');
  articleElement.appendChild(hourTime);

  for (let i = 0; i < customerTime.length; i++) {
    let listItem = document.createElement('li');
    hourTime.appendChild(listItem);
    listItem.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
  }
  let listItem = document.createElement('li');
  hourTime.appendChild(listItem);
  listItem.textContent = `Total: ${this.totalCookies} Cookies`;
};

SalmonStore.prototype.getcookie = function () {
  for (let i = 0; i < customerTime.length; i++) {
    this.customersPerHour = getRandomNumber(
      this.minCustomers,
      this.maxCustomers
    );
    this.buyCookies[i] = Math.ceil(this.customersPerHour * this.avgCookies);
    this.totalCookies = this.totalCookies + this.buyCookies[i];
  }
};
Seatle.getcookie();
Tokyo.getcookie();
Lima.getcookie();
Paris.getcookie();
Lima.getcookie();
Seatle.render();
Tokyo.render();
Lima.render();
Paris.render();
Lima.render();
