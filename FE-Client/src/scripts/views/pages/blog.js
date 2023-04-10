const blog = {
  init() {
    return `
			<section class="w-full h-[300px] bg-gray-50 flex flex-col px-[8%]">
		      <div class="w-full m-auto flex-col">
		        <p class="text-[50px] font-primary text-white text-center tracking-wider text-black">Blog</p>
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
		        <p class="my-auto text-sm">Blog</p>
		      </a>
		    </section>
			<section class="w-full flex flex-col px-[8%]">
      <div class="lg:flex lg:flex-row flex flex-col mt-12">
        <div class="lg:w-[75%]">
          <div class="md:p-12 p-4 bg-gray-50">
            <img class="m-auto blur-sm" src="images/proyek (1).jpg" alt="Blog Image" width="848" height="300" />
            <div class="mt-8 text-gray-500">
              <time datetime="2023-10-12">October 12, 2023 &#124;</time>
              <span>By James &#124;</span>
              <span>
                <a href="#">Lorem</a>
                •
                <a href="#">General Information &#124; </a>
              </span>
              <span>
                <a href="#">0 Comment</a>
              </span>
            </div>
            <div class="paragraph_blog_content">
              <h2 class="text-3xl font-bold mt-4 font-primary lg:text-3xl md:text-2xl text-xl">Lorem ipsum dolor</h2>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <p class="text-gray-800 font-secondary md:text-base lg:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis mi pulvinar, 
                vehicula tellus ac, efficitur neque. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Maecenas bibendum eget tellus at maximus. 
                Mauris vulputate porta turpis, vel fermentum felis euismod non. Praesent quis sodales augue. 
              </p>
              <br />
              <a href="#" class="font-semibold hover:underline lg:text-base md:text-base text-sm text-gray-800">READ MORE</a>
            </div>
          </div>

          <div class="md:p-12 mt-8">
            <img class="m-auto" src="images/proyek (1).jpg" alt="Blog Image" width="848" height="300" />
            <div class="mt-8 text-gray-500">
              <time datetime="2023-10-12">October 12, 2023 &#124;</time>
              <span>By James &#124;</span>
              <span>
                <a href="#">Lorem</a>
                •
                <a href="#">General Information &#124; </a>
              </span>
              <span>
                <a href="#">0 Comment</a>
              </span>
            </div>
            <div class="paragraph_blog_content">
              <h2 class="text-3xl font-bold mt-4 font-primary lg:text-3xl md:text-2xl text-xl">Lorem ipsum dolor</h2>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <p class="text-gray-800 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis mi pulvinar, 
                vehicula tellus ac, efficitur neque. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Maecenas bibendum eget tellus at maximus. 
                Mauris vulputate porta turpis, vel fermentum felis euismod non. Praesent quis sodales augue. 
              </p>
              <br />
              <a href="#" class="font-semibold hover:underline lg:text-base md:text-base text-sm text-gray-800">READ MORE</a>
            </div>
          </div>

          <div class="md:p-12 mt-8">
            <img class="m-auto" src="images/proyek (1).jpg" alt="Blog Image" width="848" height="300" />
            <div class="mt-8 text-gray-500">
              <time datetime="2023-10-12">October 12, 2023 &#124;</time>
              <span>By James &#124;</span>
              <span>
                <a href="#">Lorem</a>
                •
                <a href="#">General Information &#124; </a>
              </span>
              <span>
                <a href="#">0 Comment</a>
              </span>
            </div>
            <div class="paragraph_blog_content tracking-wide">
              <h2 class="text-3xl font-bold mt-4 font-primary lg:text-3xl md:text-2xl text-xl">Lorem ipsum dolor</h2>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <p class="text-gray-800 font-secondary md:text-base lg:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis mi pulvinar, 
                vehicula tellus ac, efficitur neque. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Maecenas bibendum eget tellus at maximus. 
                Mauris vulputate porta turpis, vel fermentum felis euismod non. Praesent quis sodales augue. 
              </p>
              <br />
              <a href="#" class="font-semibold hover:underline lg:text-base md:text-base text-sm text-gray-800">READ MORE</a>
            </div>
          </div>
        </div>

        <div class="lg:w-[25%] lg:ml-8">
          <form action="" class="relative">
            <input type="search" id="default-search" class="block lg:w-[15vw] w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300" placeholder="Search ..." />
            <button type="submit" class="text-white absolute right-0 lg:w-[5vw] p-2 top-0 bg-red-600 h-full focus:ring-blue-300 font-medium">Search</button>
          </form>
          <div class="mt-4">
            <p class="font-semibold">Recent Posts</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Recent Comments</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Archive</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Categories</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Meta</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Awesome Posts</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
              <a href="#"><li class="hover:underline">lorem ipsum</li></a>
            </ul>
          </div>

          <div class="mt-4 w-full">
            <p class="font-semibold">Tag Cloud</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <div class="grid grid-cols-3 gap-2">
                <a href="#" class="bg-red-600 w-full h-full text-white p-1">Lorem</a>
                <a href="#" class="bg-red-600 w-full h-full text-white p-1">Lorem</a>
                <a href="#" class="bg-red-600 w-full h-full text-white p-1">Lorem</a>
                <a href="#" class="bg-red-600 w-full h-full text-white p-1">Lorem</a>
                <a href="#" class="bg-red-600 w-full h-full text-white p-1">Lorem</a>
                <a href="#" class="bg-red-600 w-full h-full text-white p-1">Lorem</a>
            </div>
          </div>
        </div>
      </div>
    </section>
		`;
  },

  afterRender() {
    $(".paragraph_blog_content p").text(function (index, currentText) {
      var maxLength = 300;
      if (currentText.length >= maxLength) {
        return currentText.substr(0, maxLength);
      } else {
        return currentText;
      }
    });
    return "";
  },
};

export default blog;
