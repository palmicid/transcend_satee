type RouteHandler = () => HTMLElement;

class Router {
  private routes: Record<string, RouteHandler> = {};
  private root: HTMLElement;

  constructor(rootId: string) {
    const root = document.getElementById(rootId);
    if (!root) throw new Error("Root not found");
    this.root = root;
    window.onpopstate = () => { this.render(location.pathname); };
  }

  register(path: string, handler: RouteHandler) { this.routes[path] = handler; }
  navigate(path: string) { history.pushState({}, "", path); this.render(path); }

  render(path: string) {
    const page = this.routes[path];
    if (!page) { this.root.innerHTML = `<h1>404</h1>`; return; }
    this.root.innerHTML = ""; this.root.appendChild(page());
  }
}

export const router = new Router("app");
