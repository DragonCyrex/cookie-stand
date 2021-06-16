'use strict';

let cookieMaintable = document.getElementById('cookieProfiles');
let newLocationFooter = document.getElementById('newLocationFooter');
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
let cookiesAllData = [];
let TotalofTotals = [];
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
  this.cookiespurchase = [];
  this.totalCookies = 0;
  this.buyCookies = [];
  cookiesAllData.push(this);
}

let Seatle = new SalmonStore('Seatle', 23, 65, 6.3);
let Tokyo = new SalmonStore('Tokyo', 3, 24, 1.2);
let Dubai = new SalmonStore('Dubai', 11, 38, 3.7);
let Paris = new SalmonStore('Paris', 20, 38, 2.3);
let Lima = new SalmonStore('Lima', 2, 16, 4.6);
console.log(Seatle, Tokyo, Dubai, Paris, Lima);

cookiestableHeaders();
SalmonStore.prototype.render = function () {
  let cookiesRows = document.createElement('tr');
  cookieMaintable.appendChild(cookiesRows);
  let cookiesheadRows = document.createElement('th');
  cookiesRows.appendChild(cookiesheadRows);
  cookiesheadRows.textContent = this.locationName;

  for (let i = 0; i < customerTime.length; i++) {
    let cookiesTimings = document.createElement('td');
    cookiesRows.appendChild(cookiesTimings);
    cookiesTimings.textContent = this.buyCookies[i];
  }
  let cookiesTotalRows = document.createElement('th');
  cookiesRows.appendChild(cookiesTotalRows);
  cookiesTotalRows.textContent = this.totalCookies;
};

function cookiestableHeaders() {
  let cookiesHeaders = document.createElement('tr');
  cookieMaintable.appendChild(cookiesHeaders);
  let cookiesNamesRows = document.createElement('th');
  cookiesHeaders.appendChild(cookiesNamesRows);
  cookiesNamesRows.textContent = '';

  for (let i = 0; i < customerTime.length; i++) {
    let cookiesTimings = document.createElement('th');
    cookiesHeaders.appendChild(cookiesTimings);
    cookiesTimings.textContent = customerTime[i];
  }
  let cookiesTotallocation = document.createElement('th');
  cookiesHeaders.appendChild(cookiesTotallocation);
  cookiesTotallocation.textContent = 'Daily Location Total';
}

SalmonStore.prototype.customersPerHour = function () {
  for (let i = 0; i < customerTime.length; i++) {
    let customer = Math.ceil(
      getRandomNumber(this.minCustomers, this.maxCustomers)
    );
    this.buyCookies.push(customer);
  }
};

SalmonStore.prototype.getcookie = function () {
  for (let i = 0; i < customerTime.length; i++) {
    let cookies = Math.ceil(this.buyCookies[i] * this.avgCookies);
    this.cookiespurchase.push(cookies);
    this.totalCookies = this.totalCookies + this.buyCookies[i];
  }
};
Seatle.customersPerHour();
Tokyo.customersPerHour();
Lima.customersPerHour();
Paris.customersPerHour();
Dubai.customersPerHour();
Seatle.getcookie();
Tokyo.getcookie();
Lima.getcookie();
Paris.getcookie();
Dubai.getcookie();
Seatle.render();
Tokyo.render();
Lima.render();
Paris.render();
Dubai.render();

function formSubmission(event) {
  event.preventDefault();
  let newName = event.target.LocationName.value;
  let MinCus = Math.ceil(event.target.minCustomer.value);
  let MaxCus = Math.ceil(event.target.maxCustomer.value);
  let newAvg = event.target.AvgCustomers.value;

  let newlocation = new SalmonStore(newName, MinCus, MaxCus, newAvg);
  newlocation.customersPerHour();
  newlocation.getcookie();
  newlocation.render();
}
newLocationFooter.addEventListener('submit', formSubmission);

function locationhoursTotals(x) {
  let sumLocationTotal = 0;
  for (let i = 0; i < cookiesAllData.length; i++) {
    sumLocationTotal += cookiesAllData[i].cookiespurchase[x];
    TotalofTotals.push(sumLocationTotal);
  }
  return sumLocationTotal;
}
function totalofCookiesTotal() {
  let totcookies = 0;
  for (let i = 0; i < cookiesAllData.length; i++) {
    totcookies += TotalofTotals[i];
  }
  return totcookies;
}
function cookiesfooter() {
  let cookiesfooter = document.createElement('tr');
  cookieMaintable.appendChild(cookiesfooter);
  let cookiesTotalRows = document.createElement('th');
  cookiesfooter.appendChild(cookiesTotalRows);
  cookiesTotalRows.textContent = 'Total';

  for (let i = 0; i < customerTime.length; i++) {
    let eachtotalcookies = document.createElement('td');
    cookiesfooter.appendChild(eachtotalcookies);
    eachtotalcookies.textContent = locationhoursTotals(i);
  }
  let cookiesTotaloftheTotals = document.createElement('th');
  cookiesfooter.appendChild(cookiesTotaloftheTotals);
  cookiesTotaloftheTotals.textContent = totalofCookiesTotal();
}

cookiesfooter();
