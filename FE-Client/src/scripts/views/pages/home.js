import ContentData from '../../data/ContentData';
import sidebar from '../components/layouts/sidebar';
import accessImage from '../../tools/accessImage';
const home = {
  async init() {
    this.contentData = new ContentData();
    this.data = await this.contentData.getContent({page : "home"})
    return `
      ${await sidebar.init()}
      <section class="w-full 2xl:h-[500px] md:h-[480px] h-[450px] relative mt-[60px] md:mt-[80px]">
        <div class="absolute w-full h-full flex z-[60] flex">
          <div class="m-auto  px-[8%]">
            <h1 class="w-full text-center font-primary text-[22px] md:text-[44px] text-white font-[600] tracking-widers">${this.data.hero.title}</h1>
            <p class="hidden md:block text-white text-[14px] md:text-base font-secondary tracking-wider text-center mt-[12px] ">${this.data.hero.description}</p>
          </div>
        </div>
        <div class="w-full h-full bg-[#393231] opacity-[55%] absolute z-[50]"></div>
        <img src="${accessImage.set(this.data.hero.image_1)}" class="absolute w-full h-full object-cover z-10">
      </section>

      <section class="w-full xl:h-[700px] md:h-[100vh] h-auto bg-gray-50 2xl:px-0 px-[8%] py-4 flex md:flex-row flex-col bg-white 2xl:max-w-[1366px] 2xl:m-auto">
        <div class="w-2/4 h-full md:flex hidden">
          <img src="icons/loading.gif" data-src="${accessImage.set(this.data.about_us.image)}" class="lazyload h-[40%] mx-auto my-auto">
        </div>
        <div class="md:w-2/4 w-full my-auto flex flex-col p-4">
            <p class="text-red-600 md:text-[18px] text-[14px] uppercase font-secondary font-bold tracking-wide mb-[5px] break-words">${this.data.about_us.title}</p>
            <p class="text-black md:text-[35px] text-[25px] font-primary font-[500] tracking-wide md:mb-[30px] mb-[15px] break-words">${this.data.about_us.subtitle}</p>
            <p class="text-black text-secondary text-gray-400 mb-[20px] md:text-base text-[14px]">${this.data.about_us.description}</p>
            <ul class="grid grid-cols-2 gap-4 h-auto font-secondary md:text-[15px] text-[12px] mb-[20px] list-award">
              ${this.listProcessAward()}
            </ul>
            <a href="#/tentang_kami" class="md:w-[30%] w-full bg-red-600 p-3 text-center text-white font-secondary text-[12px] md:text-[15px] font-semibold mt-[20px] rounded-md">Selengkapnya</a>
        </div>
      </section>
      <section class="xl:h-[200px] w-full md:h-[30vh] h-[20vh] bg-red-600 relative">
        <div class="w-full h-full 2xl:max-w-[1366px] 2xl:m-auto flex justify-center md:gap-x-[20%] gap-x-[10%] p-4">
          <div class="flex flex-col justify-center font-primary text-white" >
            <p class="md:text-[70px] text-[30px] mx-auto font-semibold">${this.data.about_us.project_complete}</p>
            <p class="mx-auto md:text-[15px] text-[10px] uppercase text-center">Proyek Selesai</p>
          </div>
          <div class="flex flex-col justify-center font-primary text-white">
            <p class="md:text-[70px] text-[30px] mx-auto font-semibold">${this.data.about_us.experience}</p>
            <p class="mx-auto md:text-[15px] text-[10px] uppercase text-center">Tahun Pengalaman</p>
          </div>
          <div class="flex flex-col justify-center font-primary text-white">
            <p class="md:text-[70px] text-[30px] mx-auto font-semibold">${this.data.about_us.workers}</p>
            <p class="mx-auto md:text-[15px] text-[10px] uppercase text-center">Pekerja</p>
          </div>
        </div>
      </section>
      <section class="xl:h-[600px] flex flex-col 2xl:px-0 px-[8%] py-8 2xl:max-w-[1366px] 2xl:m-auto ">
        <p class="uppercase text-red-600 font-bold mx-auto font-secondary tracking-wider md:text-[18px] text-[14px] break-words">${this.data.our_advantedge.title}</p>
        <p class="md:text-[35px] text-[25px] font-primary mt-4 mx-auto md:w-[50%] w-full text-center break-words font-[500]">${this.data.our_advantedge.subtitle}</p>
        <div class="w-full md:h-[50vh] grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
          
          ${this.listProcessItemOurAdvantedge()}
        </div>
      </section>
      <section class="xl:h-[600px] 2xl:px-0 px-[8%] pt-8 h-auto bg-black ">
        <div class="flex flex-col justify-center 2xl:max-w-[1366px] 2xl:m-auto">
          <p class="uppercase text-red-600 font-bold font-secondary tracking-wider md:text-[18px] text-[14px]">${this.data.our_project.title}</p>
          <div class="flex md:flex-row flex-col h-auto w-full ">
            <p class="md:text-[35px] text-[25px] font-primary text-white font-[500]">${this.data.our_project.subtitle}</p>
            <a href="#/proyek" class="md:w-[10%] w-full mt-4 rounded-md bg-red-600 p-3 text-center text-white font-secondary md:text-[15px] text-[12px] font-semibold ml-auto">Lihat Semua</a>
          </div>
          <div class="w-full flex flex-row flex-nowrap overflow-x-auto md:p-8 gap-4 mt-4 md:mt-0 md:h-[450px] h-[250px]">
            ${await this.listProcessProject()}
            
          </div>
        </div>
      </section>
      <section class="w-full xl:h-[600px] py-4 bg-black md:h-[90vh] justify-center 2xl:px-0 px-[8%] ">
        <div class="flex flex-col  2xl:max-w-[1366px] 2xl:m-auto">
          <p class="uppercase text-red-600 font-bold mx-auto font-secondary tracking-wider md:text-[18px] text-[14px]">${this.data.testimonial.title}</p>
          <p class="md:text-[35px] text-[25px] font-primary mt-4 mx-auto md:w-[50%] w-full text-center text-white  font-[500]">${this.data.testimonial.subtitle}</p>
          <div class="w-full h-auto flex flex-nowrap overflow-x-auto gap-4 my-[50px]">
            ${await this.listProcessFeedback()}
          </div>
        </div>
      </section>

    `;
  },
  async afterRender() {
    this.shortText('p.feature-project-text')
  },

  listProcessAward(){
    let html = "";
    this.data.about_us.award.forEach((e)=>{
      html += `<li class="flex"><div class="round-list"></div> ${e}</li>`
    });
    return html;
  },

  listProcessItemOurAdvantedge(){
    let html = "";
    this.data.our_advantedge.items.forEach((e)=>{
      html += `<div class="flex flex-col justify-center p-4">
                <div class="bg-red-100 md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-[100%] flex mx-auto my-4">
                  <img src="icons/loading.gif" data-src="${accessImage.set(e.icon)}" width="40" height="40" class="lazyload m-auto w-[50%] h-[50%]">
                </div>
                <p class="text-center my-2 text-secondary md:text-[20px] text-[18px] font-primary">${e.title}</p>
                <p class="text-center my-2 text-secondary md:text-[16px] text-[15px] text-gray-400 font-secondary">${e.description}</p>
              </div>`
    });
    return html;
  },

 async listProcessProject(){
    let html = "";
    let dataProyek = await this.contentData.getContent({page : "project"})
    dataProyek.items.forEach((e)=>{
      html += `<div class="w-full min-w-[85%] md:min-w-[400px] md:w-2/6 h-full flex flex-col rounded-md md:m-0 bg-white ">
                <img src="icons/loading.gif" data-src="${accessImage.set(e.src)}" class="lazyload w-full md:h-[50%] h-[70%] object-cover">
                <div class="w-full md:px-8 px-2 py-2 flex flex-col rounded-md md:min-h-[50%] h-auto">
                  <p class="font-[500] md:text-[17px] text-[14px] font-primary mt-2 text-center md:text-left tracking-wider">${e.title}</p>
                  <p class="feature-project-text my-2 md:text-[15px] text-[10px] md:block hidden font-secondary" data-maxlength="200">
                  ${e.description}
                  </p>
                </div>
              </div>`
      });
    return html;
  },

  async listProcessFeedback(){
    let html = "";
    let data = await this.contentData.getFeedback()
    data.reverse().forEach((e)=>{
      let star = "";
      for (var i = e.rating - 1; i >= 0; i--) {
        star += `<span class="mx-[2px]">★</span>`
      }
      html += `<div class="w-2/6 min-w-[85%] md:min-w-[400px] flex flex-col justify-center p-4 bg-gray-900 text-white rounded-xl shadow-md h-[300px]">
                <p class="my-2 text-secondary font-semibold md:text-[20px] text-[16px]">${e.name}</p>
                <p class="text-secondary text-[15px] md:text-[25px]">
                  ${star}
                </p>
                <p class="my-2 text-secondary md:text-[16px] text-[12px]"><q>${e.description}</q></p>
              </div>`
      });
    return html;
  },

  shortText(target){
    $(target).text(function (index, currentText) {
      var maxLength = $(this).attr("data-maxlength");
      if (currentText.length >= maxLength) {
        return currentText.substr(0, maxLength) + "...";
      } else {
        return currentText;
      }
    });
  }
};
export default home;
