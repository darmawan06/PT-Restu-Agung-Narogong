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
      <div class="md:flex md:flex-row flex flex-col mt-12">
        <div class="md:w-[75%]">
          <div class="md:p-12 p-4 bg-gray-50">
            <img class="m-auto blur-sm" src="blog-image.jpg" alt="Blog Image" width="848" height="300" />
            <div class="mt-8 text-gray-500">
              <time datetime="2023-10-12">October 12, 2023 &#124;</time>
              <span>By James &#124;</span>
              <span>
                <a href="#">Construction</a>
                •
                <a href="#">General Information &#124; </a>
              </span>
              <span>
                <a href="#">0 Comment</a>
              </span>
            </div>
            <div class="">
              <h2 class="text-3xl font-bold mt-4">Tips And Tricks</h2>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <p class="text-gray-800">
                If you are looking to shift to a new house or want to renovate your existing one, the first thing you will need to think about is the painting. While it may be tempting to hire a professional to do it if you have never
                painted before, it will cost you a lot of money. Painting your own house allows you to experiment with something new and will help you save thousands of dollars.
              </p>
              <br />
              <a href="#" class="font-semibold hover:underline">READ MORE</a>
            </div>
          </div>

          <div class="md:p-12 mt-8">
            <img class="m-auto" src="blog-image.jpg" alt="Blog Image" width="848" height="300" />
            <div class="mt-8 text-gray-500">
              <time datetime="2023-10-12">October 12, 2023 &#124;</time>
              <span>By James &#124;</span>
              <span>
                <a href="#">Construction</a>
                •
                <a href="#">General Information &#124; </a>
              </span>
              <span>
                <a href="#">0 Comment</a>
              </span>
            </div>
            <div class="">
              <h2 class="text-3xl font-bold mt-4">Tips And Tricks</h2>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <p class="text-gray-800">
                If you are looking to shift to a new house or want to renovate your existing one, the first thing you will need to think about is the painting. While it may be tempting to hire a professional to do it if you have never
                painted before, it will cost you a lot of money. Painting your own house allows you to experiment with something new and will help you save thousands of dollars.
              </p>
              <br />
              <a href="#" class="font-semibold hover:underline">READ MORE</a>
            </div>
          </div>

          <div class="md:p-12 mt-8">
            <img class="m-auto" src="blog-image.jpg" alt="Blog Image" width="848" height="300" />
            <div class="mt-8 text-gray-500">
              <time datetime="2023-10-12">October 12, 2023 &#124;</time>
              <span>By James &#124;</span>
              <span>
                <a href="#">Construction</a>
                •
                <a href="#">General Information &#124; </a>
              </span>
              <span>
                <a href="#">0 Comment</a>
              </span>
            </div>
            <div class="">
              <h2 class="text-3xl font-bold mt-4">Tips And Tricks</h2>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <p class="text-gray-800">
                If you are looking to shift to a new house or want to renovate your existing one, the first thing you will need to think about is the painting. While it may be tempting to hire a professional to do it if you have never
                painted before, it will cost you a lot of money. Painting your own house allows you to experiment with something new and will help you save thousands of dollars.
              </p>
              <br />
              <a href="#" class="font-semibold hover:underline">READ MORE</a>
            </div>
          </div>
        </div>

        <div class="md:w-[25%] md:ml-8">
          <form action="" class="relative">
            <input type="search" id="default-search" class="block md:w-[15vw] w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300" placeholder="Search ..." />
            <button type="submit" class="text-white absolute right-0 md:w-[5vw] p-2 top-0 bg-red-600 h-full focus:ring-blue-300 font-medium">Search</button>
          </form>
          <div class="mt-4">
            <p class="font-semibold">Recent Posts</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Recent Comments</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">Hello world!</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Archive</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Categories</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Meta</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
            </ul>
          </div>

          <div class="mt-4">
            <p class="font-semibold">Awesome Posts</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <ul class="list-disc ml-8">
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
              <a href="#"><li class="hover:underline">Hello world!</li></a>
            </ul>
          </div>

          <div class="mt-4 w-full">
            <p class="font-semibold">Tag Cloud</p>
            <div class="border relative my-3 w-full">
              <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
            </div>
            <div class="flex flex-wrap">
              <br />
              <a href="#" class="bg-red-600 h-full text-white ml-2 p-1">Construction</a>
              <a href="#" class="bg-red-600 h-full text-white ml-2 p-1">Construction</a>
              <a href="#" class="bg-red-600 h-full text-white ml-2 p-1">Construction</a>
              <a href="#" class="bg-red-600 h-full text-white ml-2 mt-2 p-1">Construction</a>
              <a href="#" class="bg-red-600 h-full text-white ml-2 mt-2 p-1">Construction</a>
              <a href="#" class="bg-red-600 h-full text-white ml-2 mt-2 p-1">Construction</a>
            </div>
          </div>
        </div>
      </div>
    </section>
		`;
  },

  afterRender() {
    return "";
  },
};

export default blog;
