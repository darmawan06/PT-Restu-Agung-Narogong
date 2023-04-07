const header = {
	init(){
		return `
			<ul class="w-full h-[100px] border border-2 px-[5%] py-[5px] grid-cols-7 items-stretch justify-center gap-2 bg-gray-50  md:grid hidden">
				<li class="flex h-full"><a href="#" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Beranda</a></li>
				<li class="flex h-full"><a href="#/proyek" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Proyek</a></li>
				<li class="flex h-full"><a href="#/layanan_kami" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Layanan Kami</a></li>
				<li class="flex h-full"><img src="images/logo.png" class=" h-[70px] mx-auto my-auto"></li>
				<li class="flex h-full"><a href="#/tentang_kami" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Tentang Kami</a></li>
				<li class="flex h-full"><a href="#/karir" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Karir</a></li>
				<li class="flex h-full"><a href="#/blog" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Blog</a></li>
			</ul>
			<div class="flex md:hidden w-full h-[60px] shadow-md border-b border-gray-600 bg-white sticky">
				<div class="w-2/4 h-full my-auto flex px-4">
					<img src="images/logo.png" class=" h-[80%] my-auto h-full"> 
				</div>
				<div class="w-2/4 h-full my-auto flex px-4">
					<button class="bg-black ml-auto btn-menu"><img src="icons/menu.png" class=" h-[50%] ml-auto my-auto h-full" alt="icon menu"></button>
				</div>
			</div>
			<div class="h-[30vh] bg-red-600 p-8 md:hidden fixed w-full menu-phone">
				<ul class="grid grid-cols-1 gap-4 h-[50%] w-full mx-auto font-secondary text-[15px] font-bold text-white">
					<a href="#" class="btn-link-menu flex w-full">
						<li class="ml-auto my-auto">Beranda</li>
					</a>
					<a href="#/proyek" class="btn-link-menu flex w-full">
						<li class="ml-auto my-auto">Proyek</li>
					</a>
					<a href="#/layanan_kami" class="btn-link-menu flex w-full">
						<li class="ml-auto my-auto">Layanan Kami</li>
					</a>
					<a href="#/tentang_kami" class="btn-link-menu flex w-full">
						<li class="ml-auto my-auto">Tentang Kami</li>
					</a>
					<a href="#/karir" class="btn-link-menu flex w-full">
						<li class="ml-auto my-auto">Karir</li>
					</a>
					<a href="#/blog" class="btn-link-menu flex w-full">
						<li class="ml-auto my-auto">Blog</li>
					</a>
				</ul>
			</div>
		`;
	},

	afterRender(){
		this.btnMenuEvent()
		return "";
	},

	btnMenuEvent(){
		$('.btn-menu').on('click',()=>{
			let menu_phone = $('.menu-phone');
			menu_phone.toggleClass('menu-phone-animation')
		})

		$('.btn-link-menu').on('click',()=>{
			let menu_phone = $('.menu-phone');
			menu_phone.toggleClass('menu-phone-animation')

		})
	}
}

export default header;