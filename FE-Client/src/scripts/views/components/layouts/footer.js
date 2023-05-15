import ContentData from '../../../data/ContentData';

const footer = {
	async init(){
		this.contentData = new ContentData();
    	this.data = await this.contentData.getContent({page : "contact"})
		return `
		<div class=" bg-white grid md:grid-cols-3 grid-cols-1 py-8 px-[5%] h-auto md:h-[40vh] border-t-2 border-gray-100 2xl:max-w-[1366px] 2xl:m-auto 2xl:h-[300px] 2xl:px-0">
			<div class="flex flex-col">
				<img src="images/logo.png" class="w-[30%] m-auto">
			</div>
			<div class="text-black flex my-4 md:my-0">
				<div class="w-full mx-2">
					<p class="font-primary tracking-wider md:text-lg text-[15px]">Navigasi</p>
					<div class="w-full h-[2px] relative my-2">
						<div class="w-full h-full absolute bg-red-600"></div>
						<div class="w-[20%] h-full absolute bg-black"></div>
					</div>
					<ul class="grid grid-cols-2 list-disc ml-5 h-[50%] mt-4">
						<a href="#"><li class="font-secondary md:text-sm text-[10px]">Beranda</li></a>
						<a href="#/proyek"><li class="font-secondary md:text-sm text-[10px]">Proyek</li></a>
						<a href="#/layanan_kami"><li class="font-secondary md:text-sm text-[10px]">Layanan Kami</li></a>
						<a href="#/galeri"><li class="font-secondary md:text-sm text-[10px]">Galeri</li></a>
						<a href="#/blog"><li class="font-secondary md:text-sm text-[10px]">Blog</li></a>
						<a href="#/tentang_kami"><li class="font-secondary md:text-sm text-[10px]">Tentang Kami</li></a>
					</ul>
				</div>
			</div>
			<div class="text-black flex my-4 md:my-0">
				<div class="w-full mx-2">
					<p class="font-primary tracking-wider md:text-lg text-[15px]">Kontak Kami</p>
					<div class="w-full h-[2px] relative my-2">
						<div class="w-full h-full absolute bg-red-600"></div>
						<div class="w-[20%] h-full absolute bg-black"></div>
					</div>
					<ul class="text-black md:text-sm text-[10px] grid grid-cols-1 gap-2 h-[80%] mt-4">
						<li class="">${this.data.email}</li>
						<li class="">${this.data.whatsapp}</li>
						<li class="">${this.data.address}</li>
						<li class="hidden">
							<form class="flex">
								<input type="text" placeholder="Enter Your Email" class="px-4 py-2 text-white bg-black">
								<input type="submit" value="Subscribe" class="px-4 py-2 bg-red-600 text-white">
							</form>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="w-full h-[50px] bg-red-600 flex">
			<p class="m-auto text-white font-secondary md:text-sm text-[10px]">
				© Copyright, PT Restu Agung Narogong. All right reserved.
			</p>
		</div>
		`;
	},

	afterRender(){
		return "";
	}
}

export default footer;