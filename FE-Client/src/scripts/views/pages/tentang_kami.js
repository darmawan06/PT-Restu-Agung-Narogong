const tentang_kami = {
	init(){
		return `
			<section class="w-full h-[300px] bg-gray-50 flex flex-col px-[8%]">
		      <div class="w-full m-auto flex-col">
		        <p class="text-[50px] font-primary text-white text-center tracking-wider text-black">Tentang Kami</p>
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
		        <p class="my-auto text-sm">Tentang Kami</p>
		      </a>
		    </section>
		    <section class="w-full flex px-[8%] py-4">
		    	<div class="w-2/4 h-full">
		    		<h4 class="text-xl font-primary font-semibold mb-4">Tentang Perusahaan</h4>
		    		<p class="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dictum nisi. Aenean consectetur at ipsum in vulputate. Nullam et commodo dolor, ac commodo magna. Nulla urna eros, maximus rhoncus blandit eu, mollis et turpis. Nunc nisi nisl, tincidunt nec gravida rhoncus, maximus sed purus. Duis eleifend sit amet arcu sed luctus. Phasellus felis orci, vulputate vitae feugiat et, placerat eget eros. Donec eu euismod odio. Nam eu volutpat magna, eu bibendum ex. Donec gravida finibus justo. Sed consequat convallis luctus.
					<br>
					<br>
					Cras malesuada nulla eget elit pretium bibendum. Quisque ut erat a eros venenatis hendrerit. Curabitur sit amet blandit libero, vitae pretium dui. Nunc porta tincidunt quam sit amet ullamcorper. Suspendisse porta sapien quis interdum mattis. Nulla ac mi eget risus laoreet imperdiet sed sit amet erat. Mauris pellentesque lectus in sapien maximus faucibus. Curabitur facilisis sagittis est et consectetur.
					<br>
					<br>
					Aliquam ut metus tempor, rhoncus lorem nec, viverra risus. Etiam aliquam sem eleifend odio suscipit ornare. In hac habitasse platea dictumst. Duis sit amet ipsum ipsum. Sed eu nisl tellus. In ultricies neque quis nisi tincidunt porttitor. Pellentesque lacinia venenatis dolor, a rhoncus tellus ornare eu. Pellentesque odio ex, pellentesque in est in, aliquet elementum dui. Curabitur a malesuada est. Nulla consequat, nunc suscipit viverra rutrum, sapien est gravida eros, et sagittis quam neque sodales sapien. Integer pulvinar euismod nunc, in vestibulum nibh bibendum in. Morbi porttitor vestibulum porta. Maecenas ac sapien sodales, dignissim nunc faucibus, mattis massa. Nulla facilisi.
		    		</p>
		    	</div>

		    	<div class="w-2/4 h-full flex m-auto">
		    		<img src="images/logo.png" class="m-auto">
		    	</div>
		    </section>
		`;
	},

	afterRender(){
		return "";
	}
}

export default tentang_kami;