function Thunder(AUDIO, IMAGES){
	this.imgContainer = document.getElementById("imgContainer");
	this.imgIndex = 0;
	this.audio = document.createElement("audio");
	this.audioIndex = 0;
	this.colors = ["white", "#161618"];
	this.playing = false;
	this.go = function(){
		this.playing = true;
		var seed = Math.random();
		// this.imgContainer.style.background = "url(../img/"+ IMAGES[0] +") center no-repeat;";
		// this.imgContainer.style.backgroundImage = "url(img/"+ IMAGES[Math.floor(Math.random()*IMAGES.length)] +")";
		this.imgContainer.style.backgroundImage = "url(img/"+ IMAGES[this.imgIndex] +")";

		// this.container.style.backgroundColor = this.colors[Math.floor(Math.random()*this.colors.length)];
		// if(seed>0.8){
		// 	container.style.backgroundColor = "black";
		// } else {
		// 	container.style.backgroundColor = "white";
		// }
		if(seed > 0.3){
			this.imgContainer.style.display = "block";			

		} else {
			this.imgContainer.style.display = "none";			
		}
		// this.container.style.backgroundColor = "white";
		// this.image.style.opacity += (0.0 - this.image.style.opacity)*0.05;
		// $(this.image).fadeOut();
		this.audio.play();
	}
	this.seedAudio = function(){
		this.audio.src = AUDIO[this.audioIndex].src;
	// this.audio.playbackRate = 2.0;
		this.audio.milliseconds = AUDIO[this.audioIndex].milliseconds;
	}
	this.stop = function(){
		this.audio.pause();
		this.playing = false;
		container.style.backgroundColor = "#161618";
		this.imgContainer.style.backgroundImage = "none";

	}
}