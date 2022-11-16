var main = function () {

  //The PLAY button
  // listen to button click
  $('#play').click(function () {
    // change the message text
    $('#message').text("Playing track");
    // invoking the play attribute
    $('#player').trigger("play");
  });

  // The listen button
  // listen to button click
  $('#pause').click(function () {
    // change the message text
    $('#message').text("Track Paused");
    // invoking the pause attribute
    $('#player').trigger("pause");
  });

  // The listen button
  // listen to button click
  $('#mute').click(function () {
    $('#message').text("Track Muted");
     // invoking the mute attribute as true
    $("#player").prop('muted', true);
  });
  // The listen button
  // listen to button click
  $('#unmute').click(function () {
    // change the message text
    $('#message').text("Track Unmuted");
     // invoking the pause attribute as false
    $("#player").prop('muted', false);
  });
$('#stop').click(function () {
 
// change the message text
$('#message').text("Track stopped");

// invoking the pause attribute on stop

$('#player').trigger("pause");

$("#player").prop('currentTime', 0);

});

$('#volup').click(function () {
var volume = $("#player").prop("volume")+0.1;
if(volume >1){
volume = 1;
alert("Volume at max");
}
$("#player").prop("volume",volume);
});

$('#voldw').click(function () {
var volume = $("#player").prop("volume")-0.1;
if(volume <0){
volume = 0;
alert("Volume at min");
}
$("#player").prop("volume",volume);
});
}

$(document).ready(main);

