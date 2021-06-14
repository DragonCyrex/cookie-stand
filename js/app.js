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

function SalmonStore(
  locationName,
  minCustomers,
  maxCustomers,
  avgCookies,
  customerTime,
  totalCookies
) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customerTime = customerTime;
  this.totalCookies = totalCookies;
}

let Seatle = new SalmonStore('Seatle', 23, 65, 6.3, customerTime, 0);
let Tokyo = new SalmonStore('Tokyo', 3, 24, 1.2, customerTime, 0);
let Dubai = new SalmonStore('Dubai', 11, 38, 3.7, customerTime, 0);
let Paris = new SalmonStore('Paris', 20, 38, 2.3, customerTime, 0);
let Lima = new SalmonStore('Lima', 2, 16, 4.6, customerTime, 0);
console.log(Seatle, Tokyo, Dubai, Paris, Lima);


// SalmonStore.prototype.render = function () {
//   let articleElement = document.createElement('article');
//   cookieProfiles.appendChild(articleElement);

//   let cityTitle = document.createElement('h2');
//   articleElement.appendChild(cityTitle);
//   cityTitle.textContent = this.name;

//   let hourTime = document.createElement('ul');
//   articleElement.appendChild(hourTime);

//   for (let i = 0; i < customerTime.length; i++) {
//     let listItem = document.createElement('li');
//     hourTime.appendChild(listItem);
//     listItem.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
//   }
//   let listItem = document.createElement('li');
//   hourTime.appendChild(listItem);
//   listItem.textContent = `Total: ${this.totalCookies} Cookies`;
// };
// let cookieSeatle = {
//   name: 'Seatle',
//   customersPerHour: 0,
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   buyCookies: [0],
//   getcookies: function () {
//     for (let i = 0; i < customerTime.length; i++) {
//       this.customersPerHour = getRandomNumber(this.minCustomers, this.maxCustomers);
//       this.buyCookies[i] = Math.ceil(this.customersPerHour * this.avgCookies);
//       this.totalCookies = this.totalCookies + this.buyCookies[i];
//     }
//   },
//   render: function () {
//     let articleElement = document.createElement('article');
//     cookieSeatleProfiles.appendChild(articleElement);

//     let cityTitleSeatle = document.createElement('h2');
//     articleElement.appendChild(cityTitleSeatle);
//     cityTitleSeatle.textContent = this.name;

//     let hourTimeSeatle = document.createElement('ul');
//     articleElement.appendChild(hourTimeSeatle);

//     for (let i = 0; i < customerTime.length; i++) {
//       let listItemSeatle = document.createElement('li');
//       hourTimeSeatle.appendChild(listItemSeatle);
//       listItemSeatle.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
//     }
//     let listItemSeatle = document.createElement('li');
//     hourTimeSeatle.appendChild(listItemSeatle);
//     listItemSeatle.textContent = `Total: ${this.totalCookies} Cookies`;
//   }
// };

// let cookieTokyo = {
//   name: 'Tokyo',
//   customersPerHour: 0,
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   totalCookies: 0,
//   buyCookies: [0],
//   getcookies: function () {
//     for (let i = 0; i < customerTime.length; i++) {
//       this.customersPerHour = getRandomNumber(this.minCustomers, this.maxCustomers);
//       this.buyCookies[i] = Math.ceil(this.customersPerHour * this.avgCookies);
//       this.totalCookies = this.totalCookies + this.buyCookies[i];
//     }
//   },
//   render: function () {
//     let articleElement = document.createElement('article');
//     cookieTokyoProfiles.appendChild(articleElement);

//     let cityTitleTokyo = document.createElement('h2');
//     articleElement.appendChild(cityTitleTokyo);
//     cityTitleTokyo.textContent = this.name;

//     let hourTimeTokyo = document.createElement('ul');
//     articleElement.appendChild(hourTimeTokyo);

//     for (let i = 0; i < customerTime.length; i++) {
//       let listItemTokyo = document.createElement('li');
//       hourTimeTokyo.appendChild(listItemTokyo);
//       listItemTokyo.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
//     }
//     let listItemTokyo = document.createElement('li');
//     hourTimeTokyo.appendChild(listItemTokyo);
//     listItemTokyo.textContent = `Total: ${this.totalCookies} Cookies`;
//   }
// };

