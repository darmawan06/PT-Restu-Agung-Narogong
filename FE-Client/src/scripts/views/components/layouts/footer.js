const footer = {
	init(){
		return `
		<div class=" bg-black mt-4 grid grid-cols-3 py-8 px-[5%]">
			<div class="flex flex-col">
				<img src="images/logo.png" class="w-[30%] m-auto">
			</div>
			<div class="text-white flex">
				<div class="w-full mx-2">
					<p class="font-primary tracking-wider text-lg">Navigation</p>
					<div class="w-full h-[2px] relative my-2">
						<div class="w-full h-full absolute bg-red-600"></div>
						<div class="w-[20%] h-full absolute bg-gray-100"></div>
					</div>
					<ul class="grid grid-cols-2 list-disc ml-5">
						<li class="font-secondary text-sm">Beranda</li>
						<li class="font-secondary text-sm">Proyek</li>
						<li class="font-secondary text-sm">Layanan Kami</li>
						<li class="font-secondary text-sm">Karir</li>
						<li class="font-secondary text-sm">Blog</li>
						<li class="font-secondary text-sm">Tentang Kami</li>
					</ul>
				</div>
			</div>
			<div class="text-white flex">
				<div class="w-full mx-2">
					<p class="font-primary tracking-wider text-lg">Kontak Kami</p>
					<div class="w-full h-[2px] relative my-2">
						<div class="w-full h-full absolute bg-red-600"></div>
						<div class="w-[20%] h-full absolute bg-gray-100"></div>
					</div>
					<ul class="text-white text-sm grid grid-cols-1 gap-2">
						<li class="">restu_narogong@yahoo.co.id</li>
						<li class="">021-823 2272</li>
						<li class="">Jl. PPLI Kp. Walahir RT.08/04 Desa.Nambo, Kec. Klapanunggal, Kab. Bogor, Kode Pos.167102</li>
						<li>
							<form class="flex">
								<input type="text" placeholder="Enter Your Email" class="px-4 py-2 text-black">
								<input type="submit" value="Subscribe" class="px-4 py-2 bg-red-600">
							</form>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="w-full h-[50px] bg-red-600 flex">
			<p class="m-auto text-white font-secondary text-sm">
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