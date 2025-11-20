import { GameEngine } from "../game/GameEngine";
let engine: GameEngine | null = null;

export function GamePage() {
  const el = document.createElement("div");
  const canvas = document.createElement("canvas");
  canvas.width = 800; canvas.height = 600; canvas.className = "mx-auto block mt-6 border";
  el.appendChild(canvas);
  setTimeout(() => { engine = new GameEngine(canvas); engine.start(); }, 50);
  return el;
}

// cleanup on route leave (simple)
(window as any).unloadGame = () => { engine?.stop(); };
