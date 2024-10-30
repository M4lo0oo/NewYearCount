function calculateTimeRemaining() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = newYear - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    setTimeout(calculateTimeRemaining, 1000);
}

function confettiFalling() {

	var box = document.getElementById("box");
	var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

	for (var i = 0; i < 1000; i++) {
		
		// Create 1000 DIV elements for confetti
		var div = document.createElement("div");
		div.classList.add("confetti");
		box.appendChild(div);
	}

	var confetti = document.querySelectorAll('.confetti');

	for (var i = 0; i < confetti.length; i++) {
		
		var size = Math.random() * 0.01 * [i];

		confetti[i].style.width = 5 + size + 'px';
		confetti[i].style.height = 16 + size + 'px';
		confetti[i].style.left = Math.random() * innerWidth + 'px';

		var background = colors[Math.floor(Math.random() * colors.length)];
		confetti[i].style.backgroundColor = background;

		box.children[i].style.transform = "rotate("+ size*[i] +"deg)";
	}
}
confettiFalling();