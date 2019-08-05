//Making it pwa
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(){
    console.log('SW registered');
  });
}

var awesome_message = [
    {
      quote: "Planting popcorn does not produce more popcorn",
      person: "Farmer Ted"
    }, {
      quote: "White whale, bad whale",
      person: "Confucious (Moby Dick)"
    }, {
      quote: "Use the strobe function to disorientate your attacker",
      person: "Flashlight"
    }, {
      quote: "Apply liberally to your erogenous zones",
      person: "Spice Bomb"
    }, {
      quote: "Help me, I'm bleaching",
      person: "The Great Barrier Reef"
    }
  ];

var awesome_message_text = document.getElementById('awesome_message_text');

function randAwesome() {
    var randIdx = Math.floor(Math.random() * awesome_message.length);
    var randAwesome = awesome_message[randIdx];
    awesome_message_text.innerHTML = "\"" + randAwesome.quote + "\" - " + randAwesome.person;
}

var awesome_message_share = document.getElementById('awesome_message_share');

awesome_message_share.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        awesome_message_text
      }).then(() => {
        alert(awesome_message_text);
      })
      .catch(console.error);
    } else {
      // fallback
    }
  });