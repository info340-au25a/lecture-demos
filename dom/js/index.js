'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Huntr/x", title: "Golden", youtubeUrl: "https://www.youtube.com/watch?v=yebNIHKAC4A"
  },
  { artist: "Rolling Stones", title: "Gimme Shelter", youtubeUrl: "https://www.youtube.com/watch?v=RbmS3tQJ7Os"
  },
];

//STATE
let isGrown = false; //default



// const personObj = {
//   name: "Joel",
//   courses: [340, 201, 511, 443]
// }
// console.log(personObj);

// const theArray = personObj.courses;
// console.log(theArray);

// for(const courseNum of personObj.courses){
//   console.log(courseNum);
// }
// const newArray = [];
// for(const courseNum of personObj.courses){
//   newArray.push(courseNum);
// }
// const newArray = [...personObj.course];


const h1Elem = document.querySelector("h1");
console.log(h1Elem);

const puppyImg = document.querySelector("#puppySection img");
console.log(puppyImg);
// puppyImg.src = "img/husky.jpg";
// puppyImg.alt = "a grown puppy";


h1Elem.textContent = "Hello from the DOM";



const headerElem = document.querySelector('header');
headerElem.classList.add('bg-secondary'); 

//add an element
const anchorElem = document.createElement('a');
anchorElem.textContent = "Rolling Stones - Gimme Shelter";
anchorElem.href = "https://www.youtube.com/watch?v=RbmS3tQJ7Os"

const newLi = document.createElement('li');
newLi.appendChild(anchorElem);
console.log(newLi);

const songListElem = document.querySelector('#dataSection ol');
songListElem.appendChild(newLi);

function createSongListItem(songDataObj) {
  const anchorElem = document.createElement('a');
  anchorElem.textContent = songDataObj.artist + " - " + songDataObj.title;
  anchorElem.href = songDataObj.youtubeUrl;

  const newLi = document.createElement('li');
  newLi.appendChild(anchorElem);
  return newLi;
}

function renderSongList(aSongArray) {
  //songLiArray = aSongArray.map(createSongListItem)

  for(const songObj of aSongArray){
    const songLiElem = createSongListItem(songObj);
    songListElem.appendChild(songLiElem);
  }
}

// const songLiElem = createSongListItem(songArray[0]);
// songListElem.appendChild(songLiElem);

renderSongList(songArray); //from the top of the file

//button!
const puppyButton = document.querySelector('#puppySection button');
puppyButton.addEventListener('click', function(event) {
  console.log("You clicked me!");

  //CHANGE THE STATE
  isGrown = !isGrown; //switch from true to false and vice versa

  //RERENDER
  const puppyImg = document.querySelector("#puppySection img");
  if(isGrown) {
    puppyImg.src = "img/husky.jpg";
    puppyImg.alt = "a grown puppy";
  } 
  else {
    puppyImg.src = "img/puppy.jpg";
    puppyImg.alt = "a cute baby puppy";
  }

});

//FORM SUBMISSION
const formElem = document.querySelector('#formSection form');
formElem.addEventListener('submit', function(event){
  event.preventDefault();

  //UPDATE STATE
  const newSongObj = {};
  const artistInputElem = document.querySelector('#artistInput');
  newSongObj.artist = artistInputElem.value;
  const titleInputElem = document.querySelector('#titleInput');
  newSongObj.title = titleInputElem.value;

  songArray.push(newSongObj);
  console.log(songArray);

  //CLEAR OLD CONTENT
  //const songListElem = document.querySelector('#dataSection ol');
  songListElem.innerHTML = '';

  //RE-RENDER
  renderSongList(songArray); //from the top of the file

  console.log("form submitted!");
})
