// console.log('We have liftoff!');


//After my syntax didn't work over and over, I followed NASA's how to guide on using thier APOD API and came up with the following



  let link = 'https://cors-anywhere.herokuapp.com/https://api.nasa.gov/planetary/apod'
  let apiKey = 'u30450EZhSB5gNYDejP5YVoukIFOMmSExXtvCNbC'

  let request = new XMLHttpRequest();

			request.open('GET', link + '?api_key=' + apiKey, true);

      request.addEventListener('load',function(){

      if(request.status >= 200 && request.status < 400){

      let response = JSON.parse(request.responseText);
        // console.log(response);
        //This part I figured out using jquery documentation on creating an img element

        if (response.media_type === 'video') {
          let movie = response.url;
            $seeMov1 = $('<iframe>')
              .appendTo('.ball')
              .attr({
                  'src': movie,
                  'id': 'mov'
                })
        } else {
          let pic1 = response.hdurl;
          // console.log(pic1);
          $seePOD = $('<img>')
            .appendTo('.ball')
            .attr({
                   'src': pic1,
                   "id": 'portal',

               })
               // console.log($seePOD);
        } } else {
             console.log("Error in network request: " + request.statusText);
        }});

        request.send(null);


//   url: link,
//   type: 'GET',
//   // data: {
//   //   '$limit': 1
//   // }
//
// })
//
//   .then ((image) => {
//       // console.log(image);
//
//
//       for (let i = 0; i < image.length; i++){
//         // console.log(event);
//         $seePic = $('<img>'.hd)
//           // .text(data[i].hd)
//           .addClass('boom')
//           .appendTo($body)
//           console.log($seePic);
//         }
//       }
//   )
//
//
//   //ends event listener
// })


//Starts DOR
$(() => {


  let predictions = [
    'the young lion will overcome the older one, ', 'two wounds made one , then he dies a cruel death, ', 'on the field of combat in a single battle, ', 'the ancient lady will fall from her high place, ', 'burnt through lightening of twenty threes the six, ', 'chants and demands, ', 'these will in the future by headless idiots, ', 'be received as divine prayers, ', 'this is when the moon completes her great cycle, ', 'his fame will increase towards the realm of the east, ', 'He who by his tongue will seduce a great troop;', 'Beasts ferocious with hunger will cross the rivers,', 'There will be scourges the like of which was never seen, ', 'Crying to the great immortal God for relief, ', 'Famine within plague, people put out by steel,', 'According to the prediction, another falls at night time, ', 'An evil deed foretold by the bearer of a petition, ', 'Then Arethusa will redden a new river, ', 'Two great rocks will war for a long time,', 'Earthshaking fire from the center of the Earth, '
  ];



const $modalContainer = $('<div>')
        .attr('id', 'simpleModal')
        .addClass('modal')
        .appendTo('.container1')


const $modalText = $('<div>')
        .addClass('modal-text')
        .appendTo($modalContainer)

const $closeBtn = $('<span>')
        .addClass('closeBtn')
        .text('X')
        .appendTo($modalText)

let modal = $('#simpleModal');
let modalBtn = $('#quoteBtn');
let closeBtn = $('.closeBtn');





const randomNumGenerator = () => {
    return Math.floor(Math.random() * predictions.length)
  };

  let $oracle = $('<div>')

const generatePrediction = () => {
      $('.modal').css('display','block')

      $oracle.empty();
      $oracle.appendTo($('.modal-text'))
      $oracle.text(`Nostra-DOM-us says: ${predictions[randomNumGenerator()]}   ${predictions[randomNumGenerator()]}   ${predictions[randomNumGenerator()]}`)
      $oracle.addClass('message')



};

modalBtn.on('click', generatePrediction)

closeBtn.on('click', (event) => {
    // console.log('test');
  modal.css('display','none')

});















//Ends DOR
})
