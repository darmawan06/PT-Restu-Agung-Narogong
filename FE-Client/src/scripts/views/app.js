import UrlParser from '../routes/url-parser';
import getDataUser from '../tools/getDataUser'
import ContentData from '../data/ContentData';
import routes from '../routes/routes';
import footer from './components/layouts/footer'
import header from './components/layouts/header'
class App {
  constructor({ header, main, footer }){
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.initialAppShell();
    this.initGetDataUser();
  }

  async initialAppShell() {
    this.header.innerHTML = header.init();
    this.footer.innerHTML = await footer.init();
    header.afterRender();
    footer.afterRender();
  }

  async initGetDataUser(){
    this.contentData = new ContentData()
    this.contentData.requestPOST({
      request : "visitors",
      data : await getDataUser.getAll(),
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url];
    this.main.innerHTML = await page.init();
    await page.afterRender();
  }
}

export default App;
