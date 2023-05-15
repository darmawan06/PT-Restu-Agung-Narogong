import ContentData from "../../data/ContentData";
import accessImage from "../../tools/accessImage";
import sidebar from "../components/layouts/sidebar";
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
      <div class="w-full flex flex-col w-[90%] m-auto">
        <div> 
          <p class="text-xl font-bold font-primary my-4 text-xl">Web Developer</p>
          <div class=" bg-gray-50 font-secondary p-4 text-[13px] md:text-[15px]"> 
            <p class="font-secondary font-semibold  md:text-[18px] text-[14px]">Lorem Ipsum</p>
            <hr class="my-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a nunc ipsum. Vestibulum tincidunt mollis
              velit in posuere. Cras eu commodo dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a nunc ipsum. 
              Vestibulum tincidunt mollis velit in posuere. Cras eu commodo dolor
            </p>
            <button class="click_show" >Lihat Selengkapnya..</button>
            <div class="show_text hidden">
              <p class="font-semibold font-secondary mt-4">Requirements</p>
              <hr class="my-4">
              <ul class="ml-8 list-disc">
                <li>S1</li>
                <li>Proficient in OO web programming language, such as PHP / ASP / JSP / Ruby</li>
                <li>Experience with MVC, Ajax, and XML is preferable</li>
                <li>Experience with MVC, Ajax, and XML is preferable</li>
                <li>Experience with MVC, Ajax, and XML is preferable</li>
              </ul>
              <form class="w-[80%] mx-auto my-10 border border-black rounded-md p-8">
                <div class="flex flex-col">
                  <label class="font-semibold font-secondary" for="full_name">Full Name</label>
                  <input class="border-b border-black bg-transparent mt-2 font-secondary py-4" name="full_name" id="full_name" placeholder="Full Name">
                </div>
                <div class="flex flex-col mt-8">
                  <label class="font-semibold font-secondary" for="email">E-mail Address</label>
                  <input class="border-b border-black bg-transparent mt-2 font-secondary py-4" name="email" id="email" placeholder="Email Address">
                </div>
                <div class="flex flex-col mt-8">
                  <label class="font-semibold font-secondary" for="phone_number">Phone Number</label>
                  <input class="border-b border-black bg-transparent mt-2 font-secondary py-4" name="phone_number" id="phone_number" placeholder="Full Name">
                </div>
  
                <div class="flex flex-row mt-8 font-secondary">
                  <a class="bg-black text-white p-2 w-fit rounded-md text-[13px] md:text-[15px]" href="">Download Dokumen Persyaratan</a>
                  <input class="ml-4 my-auto" value="file" name="Dokumen CV" type="file">
                </div>
  
                <button class="bg-red-600 p-2 text-white my-8 font-semibold rounded-md" type="submit">I'M Ready To Join</button>
  
              </form>
            </div>

          </div>
        </div>

        <div class="my-6"> 
          <p class=" font-bold font-primary my-4 text-xl">Web Developer</p>
          <div class=" bg-gray-50 font-secondary p-4 text-[13px] md:text-[15px]"> 
            <p class="font-secondary font-semibold  md:text-[18px] text-[14px]">Lorem Ipsum</p>
            <hr class="my-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a nunc ipsum. Vestibulum tincidunt mollis
              velit in posuere. Cras eu commodo dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a nunc ipsum. 
              Vestibulum tincidunt mollis velit in posuere. Cras eu commodo dolor
            </p>
            <button class="click_show" >Lihat Selengkapnya..</button>
            <div class="show_text hidden">
              <p class="font-semibold font-secondary mt-4">Requirements</p>
              <hr class="my-4">
              <ul class="ml-8 list-disc">
                <li>S1</li>
                <li>Proficient in OO web programming language, such as PHP / ASP / JSP / Ruby</li>
                <li>Experience with MVC, Ajax, and XML is preferable</li>
                <li>Experience with MVC, Ajax, and XML is preferable</li>
                <li>Experience with MVC, Ajax, and XML is preferable</li>
              </ul>
              <form class="w-[80%] mx-auto my-10 border border-black rounded-md p-8 ">
                <div class="flex flex-col">
                  <label class="font-semibold font-secondary" for="full_name">Full Name</label>
                  <input class="border-b border-black bg-transparent mt-2 font-secondary py-4" name="full_name" id="full_name" placeholder="Full Name">
                </div>
                <div class="flex flex-col mt-8">
                  <label class="font-semibold font-secondary" for="email">E-mail Address</label>
                  <input class="border-b border-black bg-transparent mt-2 font-secondary py-4" name="email" id="email" placeholder="Email Address">
                </div>
                <div class="flex flex-col mt-8">
                  <label class="font-semibold font-secondary" for="phone_number">Phone Number</label>
                  <input class="border-b border-black bg-transparent mt-2 font-secondary py-4" name="phone_number" id="phone_number" placeholder="Full Name">
                </div>
  
                <div class="flex flex-row mt-8 font-secondary">
                  <a class="bg-black text-white p-2 w-fit rounded-md text-[13px] md:text-[15px]" href="">Download Dokumen Persyaratan</a>
                  <input class="ml-4 my-auto" value="file" name="Dokumen CV" type="file">
                </div>
  
                <button class="bg-red-600 p-2 text-white my-8 font-semibold rounded-md" type="submit">I'M Ready To Join</button>
  
              </form>
            </div>

          </div>
        </div>
      </div>
      
    </section>`;
  },

  async afterRender() {
    $(document).ready(function () {
      $(".click_show").click(function () {
        $(".show_text").removeClass("hidden");
        $(this).hide();
      });
    });
  },
};
export default galeri;
