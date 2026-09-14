# Build a drum Machine

## Context:
Some audio samples you can use for your drum machine can be found at https://cdn.freecodecamp.org/curriculum/drum/<fileName>


## Objectives
- You should have a div element with an id of drum-machine that contains all other elements.
- Inside the #drum-machine element you should have another div with an id of pad-bank.
- Inside the #drum-machine element you should have a p element with an id of display.
- Inside your #pad-bank element you should have nine clickable drum pad elements each with a class of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
- Each .drum-pad should have an audio element which has a class of clip, a src attribute that points to an audio clip, and an id corresponding to the inner text of its parent .drum-pad element (e.g. id="Q", id="W", id="E" etc.).
- When you click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
- When you press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
- When a .drum-pad is triggered, you should display a string describing the associated audio clip as the inner text of the #display element (each string must be unique).

