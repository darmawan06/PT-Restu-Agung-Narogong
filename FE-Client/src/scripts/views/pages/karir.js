import ContentData from '../../data/ContentData';
import accessImage from '../../tools/accessImage';
import sidebar from '../components/layouts/sidebar';
const galeri = {
  async init() {
    this.contentData = new ContentData();
    return `
    ${await sidebar.init()}
    <section class="w-full h-[380px] bg-gray-50 flex flex-col px-[8%] md:mt-[80px] ">
      <div class="w-full m-auto flex-col 2xl:max-w-[1366px] 2xl:m-auto">
        <p class="text-[30px] md:text-[50px] font-primary text-white text-center tracking-wider text-black font-[500]">Karir</p>
        <div class="w-full h-[2px] relative my-2">
          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
        </div>
      </div>
    </section>
    <section>
      ISI ...................
    </section>`;
  },

  async afterRender() {
  },
};
export default galeri;
