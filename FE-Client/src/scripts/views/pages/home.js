const home = {
  async init() {

    return `
      <section class="w-full md:h-[100vh] h-[450px] bg-black relative ">
        <div class="w-full h-full absolute flex">
          <div class="w-[22%] bg-red-600 h-full "></div>
        </div>
        <div class="w-full h-full absolute flex">
          <div class="w-[50%] h-full ml-auto grid grid-cols-2 grid-rows-2 relative">
            <div class="col-span-2 flex absolute w-full h-full flex"><img src="images/proyek (3).jpg" class="w-[50%] md:h-[50%] h-[25%] m-auto object-cover"></div>
            <div class="col-span-2 flex absolute w-full h-full flex"><img src="images/proyek (4).jpg" class=" border-4 border-black w-[30%] md:h-[30%] h-[15%] md:mt-[60%] my-auto ml-auto mr-4 object-cover"></div>
            <div class="col-span-2 flex absolute w-full h-full flex"><img src="images/proyek (2).jpg" class=" border-4 border-black w-[30%] md:h-[30%] h-[15%] md:mt-[20%] mt-[100%] ml-4 mr-4 object-cover"></div>
          </div>
        </div>
        <div class="w-full h-full absolute flex bg-hero">
        </div>
        <div class="w-[100%] h-full absolute  px-[8%] flex">
          <div class="my-auto w-full">
            <h1 class="text-white md:text-[50px] text-[25px] font-secondary font-[600] my-auto md:w-[30%] w-full tracking-wide">Create the building you want here</h1>
            <h2 class="text-white mt-4 md:w-[50%] w-full text-secondary text-gray-400 md:text-base text-[14px]">We provide the best architectural design, construction, and building maintenace services for you</h2>
            <div class="md:w-[30%] w-full grid grid-cols-2 gap-4 mt-8 md:text-base text-[12px]">
              <a href="" class="bg-red-600 p-2 text-center text-secondary font-bold text-white rounded-md">Our Services</a>
              <a href="" class="hover:text-red-600 text-white my-auto font-semibold tracking-wider">View Project ➜</a>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full md:h-[30vh] h-[20vh] bg-red-600 relative flex justify-center md:gap-x-[20%] gap-x-[10%] p-4">
        <div class="flex flex-col justify-center font-secondary text-white">
          <p class="md:text-[70px] text-[30px] mx-auto font-semibold">6+</p>
          <p class="mx-auto md:text-[15px] text-[10px] text-center">Years of Experience</p>
        </div>

        <div class="flex flex-col justify-center font-secondary text-white">
          <p class="md:text-[70px] text-[30px] mx-auto font-semibold">100</p>
          <p class="mx-auto md:text-[15px] text-[10px] text-center">Project Complete</p>
        </div>

        <div class="flex flex-col justify-center font-secondary text-white">
          <p class="md:text-[70px] text-[30px] mx-auto font-semibold">20</p>
          <p class="mx-auto md:text-[15px] text-[10px] text-center">Workers</p>
        </div>
      </section>
      <section class="w-full md:h-[100vh] h-auto bg-gray-50 px-[8%] py-4 flex md:flex-row flex-col bg-white">
        <div class="w-2/4 h-full md:flex hidden">
          <img src="images/logo.png" class=" h-[40%] mx-auto my-auto">
        </div>
        <div class="md:w-2/4 w-full my-auto flex flex-col p-4">
            <p class="text-red-600 md:text-[18px] text-[14px] uppercase font-secondary font-bold tracking-wide mb-[5px]">About Us</p>
            <p class="text-black md:text-[35px] text-[25px] font-secondary font-bold tracking-wide md:mb-[30px] mb-[15px]">We are a leader in the construction sector</p>
            <p class="text-black text-secondary text-gray-400 mb-[20px] md:text-base text-[14px]">We strive to provide the best profesionals to make your project a construction masterpiece, something unique and unrivaled.</p>
            <ul class="grid grid-cols-2 gap-4 h-auto font-secondary md:text-[15px] text-[12px] mb-[20px]">
              <li class="flex"><div class="round-list"></div> Award Winning Project</li>
              <li class="flex"><div class="round-list"></div> Powerfull Product Strategy</li>
              <li class="flex"><div class="round-list"></div> Experts Team Member</li>
              <li class="flex"><div class="round-list"></div> Ready for your Services</li>
            </ul>
            <a href="" class="md:w-[30%] w-full bg-red-600 p-3 text-center text-white font-secondary text-[12px] md:text-[15px] font-semibold mt-[20px] rounded-md">Learn More</a>
        </div>
      </section>
      <section class="flex flex-col px-[8%] py-8">
        <p class="uppercase text-red-600 font-bold mx-auto font-secondary tracking-wider md:text-[18px] text-[14px]">Our Advantedge</p>
        <p class="md:text-[35px] text-[25px] font-secondary font-bold mt-4 mx-auto md:w-[50%] w-full text-center">Providing The Best Services To Build Your Dream Factory</p>
        <div class="w-full md:h-[50vh] grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
          <div class="flex flex-col justify-center p-4">
            <div class="bg-red-100 md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-[100%] flex mx-auto my-4">
              <img src="icons/advantedge.png" width="40" height="40" class="m-auto w-[50%] h-[50%]">
            </div>
            <p class="text-center my-2 text-secondary font-semibold md:text-[20px] text-[18px]">Profesional Workers</p>
            <p class="text-center my-2 text-secondary md:text-[16px] text-[15px] text-gray-400">The best and expertly trained team members who take the extra step and go extra mile.</p>
          </div>
          <div class="flex flex-col justify-center p-4">
            <div class="bg-red-100 md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-[100%] flex mx-auto my-4">
              <img src="icons/advantedge_2.png" width="40" height="40" class="m-auto w-[50%] h-[50%]">
            </div>
            <p class="text-center my-2 text-secondary font-semibold md:text-[20px] text-[18px]">Guaranteed Quality</p>
            <p class="text-center my-2 text-secondary md:text-[16px] text-[15px] text-gray-400">The best and expertly trained team members who take the extra step and go extra mile.</p>
          </div>
          <div class="flex flex-col justify-center p-4">
            <div class="bg-red-100 md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-[100%] flex mx-auto my-4">
              <img src="icons/advantedge_3.png" width="40" height="40" class="m-auto w-[50%] h-[50%]">
            </div>
            <p class="text-center my-2 text-secondary font-semibold md:text-[20px] text-[18px]">Wide Experience</p>
            <p class="text-center my-2 text-secondary md:text-[16px] text-[15px] text-gray-400">The best and expertly trained team members who take the extra step and go extra mile.</p>
          </div>
        </div>
      </section>
      <section class="px-[8%] h-auto py-[100px] bg-black flex flex-col justify-center">
        <p class="uppercase text-red-600 font-bold font-secondary tracking-wider md:text-[18px] text-[14px]">Our Project</p>
        <div class="flex md:flex-row flex-col h-auto w-full">
          <p class="md:text-[35px] text-[25px] font-secondary font-bold text-white">Feature Project</p>
          <a href="" class="md:w-[10%] w-full mt-4 rounded-md bg-red-600 p-3 text-center text-white font-secondary md:text-[15px] text-[12px] font-semibold ml-auto">See All</a>
        </div>
        <div class="w-full flex flex-row flex-nowrap overflow-x-auto md:p-8 gap-4 mt-4 md:mt-0">
          <div class="w-full min-w-[85%] md:min-w-[0] md:w-2/6 flex flex-col rounded-md my-4 md:m-0">
            <img src="images/proyek (1).jpg" class="w-full md:h-[30%] h-[200px] object-cover">
            <div class="w-full bg-white px-8 py-4 flex flex-col rounded-md">
              <p class="font-bold md:text-[20px] text-[16px] font-secondary my-2">Heydar Aliyev Center</p>
              <p class="font-semibold md:text-[12px] text-[10px] font-secondary">Februari 10, 2022</p>
              <p class="feature-project-text my-2 md:text-[15px] text-[10px] md:block hidden font-secondary" data-maxlength="200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Duis ornare dictum condimentum. Vestibulum ante ipsum primis in faucibus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Duis ornare dictum condimentum. Vestibulum ante ipsum primis in faucibus
              </p>
              <a href="" class="hover:text-red-600 text-red-600 font-semibold tracking-wider mt-2 mx-auto md:text-base text-[12px]">View More ➜</a>
            </div>
          </div>
          <div class="w-full min-w-[85%] md:min-w-[0] md:w-2/6 flex flex-col rounded-md my-4 md:m-0">
            <img src="images/proyek (1).jpg" class="w-full md:h-[30%] h-[200px] object-cover">
            <div class="w-full bg-white px-8 py-4 flex flex-col rounded-md">
              <p class="font-bold md:text-[20px] text-[16px] font-secondary my-2">Heydar Aliyev Center</p>
              <p class="font-semibold md:text-[12px] text-[10px] font-secondary">Februari 10, 2022</p>
              <p class="feature-project-text my-2 md:text-[15px] text-[10px] md:block hidden font-secondary" data-maxlength="200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Duis ornare dictum condimentum. Vestibulum ante ipsum primis in faucibus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Duis ornare dictum condimentum. Vestibulum ante ipsum primis in faucibus
              </p>
              <a href="" class="hover:text-red-600 text-red-600 font-semibold tracking-wider mt-2 mx-auto md:text-base text-[12px]">View More ➜</a>
            </div>
          </div>
          <div class="w-full min-w-[85%] md:min-w-[0] md:w-2/6 flex flex-col rounded-md my-4 md:m-0">
            <img src="images/proyek (1).jpg" class="w-full md:h-[30%] h-[200px] object-cover">
            <div class="w-full bg-white px-8 py-4 flex flex-col rounded-md">
              <p class="font-bold md:text-[20px] text-[16px] font-secondary my-2">Heydar Aliyev Center</p>
              <p class="font-semibold md:text-[12px] text-[10px] font-secondary">Februari 10, 2022</p>
              <p class="feature-project-text my-2 md:text-[15px] text-[10px] md:block hidden font-secondary" data-maxlength="200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Duis ornare dictum condimentum. Vestibulum ante ipsum primis in faucibus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam ut purus pulvinar maximus. 
                Duis ornare dictum condimentum. Vestibulum ante ipsum primis in faucibus
              </p>
              <a href="" class="hover:text-red-600 text-red-600 font-semibold tracking-wider mt-2 mx-auto md:text-base text-[12px]">View More ➜</a>
            </div>
          </div>
        </div>
      </section>
      <section class="md:py-4 px-[8%] bg-black md:h-[40vh] h-auto flex justify-center">
          <div class="grid md:grid-cols-5 grid-cols-3 justify-center gap-5 md:justify-around h-full">
           <div class="grayscale h-[80%]">
              <img src="images/klien (1).jpg" class="h-full object-contain m-auto">
           </div>
           <div class="grayscale h-[80%]">
              <img src="images/klien (2).jpg" class="h-full object-contain m-auto">
           </div>
           <div class="grayscale h-[80%]">
              <img src="images/klien (3).jpg" class="h-full object-contain m-auto">
           </div>
           <div class="grayscale h-[80%]">
              <img src="images/klien (2).jpg" class="h-full object-contain m-auto">
           </div>
           <div class="grayscale h-[80%]">
              <img src="images/klien (1).jpg" class="h-full object-contain m-auto">
           </div>
          </div>
      </section>
      <section class="flex flex-col px-[8%] py-8 bg-black md:h-[90vh] justify-center">
        <p class="uppercase text-red-600 font-bold mx-auto font-secondary tracking-wider md:text-[18px] text-[14px]">Testimonial</p>
        <p class="md:text-[35px] text-[25px] font-secondary font-bold mt-4 mx-auto md:w-[50%] w-full text-center text-white">Excellent Company Quality Services</p>
        <div class="w-full h-auto flex flex-nowrap overflow-x-auto gap-4 my-[50px]">
          <div class="w-2/6 md:min-w-[0] min-w-[80%] flex flex-col justify-center p-4 bg-gray-900 text-white rounded-xl shadow-md">
            <div class="bg-white md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-[100%] flex mx-auto md:mr-auto md:ml-0 mb-4">
            </div>
            <p class="my-2 text-secondary font-semibold md:text-[20px] text-[16px]">Alfi Gilang Purnama</p>
            <p class="text-secondary md:text-[14px] text-[10px]">CEO at Lorem Company</p>
            <p class="my-2 text-secondary md:text-[16px] text-[12px]"><q>The best and expertly trained team members who take the extra step and go extra mile.</q></p>
          </div>
          <div class="w-2/6 md:min-w-[0] min-w-[80%] flex flex-col justify-center p-4 bg-gray-900 text-white rounded-xl shadow-md">
            <div class="bg-white md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-[100%] flex mx-auto md:mr-auto md:ml-0 mb-4">
            </div>
            <p class="my-2 text-secondary font-semibold md:text-[20px] text-[16px]">Alfi Gilang Purnama</p>
            <p class="text-secondary md:text-[14px] text-[10px]">CEO at Lorem Company</p>
            <p class="my-2 text-secondary md:text-[16px] text-[12px]"><q>The best and expertly trained team members who take the extra step and go extra mile.</q></p>
          </div>
          <div class="w-2/6 md:min-w-[0] min-w-[80%] flex flex-col justify-center p-4 bg-gray-900 text-white rounded-xl shadow-md">
            <div class="bg-white md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-[100%] flex mx-auto md:mr-auto md:ml-0 mb-4">
            </div>
            <p class="my-2 text-secondary font-semibold md:text-[20px] text-[16px]">Alfi Gilang Purnama</p>
            <p class="text-secondary md:text-[14px] text-[10px]">CEO at Lorem Company</p>
            <p class="my-2 text-secondary md:text-[16px] text-[12px]"><q>The best and expertly trained team members who take the extra step and go extra mile.</q></p>
          </div>
        </div>
      </section>

    `;
  },
  async afterRender() {
    this.shortText('p.feature-project-text')
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
