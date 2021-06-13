'use strict';

let cookieProfiles = document.getElementById('cookieProfiles');

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let cookieSeatle = {
  name: 'Seatle',
  customersPerHour: 0,
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  getCustomers: function(){
    this.customersPerHour = getRandomNumber(this.minCustomers,this.maxCustomers);
  },
  buyCookies: 0,
  getcookies: function(){
    this.buyCookies = this.customersPerHour * this.avgCookies;
  }
};

let cookieTokyo = {
  name: 'Tokyo',
  customersPerHour: 0,
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  getCustomers: function(){
    this.customersPerHour = getRandomNumber(this.minCustomers,this.maxCustomers);
  },
  buyCookies: 0,
  getcookies: function(){
    this.buyCookies = this.customersPerHour * this.avgCookies;
  }
};

let cookieDubai = {
  name: 'Dubai',
  customersPerHour: 0,
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  getCustomers: function(){
    this.customersPerHour = getRandomNumber(this.minCustomers,this.maxCustomers);
  },
  buyCookies: 0,
  getcookies: function(){
    this.buyCookies = this.customersPerHour * this.avgCookies;
  }
};


let cookieParis = {
  name: 'Paris',
  customersPerHour: 0,
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  getCustomers: function(){
    this.customersPerHour = getRandomNumber(this.minCustomers,this.maxCustomers);
  },
  buyCookies: 0,
  getcookies: function(){
    this.buyCookies = this.customersPerHour * this.avgCookies;
  }
};

let cookieLima = {
  name: 'Lima',
  customersPerHour: 0,
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  getCustomers: function(){
    this.customersPerHour = getRandomNumber(this.minCustomers,this.maxCustomers);
  },
  buyCookies: 0,
  getcookies: function(){
    this.buyCookies = this.customersPerHour * this.avgCookies;
  }
};
cookieDubai.getCustomers();
cookieDubai.getcookies();
cookieSeatle.getCustomers();
cookieSeatle.getcookies();
cookieTokyo.getCustomers();
cookieTokyo.getcookies();
cookieParis.getCustomers();
cookieParis.getcookies();
cookieLima.getCustomers();
cookieLima.getcookies();
console.log(cookieDubai, cookieTokyo, cookieLima, cookieSeatle, cookieParis);

