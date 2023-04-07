const karir = {
  init() {
    return `
			<section class="w-full h-[300px] bg-gray-50 flex flex-col px-[8%]">
		      <div class="w-full m-auto flex-col">
		        <p class="text-[50px] font-primary text-white text-center tracking-wider text-black">Karir</p>
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
		        <p class="my-auto text-sm">Karir</p>
		      </a>
		    </section>
		    <section class="w-full bg-gray-50 flex flex-col px-[8%] ">
				<p class="mt-12">Lowongan diperusahan kami:</p>

				<div class="md:w-[50vw] mt-8">
				<p class="text-4xl font-bold">Pelaksaan Lapangan</p>

				<div class="border relative my-3 w-full">
					<div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600 "></div>
				</div>

					<p class="">Pesyaratan :</p>
					
					<ul class="list-disc ml-12 ml-12">
						<li>Pendidikan minimal D3 Teknik Sipil / STM Bangunan</li>
						<li>Pengalaman minimal 3 tahun</li>
						<li>Menguasai sistem manajemen mutu, standar toleransi, dan instruksi kerja di proyek. Diutamakan yang menguasai estimasi volume.</li>
						<li>Mampu bekerja di bawah tekanan / tight schedule</li>
						<li>Siap bekerja lembur</li>
					<ul>
					
				</div>


				<div class="md:w-[50vw] mt-8">
					
					<h1 class="text-4xl font-bold">Logistik</h1>

					<div class="border relative my-3 w-full">
						<div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600 "></div>
					</div>

					<p class="">Pesyaratan :</p>
					<ul class="list-disc  ml-12">
						<li>Pendidikan minimal D3 Teknik Sipil / Elektro / Mesin atau STM</li>
						<li>Pengalaman sebagai Staff Logistik Gudang lebih diutamakan</li>
						<li>Memiliki pemahaman yang baik mengenai material dan peralatan konstruksi bangunan</li>
						<li>Menguasai / mahir menggunakan komputer (Ms. Office)</li>
						<li>Siap bekerja lembur jika diperlukan</li>
					<ul>
				</div>


				<div class="md:w-[50vw] mt-8">
					<h1 class="text-4xl font-bold">Staff Personalia</h1>

					<div class="border relative my-3 w-full">
						<div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600 "></div>
					</div>

					<p class="">Pesyaratan :</p>
					<ul class="list-disc  ml-12">
						<li>Diutamakan wanita</li>
						<li>Pendidikan minimal D3/S1 Hukum atau Psikologi atau sejenisnya dari universitas dengan akreditasi A atau B pada jurusan tersebut</li>
						<li>Pengalaman di bidang hukum atau personalia lebih diutamakan</li>
						<li>Pemahaman yang baik mengenai bahasa hukum dan undang-undang</li>
						<li>Mampu bersikap tegas, terampil bernegosiasi dan komunikatif</li>
					<ul>

				</div>


				<div class="md:w-[50vw] mt-8">
					<h1 class="text-4xl font-bold">Mechanical Electrical</h1>

					<div class="border relative my-3 w-full">
						<div class="border-2 absolute md:w-[2vw] w-[10vw] bottom-0 border-red-600 "></div>
					</div>

					<p class="">Pesyaratan :</p>
					<ul class="list-disc  ml-12">
						<li>Pendidikan minimal D3 Elektronik atau setara</li>
						<li>Pengalaman minimal 3 tahun</li>
						<li>Mampu bekerja di bawah tekanan / tight schedule</li>
					<ul>
					
				</div>
				<div class="md:w-[50vw] mt-8">

					<p>Mohon mengirimkan lamaran ke hrd@purisuma.id atau mengirimkan langsung ke alamat kantor kami. Terima kasih.</p>
					<br>

					<p>
						NB: PT. PURI SUMA MANDIRI tidak pernah memungut biaya apapun untuk wawancara dan tidak bekerjasama dengan pihak
						ketiga vendor yang mengatasnamakan PT. PURI SUMA MANDIRI untuk melakukan panggilan wawancara. 
						Semua panggilan akan melalui email resmi kami hrd@purisuma.id.
					</p>
				</div>
				<br>


			</section>

		`;
  },

  afterRender() {
    return "";
  },
};

export default karir;
