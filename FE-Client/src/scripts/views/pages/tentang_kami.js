const tentang_kami = {
	init(){
		return `
			<section class="w-full h-[380px] bg-gray-50 flex flex-col px-[8%] md:mt-[70px]">
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
		    <section class="w-full md:h-[60vh] flex md:flex-row flex-col px-[8%] py-4">
		    	<div class="md:w-2/4 w-full h-full flex m-auto">
		    		<img src="images/logo.png" class="m-auto">
		    	</div>
		    	<div class="md:w-2/4 w-full h-full flex mt-4 md:mt-0">
		    		<div class="my-auto">
			    		<h4 class="text-xl font-primary font-semibold mb-4">Tentang Perusahaan</h4>
			    		<p class="text-[13px] md:text-[15px] break-word text-justify">
				    		PT Restu Agung Narogong adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, Man Power Supply, manufacture Fabrikasi & Enginering. Berdirinya PT. Restu Agung Narogong adalah sebagai bentuk respon terhadap peluang di dunia konstruksi dan engineering yang semakin terbuka dan berkembang di Indonesia. Berdiri pada tahun 1994 sebagai CV. Restu dan pada tahun 2008 berdiri sebagai Perseroan Terbatas sekaligus berubah nama menjadi PT. Restu Agung Narogong.
			    		</p>
		    		</div>
		    	</div>
		    </section>
		    <section class="w-full min-h-[50vh] flex flex-col px-[8%] py-4">
		    	<div class="mx-auto w-full">
			    	<h4 class="text-center text-[20px] font-primary font-semibold mx-auto">Visi dan Misi</h4>
			    	<div class="w-full h-[2px] relative my-2">
			          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
			          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
			        </div>
		    	</div>
		    	<div class="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-center text-[18px] font-secondary font-semibold mx-auto">Visi</h5>
		    			<p class="text-center md:text-[15px] text-[13px] mx-auto mt-4">Tumbuh dan berkembang menjadi perusaan kontraktor yang bertaraf internasional dengan tekad yang kuat serta kegigihan dalam berusaha untuk menjawab tantangan di masa yang akan datang.</p>
		    		</div>
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-center text-[18px] font-secondary font-semibold mx-auto">Misi</h5>
		    			<ul class="mt-4 gap-2 grid-cols grid md:text-[15px] text-[13px]">
		    				<li>Memberikan pelayanan yang terbaik kepada semua konsumen dengan penuh tanggung jawab serta menjunjung tinggi kejujuran dan loyalitas.<li>
		    				<li>Menjaga kepercayaan yang diberikan oleh konsumen dengan memberikan hasil kerja yang maksimal tanpa mengurangi rasa kenyamanan dan keamanan</li>
		    			</ul>
		    		</div>
		    	</div>
		    </section>
		    <section class="w-full flex flex-col px-[8%] py-4">
		    	<div class="mx-auto w-full">
			    	<h4 class="text-center text-[20px] font-primary font-semibold mx-auto">Struktur Organisasi</h4>
			    	<div class="w-full h-[2px] relative my-2">
			          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
			          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
			        </div>
		    	</div>
		    	<div class="w-full h-full p-4">
		    		<img src="images/struktur.png" class="m-auto w-full md:w-[80%] bg-red-600">
		    	</div>
		    </section>
		    <section class="w-full h-auto flex flex-col px-[8%] p-4">
		    	<div class="mx-auto w-full">
			    	<h4 class="text-center text-[20px] font-primary font-semibold mx-auto">Kebijakan Perusahaan</h4>
			    	<div class="w-full h-[2px] relative my-2">
			          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
			          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
			        </div>
		    	</div>
		    	<div class="grid grid-cols-1 h-full gap-4 p-5">
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-left text-[15px] md:text-[18px] font-secondary font-semibold">Kebijakan Mutu</h5>
		    			<p class="md:text-[15px] text-[13px] text-justify mx-auto mt-4">PT RESTU AGUNG NAROGONG menyadari bahwa keberhasilan perusahaan adalah kontribusi dari semua pihak yang terkait dalam rantai proses pemberian nilai tambah. Perusahaan juga menyadari arti pentingnya nilai kepuasan pelanggan. Oleh karenanya PT RESTU AGUNG NAROGONG akan selalu mendorong keseluruhan fungsi-fungsi, agar selalu terkendali, efektif dan dapat mencapai sinergi yang baik. Sebagai hasil akhirnya diharapkan jasa yang dihasilkan akan selalu bermutu baik Perusahaan akan selalu mendorong agar semua sumber daya yang ada bisa berfungsi sebaik-baiknya dalam lingkungan kerja yang kondusif untuk tercapainya kerjasama antar fungsi Dengan demikian mutu hasil kerja setiap fungsi akan bisa dipertahankan. Adalah tanggung jawab setiap karyawan untuk selalu menghasilkan mutu hasil kerja yang baik. Untuk menjamin tercapainya kualitas dan konsistensi hasil kerja yang diharapkan maka disusunlah prosedur sistem mutu yang mengatur keseluruhan proses kerja yang ada. Setiap karyawan berkewajiban untuk melakukan perbaikan proses dilingkungan kerjanya masing-masing, memiliki kompetensi untuk memenuhi kualitas jasa yang diharapkan Proses perbaikan ini bertujuan untuk meningkatkan kemampuan proses dan memperkecil variasi proses yang ada. Untuk mencapai tujuan-tujuan tersebut PT RESTU AGUNG NAROGONG menerapkan Sistem Manajemen Mutu yang berdasarkan standar ISO 9001:2008</p>
		    		</div>
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-left text-[15px] md:text-[18px] font-secondary font-semibold">Kebijakan K3</h5>
		    			<p class="md:text-[15px] text-[13px] text-justify mx-auto mt-4">Kami Perusahaan yang bergerak dibidang jasa kontraktor, jasa penyedia tenaga kerja (penanganan limbah industri, perawatan dan pelayanan, pembuatan kantung semen) dan jasa penyewaan alat berat berkomitmen untuk meningkatkan kepuasan pelanggan dan menyediakan tempat kerja yang sehat dan aman bagi pekerja serta pelanggan dengan penerapan program perbaikan berkelanjutan melalui sistem Manajemen Kesehatan Keselamatan Kerja dengan cara ;
							Menetapkan tujuan, merencanakan, melaksanakan, dan mengevaluasi sasaran serta program K3 (Kesehatan Keselamatan Kerja) secara berkala agar selaras, baik dengan perkembangan kondisi Perusahaan, Peraturan atau standar yang berlaku dan harapan pelanggan.
							Mematuhi perundang-undangan dan pesyaratan lainnya yang berkaitan dengan K3, serta mengintegrasikannya kedalam semua aspek kegiatan Operasi. 
							Melakukan indentifikasi bahaya sesuai dengan sifat dan akala resiko-resiko K3.
							Menyediakan sumber daya yang cukup untuk mengimplementasikan sistem manajemen Keselamatan, Kesehatan dan Kerja.
							Mendokumentasikan, Menerapkan, dan memilihara sistem manajemen K3.
							Memelihara Program lindung lingkungan hidup terhadap kegiatan disemua lokasi proyek.
							Mengkomunikasikan dan menanamkan kesadaran Kebijakan ini kepada semua personel secara berkala.
							Mengelola dan menangani semua material, baik yang berbahaya maupun yang tidak berbahaya, termasuk mengendalikan potensi bahaya terhadap pekerja.
							Meningkatkan kompetensi pekerja sesuai dengan tugas dan tanggung jawabnya.
							Meninjau aspek Manajemen K3 secara persodik agar selalu relevan.
							Menghasilkan produk Precast yang berkualitas baik dengan melalui cara kerja yang aman.
							Memiliki pangsa pasar yang luas.
							Memeberikan pelayanan terbaik terhadap konsumen.
							Penerapan kebijakan ini menjadi kawajiban semua pihak yang berkerja untuk PT. Restu Agung Narogong sesuai dengan tugas dan tanggung jawab masing-masing.
						</p>
		    		</div>
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-left text-[15px] md:text-[18px] font-secondary font-semibold">Kebijakan Narkoba dan Alkohol</h5>
		    			<p class="md:text-[15px] text-[13px] text-justify mx-auto mt-4">PT Restu Agung Narogong adalah tempat kerja yang bebas narkoba. Kebijakan ini dibuat adalah untuk memastikan keselamatan semua karyawan dan untuk meningkatkan produktivitas. Kebijakan ini berlaku untuk semua karyawan dan pekerja sementara.
							Zat tercakup dalam kebijakan ini termasuk alkohol, obat-obatan terlarang, inhalansia dan obat-obatan resep dan obat bebas. Kami berhak memeriksa tempat kerja terkait dengan zat-zat ini. Kami berhak melakukan tes narkoba dan alkohol setiap saat.
							Kami dapat memutuskan hubungan kerja ( PHK ) apabila pekerja membawa, mengedarkan, menawarkan, memiliki, menjual belikan obat-obatan terlarang, minuman beralkohol, menolak untuk diuji atau memberikan informasi/laporan palsu.
						</p>
		    		</div>
		    	</div>
		    </section>
		`;
	},

	afterRender(){
		return "";
	}
}

export default tentang_kami;