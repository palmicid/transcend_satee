import './style.css';
import { router } from './router';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { TournamentPage } from './pages/TournamentPage';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);
document.body.prepend(Navbar());

router.register("/", HomePage);
router.register("/game", GamePage);
router.register("/tournament", TournamentPage);
router.render(location.pathname);
