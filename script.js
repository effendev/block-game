let container = document.querySelector('.container');
let block = document.querySelector('.block');
let moveBy = 5;

let containerDimension = 500;	// pixels

window.addEventListener('load', () => {
	block.style.position = 'absolute';

	// Randomize the initial position of the block between container dimension
	block.style.left = parseInt(Math.floor(Math.random() * (containerDimension - 50)))+'px';
	block.style.top = parseInt(Math.floor(Math.random() * (containerDimension - 50)))+'px';
});

function moveBox(event) {
	switch(event.key) {
		case 'ArrowLeft':
			if(parseInt(block.style.left) >= 5) {
				block.style.left = parseInt(block.style.left) - moveBy + 'px';
			} else {
				alert("Move right!");
			}
			break;
			
		case 'ArrowRight':
			if(parseInt(block.style.left) <= 465) {
				block.style.left = parseInt(block.style.left) + moveBy + 'px';
			} else {
				alert("Move left!");
			}
			break;

		case 'ArrowUp':
			if(parseInt(block.style.top) >= 10) {
				block.style.top = parseInt(block.style.top) - moveBy + 'px';	
			} else {
				alert("Move down!");
			}
			break;
			
		case 'ArrowDown':
			if(parseInt(block.style.top) <= 465) {
				block.style.top = parseInt(block.style.top) + moveBy + 'px';
			} else {
				alert("Move up!");
			}
			break;
	}
	console.log("left: " + block.style.left);
	console.log("top: " + block.style.top + "\n");
}

window.addEventListener('keydown', (event) => {
	moveBox(event);
});
