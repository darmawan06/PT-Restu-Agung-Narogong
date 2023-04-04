const header = {
	init(){
		return `
			<ul class="w-full border border-2 px-[5%] py-[10px] grid grid-cols-7 items-stretch justify-center gap-2 bg-gray-50">
				<li class="flex"><a href="#" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Beranda</a></li>
				<li class="flex"><a href="#/proyek" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Proyek</a></li>
				<li class="flex"><a href="#/layanan_kami" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Layanan Kami</a></li>
				<li class="flex"><img src="images/logo.png" class="w-[70px] m-auto"></li>
				<li class="flex"><a href="#/tentang_kami" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Tentang Kami</a></li>
				<li class="flex"><a href="#/karir" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Karir</a></li>
				<li class="flex"><a href="#/blog" class="m-auto font-primary font-semibold tracking-widest hover:border-b-2 border-red-600 text-gray-500 hover:text-red-600">Blog</a></li>
			</ul>
		`;
	},

	afterRender(){
		return "";
	}
}

export default header;