import { router } from "../router";
export function Navbar() {
  const nav = document.createElement("nav");
  nav.className = "bg-gray-800 text-white p-3 flex gap-4";
  const link = (label: string, path: string) => {
    const b = document.createElement("button");
    b.innerText = label; b.onclick = () => router.navigate(path);
    b.className = "text-sm hover:underline";
    return b;
  };
  nav.appendChild(link("Home","/")); nav.appendChild(link("Game","/game")); nav.appendChild(link("Tournament","/tournament"));
  return nav;
}
