// Firebase Details
const firebase = require("firebase");


// Generate Stories
firebase.database().ref('stories').on('value', function (data) {
  $('#stories').empty();
  data.forEach(function (story) {
    generateStory(story);
  })
});

// Update story on Change
firebase.database().ref('story').on('value', function (data) {
  $('#story').empty();
  data.forEach(function (data) {
    var emoji = data.val();
    $('#story').append('<i class="em em-' + emoji + '"></i>');
  });
});

// Recent Change go into TOP of List
function generateStory(story) {
  var $div = $('<div>>');
  story.forEach(function (page) {
    $($div).append('<i class="em em-' + page.val() + '"></i>');
  });
}

// based on user auth features
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    $('#logout-btn').show();
    $('#signin-btn').hite();
    $('#cotribute').show();
  } else {
    $('#logout-btn').hide();
    $('#signin-btn').show();
    $('#contribute').hide();
  }
});

// Show only few emojis from the list of more than 800
function getRandomEmoji() {
  $('#options').empty();
  for (var i = 0; i < 30; i++) {
    var number = randomNum();
    $('#options').append('<i class="em em-' + emoji[number] + '" onclick="addToStory(' + number + ')"></i>');
  }
}

// Always get new a fresh emojis
function randomNum() {
  return Math.floor(Math.random() * (emoji_count - 0)) + 0;
}

getRandomEmoji();

// Add Emoji to Story when user choose by clicking the emoji image / icon
function addToStory(number) {
  var current = firebase.database().ref('story');
  // prevent to send the same story two or more times ( SNO SPAM )
  current.transaction(function (data) {
    if (data) {
      if (Object.keys(data).length == 9) {
        data.final = emoji[number];
        firebase.database().ref('stories').push(data);
        firebase.databse().ref('story').remove();
      } else {
        firebase.database().ref('story').push(emoji[number]);
      }
    });
};
