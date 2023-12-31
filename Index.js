




// const In = document.querySelector('.in');
// document.write(In.value);
// console.log(In);

// alert("Hii");

const hidetime = document.getElementById('button');
const timesbuttons = document.querySelector('.times');
const showtimesbtn = document.querySelector('#showtimes');

function submitLoginForm(event) {
    event.preventDefault();

    console.log(event.target['date'].value);
    console.log(event.target['name'].value);
    console.log(event.target['password'].value);
}


var targetDate = new Date('Jan 1, 2024 00:00:00').getTime();

function newYear() {
    var current = new Date().getTime();
    difference = targetDate - current;

    var seccond = 1000;
    var minute = seccond * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(difference / (day));
    var h = Math.floor((difference % (day)) / (hour));
    var m = Math.floor((difference % (hour)) / (minute));
    var s = Math.floor((difference % (minute)) / (seccond));

    // console.log(d + " " + h + " " + m + " " + s);

    document.querySelector('#day').innerHTML = d;
    document.querySelector('#hours').innerHTML = h;
    document.querySelector('#minutes').innerHTML = m;
    document.querySelector('#seconds').innerHTML = s;

}

setInterval(function () {
    newYear();
}, 1000);



const loginform = document.querySelector('.loginForm');
// console.log(loginform);
loginform.addEventListener('click', ()=> {
    // alert("login");
    // console.log(loginform)
    document.querySelector('form').style.display = 'block';
})