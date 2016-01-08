window.onload = function() {

  var button = document.querySelector('#toggle-menu');
  var menu = document.querySelector('.navigation');
  button.addEventListener('click', function() {
    console.log('here');
    menu.classList.toggle('hidden');
  });

};
