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
			<section class="w-full flex flex-col lg:px-[8%] px-4">
        <div class="lg:flex lg:flex-row md:flex md:flex-row flex flex-col mt-12">
          <div class="lg:w-[75%] md:w-[70%]">
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
                <button class="read_more_button font-semibold hover:underline lg:text-base md:text-base text-sm text-gray-800">READ MORE</button>

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
                <button class="read_more_button font-semibold hover:underline lg:text-base md:text-base text-sm text-gray-800">READ MORE</button>
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
                <button class="read_more_button font-semibold hover:underline lg:text-base md:text-base text-sm text-gray-800">READ MORE</button>
              </div>
            </div>
          </div>

          <div class="lg:w-[25%] md:w-[30%] w-full lg:ml-8 md:ml-2 lg:mb-0 md:mb-0 mb-[30px]">
          <div class="border lg:hidden md:hidden block w-full my-4">
          </div>

            <form action="" class="relative lg:w-[20vw]">
              <input type="search" id="default-search" class="block w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300" placeholder="Search ..." />
              <button type="submit" class="text-white absolute right-0 lg:w-[5vw] p-2 top-0 bg-red-600 h-full focus:ring-blue-300 font-medium">Search</button>
            </form>
            <div class="mt-4 lg:w-[20vw]">
              <p class="font-semibold">Recent Posts</p>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <div class="recent_post">
                <a href ="#">
                <div class="flex flex-row">
                  <div>
                    <img src="images/proyek (1).jpg" width="150" alt="Gambar Recent Post">
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-800">October 12, 2023</p>
                    <p class="font-bold">Lorem ipsum</p>
                  </div>
                </div>
                </a>

                <div class="border lg:w-[18vw] my-4">
                </div>
                
                <a href ="#">
                <div class="flex flex-row">
                  <div>
                    <img src="images/proyek (1).jpg" width="150" alt="Gambar Recent Post">
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-800">October 12, 2023</p>
                    <p class="font-bold">Lorem ipsum</p>
                  </div>
                </div>
                <a>

                <div class="border lg:w-[18vw] my-4">
                </div>
                
                <a href ="#">
                <div class="flex flex-row">
                  <div>
                    <img src="images/proyek (1).jpg" width="150" alt="Gambar Recent Post">
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-800">October 12, 2023</p>
                    <p class="font-bold">Lorem ipsum</p>
                  </div>
                </div>
                </a>
                
            </div>
          </div>

          <div class="showpopup_blog absolute w-full left-0 top-0 drop-shadow-xl bg-gray-100 z-[1000] h-full tracking-wide lg:p-0 md:p-0 p-4">
          <button class="close_popup absolute top-2 right-2 bg-red-600 text-white px-3 py-1 font-semibold">X</button>
            <div class="lg:flex lg:flex-row md:flex md:flex-row flex flex-col mt-12">  
            <div class="lg:w-[75%] md:w-[70%] flex">

            <div class="lg:px-24 md:px-4 mx-auto">
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
              <div class="showpopup_blog_content">
                <h2 class="text-3xl font-bold mt-4 font-primary lg:text-3xl md:text-2xl text-xl">Lorem ipsum dolor</h2>
                <div class="border relative my-3 w-full">
                  <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
                </div>
                <p class="text-gray-800 truncate whitespace-pre-line text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis vestibulum, malesuada leo ac, mattis erat. 
                  Proin sed velit in elit pretium commodo. Morbi eget nulla nunc. Vivamus ultrices libero sed lorem fringilla feugiat. Proin vel enim finibus, imperdiet libero nec, tempus ipsum. Donec finibus neque urna, ut sagittis lorem interdum sit amet. Suspendisse fringilla porttitor diam eget condimentum. 
                  Mauris vitae nunc nec neque finibus dictum vel vel enim. Fusce porta est nec arcu semper, a egestas ex cursus. Nam a erat nec felis suscipit dignissim 
                  quis a mi. Donec ipsum massa, elementum eu ex eu, elementum fermentum quam. Cras dictum sed nulla vel vestibulum. Praesent at tellus interdum, dapibus libero id, semper magna. Etiam consectetur erat nunc, nec tincidunt nibh fringilla eget.
                  Quisque ut tincidunt leo. Proin ac neque gravida, finibus libero ac, dignissim erat. Aliquam sit amet odio non urna sagittis maximus. Nam iaculis sem in mauris congue tincidunt. Phasellus dignissim arcu a ipsum ultrices, at laoreet tellus venenatis. Aenean et quam nibh. Maecenas volutpat nulla eget mauris molestie, sit amet dapibus eros ultricies. Pellentesque quis imperdiet turpis. Aliquam eleifend tellus ultrices pulvinar bibendum. Vivamus at tellus tortor. Etiam pretium nunc lacinia facilisis eleifend. Aenean convallis in diam ac commodo.
                  Vivamus at vehicula nulla, id feugiat augue. Etiam quis libero non urna tincidunt accumsan eu ac ex. Nunc suscipit elit vel molestie dictum. Mauris sit amet luctus urna. Cras fringilla efficitur massa vel porta. Curabitur at odio purus. Pellentesque feugiat quam tortor, eu pellentesque felis efficitur id. Quisque vitae magna quis ipsum laoreet facilisis in ac nisl. Aliquam vehicula mi feugiat urna pretium malesuada. Nunc varius arcu eget diam tempor pharetra. Quisque in pellentesque lorem. Mauris eu porta est. Mauris tincidunt ex vel lobortis tempus. Donec tempus pulvinar purus, sit amet sodales nunc egestas a. 
                  Fusce sed eros sit amet arcu tincidunt eleifend at vel elit. 
                </p>
              </div>
            </div>

          </div>

          <div class="lg:w-[25%] md:w-[20%] lg:ml-8 md:ml-2 lg:mb-0 md:mb-0 mb-[30px]">
            <div class="border lg:hidden md:hidden block w-full my-4">
            </div>
            <form action="" class="relative lg:w-[20vw] w-full">
              <input type="search" id="default-search" class="block w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300" placeholder="Search ..." />
              <button type="submit" class="text-white absolute right-0 lg:w-[5vw] p-2 top-0 bg-red-600 h-full focus:ring-blue-300 font-medium">Search</button>
            </form>
            <div class="mt-4 lg:w-[20vw]">
              <p class="font-semibold mt-4">Recent Posts</p>
              <div class="border relative my-3 w-full">
                <div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600"></div>
              </div>
              <div class="recent_post">
                <div class="flex flex-row">
                  <div>
                    <img src="images/proyek (1).jpg" width="150" alt="Gambar Recent Post">
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-800">October 12, 2023</p>
                    <p class="font-bold">Lorem ipsum</p>
                  </div>
                </div>

                <div class="border lg:w-[18vw] my-4">
                </div>
                
                <div class="flex flex-row">
                  <div>
                    <img src="images/proyek (1).jpg" width="150" alt="Gambar Recent Post">
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-800">October 12, 2023</p>
                    <p class="font-bold">Lorem ipsum</p>
                  </div>
                </div>

                <div class="border lg:w-[18vw] my-4">
                </div>
                
                <div class="flex flex-row">
                  <div>
                    <img src="images/proyek (1).jpg" width="150" alt="Gambar Recent Post">
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-800">October 12, 2023</p>
                    <p class="font-bold">Lorem ipsum</p>
                  </div>
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
    $(document).ready(function () {
      $(".showpopup_blog").hide();

      $(".showpopup_blog .close_popup").click(function () {
        $(".showpopup_blog").fadeOut();
      });

      $(".read_more_button").click(function (e) {
        e.preventDefault();
        $(".showpopup_blog").fadeIn();
      });
    });

    return "";
  },
};

export default blog;