// let cookieDubai = {
//   name: 'Dubai',
//   customersPerHour: 0,
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   totalCookies: 0,
//   buyCookies: [0],
//   getcookies: function () {
//     for (let i = 0; i < customerTime.length; i++) {
//       this.customersPerHour = getRandomNumber(this.minCustomers, this.maxCustomers);
//       this.buyCookies[i] = Math.ceil(this.customersPerHour * this.avgCookies);
//       this.totalCookies = this.totalCookies + this.buyCookies[i];
//     }
//   },
//   render: function () {
//     let articleElement = document.createElement('article');
//     cookieDubaiProfiles.appendChild(articleElement);

//     let cityTitleDubai = document.createElement('h2');
//     articleElement.appendChild(cityTitleDubai);
//     cityTitleDubai.textContent = this.name;

//     let hourTimeDubai = document.createElement('ul');
//     articleElement.appendChild(hourTimeDubai);

//     for (let i = 0; i < customerTime.length; i++) {
//       let listItemDubai = document.createElement('li');
//       hourTimeDubai.appendChild(listItemDubai);
//       listItemDubai.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
//     }
//     let listItemDubai = document.createElement('li');
//     hourTimeDubai.appendChild(listItemDubai);
//     listItemDubai.textContent = `Total: ${this.totalCookies} Cookies`;
//   }
// };

// let cookieParis = {
//   name: 'Paris',
//   customersPerHour: 0,
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   totalCookies: 0,
//   buyCookies: [0],
//   getcookies: function () {
//     for (let i = 0; i < customerTime.length; i++) {
//       this.customersPerHour = getRandomNumber(this.minCustomers, this.maxCustomers);
//       this.buyCookies[i] = Math.ceil(this.customersPerHour * this.avgCookies);
//       this.totalCookies = this.totalCookies + this.buyCookies[i];
//     }
//   },
//   render: function () {
//     let articleElement = document.createElement('article');
//     cookieParisProfiles.appendChild(articleElement);

//     let cityTitleParis = document.createElement('h2');
//     articleElement.appendChild(cityTitleParis);
//     cityTitleParis.textContent = this.name;

//     let hourTimeParis = document.createElement('ul');
//     articleElement.appendChild(hourTimeParis);

//     for (let i = 0; i < customerTime.length; i++) {
//       let listItemParis = document.createElement('li');
//       hourTimeParis.appendChild(listItemParis);
//       listItemParis.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
//     }
//     let listItemParis = document.createElement('li');
//     hourTimeParis.appendChild(listItemParis);
//     listItemParis.textContent = `Total: ${this.totalCookies} Cookies`;
//   }
// };

// let cookieLima = {
//   name: 'Lima',
//   customersPerHour: 0,
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   totalCookies: 0,
//   buyCookies: [0],
//   getcookies: function () {
//     for (let i = 0; i < customerTime.length; i++) {
//       this.customersPerHour = getRandomNumber(this.minCustomers, this.maxCustomers);
//       this.buyCookies[i] = Math.ceil(this.customersPerHour * this.avgCookies);
//       this.totalCookies = this.totalCookies + this.buyCookies[i];
//     }
//   },
//   render: function () {
//     let articleElement = document.createElement('article');
//     cookieLimaProfiles.appendChild(articleElement);

//     let cityTitleLima = document.createElement('h2');
//     articleElement.appendChild(cityTitleLima);
//     cityTitleLima.textContent = this.name;

//     let hourTimeLima = document.createElement('ul');
//     articleElement.appendChild(hourTimeLima);

//     for (let i = 0; i < customerTime.length; i++) {
//       let listItem = document.createElement('li');
//       hourTimeLima.appendChild(listItem);
//       listItem.textContent = `${customerTime[i]}: ${this.buyCookies[i]} Cookies`;
//     }
//     let listItemLima = document.createElement('li');
//     hourTimeLima.appendChild(listItemLima);
//     listItemLima.textContent = `Total: ${this.totalCookies} Cookies`;
//   }
// };
// cookieDubai.getcookies();
// cookieSeatle.getcookies();
// cookieTokyo.getcookies();
// cookieParis.getcookies();
// cookieLima.getcookies();
// cookieDubai.render();
// cookieSeatle.render();
// cookieTokyo.render();
// cookieParis.render();
// cookieLima.render();
// console.log(cookieDubai, cookieTokyo, cookieLima, cookieSeatle, cookieParis);
