import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import footer from './components/layouts/footer'
import header from './components/layouts/header'
import ContentData from '../data/ContentData';
class App {
  constructor({ header, main, footer }){
    this.contentData = new ContentData()
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.initialAppShell();
  }

  initialAppShell() {
    this.header.innerHTML = header.init();
    this.footer.innerHTML = footer.init();
    header.afterRender();
    footer.afterRender();
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url];
    this.main.innerHTML = await page.init();
    await page.afterRender();
  }
}

export default App;
