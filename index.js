var home = document.getElementById('home');
var whutwedo = document.getElementById('whutwedo');
var service = document.getElementById('serv')
var buttonuno = document.getElementById('buttonuno');

var first = document.querySelector('.navbar');
var second = document.querySelector('.firstinfo');
var thrid = document.querySelector('.closer')

home.addEventListener('click', function() {
    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
})
whutwedo.addEventListener('click', function() {
    second.scrollIntoView({ behavior: 'smooth', block: 'center' });
})
service.addEventListener('click', function() {
    thrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

buttonuno.addEventListener('click', function() {
    thrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

var menu = document.getElementById('menuicon');
view = 0
menu.addEventListener('click', function() {
    if (view == 0) {
        document.getElementById('home').style.display = 'block';
        document.getElementById('whutwedo').style.display = 'block';
        document.getElementById('serv').style.display = 'block';
        view = 1
    }
    else {
        document.getElementById('home').style.display = 'none';
        document.getElementById('whutwedo').style.display = 'none';
        document.getElementById('serv').style.display = 'none';
        view = 0
    }

})