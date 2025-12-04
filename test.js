const snake_score = 0;
localStorage.setItem("snake_score", snake_score);

snake_score.addEventListener("click", () => {
		snake_score++;
	}
);

function snake_Incr() {
	localStorage.setItem("snake_score", parseInt(localStorage.getItem("snake_score")) + 1);
	a++;
}

function foncVert() {
	
}