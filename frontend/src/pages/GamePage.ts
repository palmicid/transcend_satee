export function GamePage() {
	const el = document.createElement("div");
	el.innerHTML = `<canvas id="gameCanvas" width="800" height="600" class="border m-4"></canvas>`;
	return el;
  }
