const proyek = {
  async init() {
    return `
    <section class="w-full h-[300px] bg-gray-50 flex flex-col px-[8%]">
      <div class="w-full m-auto flex-col">
        <p class="text-[50px] font-primary text-white text-center tracking-wider text-black">Proyek</p>
        <div class="w-full h-[2px] relative my-2">
          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
        </div>
      </div>
    </section>
    <section class="w-full h-[50px] flex bg-red-600 px-[8%]">
      <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
        <p class="my-auto text-sm">PT. Restu Agung Narogong</p>
        <div class="ml-5 w-[2px] bg-white h-full rotate-[25deg]"></div>
      </a>
      <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
        <p class="my-auto text-sm">Beranda</p>
        <div class="ml-5 w-[2px] bg-white h-full rotate-[25deg]"></div>
      </a>
      <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
        <p class="my-auto text-sm">Proyek</p>
      </a>
    </section>
    <section class="w-full px-[8%] py-4">
      <ul class="grid grid-cols-4 gap-4">
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
        <li class="bg-gray-200 h-[250px]"></li>
      </ul>
    </section>
    `;
  },
  async afterRender() {
  }
};
export default proyek;
