// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handleLikes(like) {

  like.addEventListener('click', () => {

    mimicServerCall()
    .then(message => {

      if (like.innerText === EMPTY_HEART) {

        like.innerText = FULL_HEART;
        like.classList.add('activated-heart');
      } else if (like.innerText === FULL_HEART) {

        like.innerText = EMPTY_HEART;
        like.classList.remove('.activated-heart');
      }
      console.log(message);
    })
    .catch(error => {

      let modal = document.getElementById('modal');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000)
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {

  let likeButtons = document.querySelectorAll('.like-glyph');
  likeButtons.forEach(handleLikes);
  
})

// let likeButtons = document.querySelectorAll('.like-glyph');
// likeButtons.forEach(like => {
//   like.classList.add('activated-heart')
// })




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
