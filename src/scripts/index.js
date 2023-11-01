import 'regenerator-runtime'; // Import runtime untuk async/await
import '../styles/style.css'; // Import file CSS utama
import '../styles/responsive.css'; // Import file CSS responsif
import App from './views/app'; // Import kelas App
import CONFIG from './globals/config'; // Import konfigurasi

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app._renderPage();
});
