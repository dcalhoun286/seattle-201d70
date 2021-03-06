'use strict';

var containerParent = document.getElementById('container-parent');
var myForm = document.getElementById('form');
var pheasants = [];
// console.log(impeyanList, blueList, reevesList);

//paragraph blurbs
var impeyanBlurb = 'The Himalayan Monal, Lophophorus impejanus also known as the Impeyan Monal, Impeyan Pheasant, and Danphe, is a bird in the pheasant family, Phasianidae. It is the national bird of Nepal. the Himalayan Monal has been classified as monophyletic. However, studies have shown that the male Himalayan Monal of northwestern India lacks the white rump of other Himalayan Monals, and it has more green on the breast, indicating the possibility of a second subspecies.';

var blueEarredBlurb = 'Blue Eared Pheasants are a rich blue-gray color, but with bright red facial patches and distinguishing white ear coverts along the sides of the head. The top of the head is highlighted by dark blue-black coloring that matches the darker blue-gray of the full tail. Tails are made up of 24 gracefully flowing feathers. Legs and feet are scarlet and match the facial patches.  Blue Eared Pheasants are vocal and amiable birds. Although pheasants in general tend to be a bit standoffish, Blue Eared Pheasants are one of the friendliest of species and have been known to approach their caretakers and eat out of their hands.';

var reevesBlurb = 'Reeves\'s pheasant is a species unique to central and eastern China. With its long tail, the bird is speedy both while flying and on the ground. During fast flight, the long tails help the bird control its direction and buffers its landing. Female birds usually appear to be very attached to their nests. They are reluctant to leave and make intimidating poses even if humans approach the nests.';

function Pheasant(title, src, blurb) {
  this.title = title;
  this.src = src;
  this.pContent = blurb;
  pheasants.push(this);
  this.render = function () {
    // create element
    var sectionElement = document.createElement('section');

    // give it content
    // its content will be other elements - created later

    // append to the DOM
    containerParent.appendChild(sectionElement);

    //create element
    var imgElement = document.createElement('img');
    // give it content
    imgElement.setAttribute('src', this.src);
    // append it to the DOM
    sectionElement.appendChild(imgElement);

    //create element, append it to DOM, give content later
    var articleElement = document.createElement('article');
    sectionElement.appendChild(articleElement);

    //create element
    var h2Element = document.createElement('h2');
    // give it content
    h2Element.textContent = this.title;
    //append it to the DOM
    articleElement.appendChild(h2Element);

    //create element
    var pElement = document.createElement('p');
    // give it content
    pElement.textContent = this.pContent;
    //append it to the DOM
    articleElement.appendChild(pElement);
  };
}

//event Handler
function handleSubmit(event){
  event.preventDefault();

  var title = event.target.title.value;
  // console.log(title);
  var imgSource = event.target.source.value;
  var blurb = event.target.blurb.value;
  // console.log(title, imgSource, blurb);

  var newPheasant = new Pheasant(title, imgSource, blurb);
  newPheasant.render();
  // total of totals may be a problem? aka the footer of your table
  // remember.  the tfoot element.  it can be cleared out. How do you clear the inner html of the table footer?  also.  how do you recalculate the totals so they correct

}

// instantiations
new Pheasant('Impeyan', 'img/impeyan.jpg', impeyanBlurb);
new Pheasant('Blue Earred', 'img/blue-earred.jpg', blueEarredBlurb);
new Pheasant('Reeves', 'img/reeves-pair.png', reevesBlurb);

function renderAll(){
  for (var i = 0; i < pheasants.length; i++){
    pheasants[i].render();
    // pheasants[i].renderTable();

  }
}

// executable code
renderAll();



// event listener
myForm.addEventListener('submit', handleSubmit);
