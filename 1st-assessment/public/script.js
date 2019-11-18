$(document).ready(function () {

const button = document.querySelector('#button');
const h1 = document.querySelector('h1')

//  quotes = [
//     '"Perfect is the enemy of good." <br> –Voltaire',
//     '"I’m still learning." <br> –Michelangelo',
//     '"Life is a journey, not a destination." <br> –Ralph Waldo Emerson',
//     '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." <br> ―Abigail Adams',
//     '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." <br> –Rumi',
//     '"Be curious, not judgmental." <br> –Walt Whitman',
//     '"You don’t have to be great to start, but you have to start to be great." <br> –Zig Ziglar',
//     '"Be stubborn about your goals and flexible about your methods." <br> –Unknown',
//     '"Nothing will work unless you do." <br> –Maya Angelou',
//     '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." <br> –Earl Nightingale',
//     '"Anyone who stops learning is old, whether at twenty or eighty." <br> —Henry Ford',
//     '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> –Benjamin Franklin',
//     '"Change is the end result of all true learning." <br> ―Leo Buscaglia',
//     '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> ―Mahatma Gandhi',
//     '"A learning curve is essential to growth." <br> –Tammy Bjelland'
//   ];



button.addEventListener("click", event => {
  const h1 = document.querySelector('h1')

  event.preventDefault();
  event.stopPropagation();

  $('h1').toggle(); 
  // h1.innerHtml = getRandomQuote.value
  

});


$("form").submit(event => {
  event.preventDefault();
  axios.post("").then(response => {
    quotes = response.data;
    $("#text").css({
      "text-align": "center",
      "min-height": "150px",
      display: "flex",
      "justify-content": "center",
      "align-items": "center"
    });
    $("#text").html(quotes);
  });
});









});