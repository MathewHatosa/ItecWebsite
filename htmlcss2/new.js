//intro




//member
function showDescription(memberId) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
      if (description.id === memberId + "-desc") {
        if (description.classList.contains("hidden")) {
          description.classList.remove("hidden");
          description.style.maxHeight = description.scrollHeight + "px"; 
        } else {
          description.classList.add("hidden");
          description.style.maxHeight = null; 
        }
      } else {
        description.classList.add("hidden");
        description.style.maxHeight = null; 
      }
    });
  }

  //song
  function togglePlayPause(audioId, button) {
    var audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
        button.classList.add('playing');
    } else {
        audio.pause();
        button.classList.remove('playing');
    }
}
let currentAudio = null;

function togglePlayPause(audioId, button) {
const audio = document.getElementById(audioId);

if (currentAudio && currentAudio !== audio) {
currentAudio.pause();
const playingButton = document.querySelector('.playPauseBtn.playing');
if (playingButton) {
playingButton.classList.remove('playing');
}
}

if (audio.paused) {
audio.play();
button.classList.add('playing');
currentAudio = audio;
audio.currentTime = 0;

} else {
audio.pause();
button.classList.remove('playing');
currentAudio = null;

}

}





