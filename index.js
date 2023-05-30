for(var i = 0; i<document.querySelectorAll(".drum").length; i++){ //the document.querySelectorAll always returns an array. So we used the .length on it
    
    document.querySelectorAll(".drum")[i].addEventListener("onkeypress", handleClick); //the addEventListener takes in two parameters one is an event wich for this case is 'click'
                                                                                //and the other parameter is a function that will execute once the event is detected.

    function handleClick() {
        if(this.innerHTML == 'w'){
            var audio = new Audio('sounds/crash.mp3'); //these two lines are just built in functions named Audio to attatch sounds to the event. We used the 'this' keyword to find out which button has been pressed
            audio.play();
        }
        else if(this.innerHTML == 'a'){
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if(this.innerHTML == 's'){
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if(this.innerHTML == 'd'){
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if(this.innerHTML == 'j'){
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
        else if(this.innerHTML == 'k'){
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        else{
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
    }
}
