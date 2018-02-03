// Variables
var page = document.querySelector('.page');
var menuTrigger = page.querySelector('.menu-trigger');
var menuCloseBTN = page.querySelector('.menu-close');

// Functions
function openNavMenu() {
	page.classList.add('page--menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page--menu-visible');
};


// Magic
menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);

// *************************** AJAX CON PROMESAS ****************
function requestFetch(){
fetch('https://three-random-reasons-izwfjpgbqm.now.sh')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var reasons = json.reasons;
    var listHTML = '';
    for (var i = 0; i < reasons.length; i++) {
      listHTML += '<div class="block-reasons"><h3 class="title-reasons">' + reasons[i].title + '</h3><p class="paragraph-reasons">' + reasons[i].description + '</p></div>';
    }
    var newReasons= document.querySelector('.new-reasons');
    newReasons.innerHTML += listHTML;
  });
}
	var buttonRequest = document.querySelector('.button-reasons');
	buttonRequest.addEventListener('click', requestFetch);
