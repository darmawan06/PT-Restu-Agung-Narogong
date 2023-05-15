import ContentData from '../../data/ContentData';
import accessImage from '../../tools/accessImage';
import sidebar from '../components/layouts/sidebar';


const proyek = {
  async init() {
    this.contentData = new ContentData();
    this.data = await this.contentData.getContent({page : "services"})
    this.maxlist = 6;
    return `
    ${await sidebar.init()}
    <section class="w-full h-[380px] bg-gray-50 flex flex-col px-[8%] md:mt-[80px] ">
      <div class="w-full m-auto flex-col 2xl:max-w-[1366px] 2xl:m-auto">
        <p class="text-[30px] md:text-[50px]  font-primary text-white text-center tracking-wider text-black font-[500]">${this.data.title}</p>
        <div class="w-full h-[2px] relative my-2">
          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
        </div>
      </div>
    </section>
    <section class="w-full h-[50px] bg-red-600">
      <div class="2xl:max-w-[1366px] 2xl:m-auto 2xl:px-0  w-full flex px-[8%] h-full">
        <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
          <p class="my-auto md:text-sm text-[2.2vw]">PT. Restu Agung Narogong</p>
          <div class="ml-5 w-[2px] bg-white h-full rotate-[25deg]"></div>
        </a>
        <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
          <p class="my-auto md:text-sm text-[2.2vw]">${this.data.title}</p>
        </a>
      </div>
    </section>
    <section class="flex flex-col md:px-[8%] relative hero-wrap">
        <div class="xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-4 w-full my-6 p-4 md:p-0 2xl:max-w-[1366px] 2xl:mx-auto">
            ${this.listProcess()}
        </div>
      </section>
    `;
  },
  afterRender() {
    this.readMoreEvent()
    return "";
  },
  listProcess(){
    let html = "";
    let loop = 0;
    if(this.data.items.length != 0){
      this.data.items.forEach((e)=>{
        if(loop < this.maxlist){
          html += `<div class="w-full tracking-wide relative h-[300px] md:h-[400px] item-layanan">
                    <img class="lazyload absolute w-full h-full object-cover shadow-md rounded-lg" src="icons/loading.gif" data-src="${accessImage.set(e.src)}" width="360" height="240" alt="" />
                    <div class="p-4 absolute bottom-0 bg-black flex flex-col h-auto w-full justify-center" style="background-color: rgba(0,0,0,0.4)">
                      <p class="font-primary md:text-[17px] text-sm my-2 truncate text-white">${e.title}</p>
                      <div class="description whitespace-normal lg:whitespace-normal text-white  md:text-sm  text-[8px] font-secondary hidden text-justify">
                          ${e.description}
                      </div>
                      <div class="w-full grid grid-cols gap-4 mt-4">
                          <button class="btn-item-layanan bg-red-600 w-full h-full text-white mx-auto text-secondary font-semibold md:text-sm text-[10px] p-2 rounded-md">Selengkapnya</button>
                      </div>
                    </div>
                  </div>`        
        }
        loop += 1
      });
    }else{
       html += `<div class="col-span-full h-[50vh] flex "><p class="m-auto font-primary text-gray-600">Tidak Tersedia</p></div>`
    }

    return html;
  },
  readMoreEvent(){
    $('.btn-item-layanan').on('click',(e)=>{
      let wrapDescription = $(e.target).parent().parent()
      if(wrapDescription.hasClass('h-auto')){
        wrapDescription.removeClass('h-auto');
        wrapDescription.addClass('h-full');
        wrapDescription.find('.description').show();        
      }else{
        wrapDescription.addClass('h-auto');
        wrapDescription.removeClass('h-full');
        wrapDescription.find('.description').hide();
      }
    })
  }
};
export default proyek;
