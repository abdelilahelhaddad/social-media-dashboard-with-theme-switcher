const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const main = document.querySelector('#main');
const topDashboard = document.querySelector('.top-dashboard');
const h2 = document.querySelector('h2');
const followers = document.querySelectorAll('.sm-followers > * > *');
const followers2 = document.querySelectorAll('.sm-followers > *');
const overview = document.querySelectorAll('.overview');


toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('light');
  circle.classList.toggle('light');
  main.classList.toggle('light');
  topDashboard.classList.toggle('light');
  h2.classList.toggle('light');
  for (let i = 0; i < followers.length; i++) {
    followers[i].classList.toggle('light');
  }
  for (let i = 0; i < followers2.length; i++) {
    followers2[i].classList.toggle('light');
  }
  for (let i = 0; i < overview.length; i++) {
    overview[i].classList.toggle('light');
  }
});