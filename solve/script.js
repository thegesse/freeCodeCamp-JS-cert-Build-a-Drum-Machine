const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");

const audio = [
  {
    id: 'Q',
    name: "Heater 1",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"
  },
  {
    id: 'W',
    name: "Heater 2",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3"
  },
  {
    id: 'E',
    name: "Heater 3",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3"
  },
  {
    id: 'A',
    name: "Heater 4",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"
  },
  {
    id: 'S',
    name: "Clap",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"
  },
  {
    id: 'D',
    name: "Open-HH",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"
  },
  {
    id: 'Z',
    name: "Kick-n'-Hat",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"
  },
  {
    id: 'X',
    name: "Kick",
    src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"
  },
  {
    id: 'C',
    name: "Closed-HH",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"
  },
]


function buttonHandler() {
  audio.forEach((item) => { 
    const btn = document.createElement('button');
    btn.className = 'drum-pad';
    btn.id = `pad-${item.id}`;
    btn.innerText = item.id;

    //adding audio
    const audioElement = document.createElement('audio');
    audioElement.className = 'clip';
    audioElement.id = item.id;
    audioElement.src = item.src;

    btn.addEventListener('click', () => {
      audioElement.currentTime = 0;
      audioElement.play();
      display.innerText = item.name;
    });

    btn.appendChild(audioElement);
    padBank.appendChild(btn)
  });
}

buttonHandler();

document.addEventListener('keydown', function (e) {
  const key = e.key.toUpperCase();
  const audioElement = document.getElementById(key);
  if(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  const soundData = audio.find(item => item.id === key);
  if(soundData) {
    display.innerText = soundData.name;
  }
});
