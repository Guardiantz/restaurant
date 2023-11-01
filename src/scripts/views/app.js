import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes'; // Pastikan mengimpor file routes

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    this._renderPage();
  }

  _renderPage() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const page = routes[url];
    if (page) {
      this._content.innerHTML = page.render();
      page.afterRender();
    } else {
      this._content.innerHTML = '<p>Halaman tidak ditemukan.</p>';
    }
  }
}

export default App;
