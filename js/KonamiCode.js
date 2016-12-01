//key map of the used keys
var keyMap = {
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	65: 'a',
	66: 'b',
};

//konami code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

//variable to get to the current position in the sequence of the konami code
var codePosition = 0;

//add key listener
document.addEventListener('keydown', function(e) {
	//get the value of the key code from the key map
	var key = keyMap[e.keyCode];
	//get the value of the required key from the konami code
	var requiredKey = konamiCode[codePosition];

	//compare the key with the required key
	if (key == requiredKey) {

		//move the next key in the konami code sequence
		codePosition++;

		//if the last key is reached, run easter egg
		if(codePosition == konamiCode.length){
			easterEgg();
		}

	}else{
		codePosition = 0;
	}
});

function easterEgg(){
	alert("KONAMI CODE");
}