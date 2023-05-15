import ContentData from '../../data/ContentData';
import accessImage from '../../tools/accessImage';
import sidebar from '../components/layouts/sidebar';
const galeri = {
  async init() {
    this.contentData = new ContentData();
    this.data = await this.contentData.getContent({page : "galery"})
    this.data.items = this.data.items.reverse()
    this.maxImage = 8;
    this.setIndexShowImage = 0;
    return `
    ${await sidebar.init()}
    <section class="w-full h-[380px] bg-gray-50 flex flex-col px-[8%] md:mt-[80px] ">
      <div class="w-full m-auto flex-col 2xl:max-w-[1366px] 2xl:m-auto">
        <p class="text-[30px] md:text-[50px] font-primary text-white text-center tracking-wider text-black font-[500]">${this.data.title}</p>
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
    <section class="w-full h-auto px-[8%] py-4 flex flex-col">
      <ul class="masonry-container columns-2 md:columns-3 lg:columns-3 2xl:columns-4 rows-1 2xl:max-w-[1366px] 2xl:m-auto ">
        ${this.listProcessImage()}
      </ul>
      <button class="border border-gray-500 p-2 rounded-md mx-auto btn-more-image hover:bg-red-600 font-secondary text-sm hover:text-white">Lebih Banyak</button>
    </section>

    <section class="show-picture w-full h-[100vh] top-0 z-[1000] fixed bg-gray-50 flex p-4 overflow-y-scroll flex flex-col" style="display:none">
      <div class="flex flex-col m-auto">
        <div class="flex">
          <p class="font-primary text-[20px] tracking-widers">Preview Image</p>
          <button class="ml-auto text-[20px] text-red-600 btn-close">X<button>
        </div>
        <div id="img-container" class=" mx-auto flex">
          <img src="${accessImage.set(this.data.items[this.setIndexShowImage].src)}" class=" h-auto max-h-[80vh] mx-auto object-cover">
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4 w-[70vw] md:w-[30vw] mx-auto">
          <button class="btn-previous p-2 bg-gray-600 text-white font-primary font-[600] tracking-widers">Previous</button>
          <button class="btn-next p-2 bg-red-600 text-white font-primary font-[600] tracking-widers">Next</button>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    this.eventMoreImage()
  },

  eventBtnShowImage(){
    const renderAgain = ()=>{
      $('#img-container').html(`<img src="${accessImage.set(this.data.items[this.setIndexShowImage].src)}" class="m-auto h-auto max-h-[80vh] object-cover">`);
    }

    const previous = ()=>{
      $('.btn-previous').on('click',()=>{
        if(this.setIndexShowImage > 0){
          this.setIndexShowImage -= 1;
        }
        renderAgain()
      })
    }

    const next = ()=>{
      $('.btn-next').on('click',()=>{
        if(this.setIndexShowImage <= this.maxImage){
          this.setIndexShowImage += 1;
        }
        renderAgain()
      })
    }

    const close = ()=>{
      $('.btn-close').on('click', ()=>{
        $('.show-picture').hide()
      })
    }

    const selectedImage = ()=>{
      $('.masonry-item').on('click',(e)=>{
        let target = e.target.dataset.role
        this.setIndexShowImage = parseInt(target);
        renderAgain()
        $('.show-picture').show()
      })
    }

    previous()
    next()
    close()
    selectedImage()
  },

  listProcessImage(){
  	let html = "";
    let loop = 0;
  	this.data.items.forEach((e)=>{
      if(loop < this.maxImage){
    		html += `<li class="masonry-item" data-role="${loop}">
  			        	<img src="icons/loading.gif" data-src="${accessImage.set(e.src)}" data-role="${loop}" class="lazyload shadow-md max-h-[500px] object-cover cursor-pointer" >
  			        </li>`        
      }
      loop += 1
  	});

  	return html;
  },

  eventMoreImage(){
    this.eventBtnShowImage()
    $('.btn-more-image').on('click',()=>{
      this.maxImage += 4
      console.log(this.maxImage)
      $('.masonry-container').html(this.listProcessImage())
      if(this.data.length < this.maxImage){
        $('.btn-more-image').hide()
      }
      this.eventBtnShowImage()
    })

  }
};
export default galeri;
