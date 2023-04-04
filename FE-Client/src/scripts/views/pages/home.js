const home = {
  async init() {

    return `
      <section class="w-full h-[600px] bg-gray-600 relative">
        <video class="w-full h-full object-cover absolute" loop="true" autoplay controls="false" muted >
          <source src="videos/aktifitas.mp4" type="video/mp4" />
        </video>
        <div class="absolute w-full h-full opacity-[20%]"></div>
        <div class="absolute w-full h-full z-100 flex px-[8%]">
          <div class="my-auto text-white w-[50%] grid gap-4 ">
            <h1 class="text-3xl font-primary text-red-600 tracking-wider">PT. Restu Agung Narogong</h1>
            <h2 class="text-justify text-sm font-secondary tracking-wide">PT Restu Agung Narogong adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Enginering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah Ran Precast. Ran Precast berdiri sejak tahun 2017 yang merupakan unit usaha yang bergerak di bidang teknik sipil dengan spesialis pada industri beton pracetak. Sebagai bentuk komitmen yang berkesinambungan, motto RAN PRECAST adalah “Nyata Kuatnya”. Dengan kejelasan motto tersebut memotivasi pemilik perusahaan, management dan segenap karyawan untuk terus menjaga dan meningkatkan kualitas hasil produksi.</h2>
            <div class="flex">
              <button class="p-3 bg-red-600 rounded-md font-secondary text-sm mr-2">Hubungi Kami<button>
              <button class="p-3 bg-gray-100 rounded-md font-secondary text-black text-sm mr-2">Tentang Kami<button>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full min-h-[400px] bg-gray-50 px-[8%] py-4 flex flex-col">
        <div class="m-auto w-full flex flex-col">
          <div>
            <h2 class="text-left text-3xl font-primary tracking-wider font-semibold">Proyek</h2>
            <div class="w-full h-[2px] relative my-2">
              <div class="w-full h-full absolute bg-red-600"></div>
              <div class="w-[20%] h-full absolute bg-black"></div>
            </div>
          </div>
          <ul class="grid grid-cols-4 gap-4 mt-5 grid-flow-dense">
            <li class="bg-red-600 h-[200px]">
              <img src="images/proyek (1).jpg" class="w-full h-full object-cover">
            </li>
            <li class="bg-red-600 h-[200px]">
              <img src="images/proyek (2).jpg" class="w-full h-full object-cover">
            </li>
            <li class="bg-red-600 h-[200px]">
              <img src="images/proyek (3).jpg" class="w-full h-full object-cover">
            </li>
            <li class="bg-red-600 h-[200px]">
              <img src="images/proyek (4).jpg" class="w-full h-full object-cover">
            </li>
          </ul>
          <div class="flex mx-auto mt-5">
            <button class="p-3 border-2 border-black hover:bg-red-600 hover:text-white rounded-md font-secondary text-sm w-[80px] mr-2"> < <button>
            <button class="p-3 border-2 border-black hover:bg-red-600 hover:text-white rounded-md font-secondary text-sm w-[80px] ml-2"> > <button>
          </div>
        </div>
      </section>
      <section class="w-full h-[180px] text-center flex bg-red-600 px-[10%]">
        <p class="m-auto font-secondary text-white font-semibold tracking-widest text-sm">Memberikan pelayanan yang terbaik kepada semua konsumen dengan penuh tanggung jawab serta menjunjung tinggi kejujuran dan loyalitas.</p>
      </section>
      <section class="w-full min-h-[400px] bg-gray-50 px-[8%] flex flex-col py-8">
        <div class="m-auto w-full flex flex-col">
          <div>
            <h2 class="text-left text-3xl font-primary tracking-wider font-semibold">Keunggulan Kami</h2>
            <div class="w-full h-[2px] relative my-2">
              <div class="w-full h-full absolute bg-red-600"></div>
              <div class="w-[20%] h-full absolute bg-black"></div>
            </div>
          </div>
          <div class="h-auto flex m-auto mt-4">
            <ul class="grid-cols-2 grid gap-4 h-auto m-auto">
              <li>
                <i class="text-lg font-secondary not-italic">PROFESIONAL DAN  BERPENGALAMAN</i>
                <p class="font-secondary text-sm mt-2">Kami telah berhasil menyelesaikan berbagai proyek konstruksi di Jawa, Kalimantan Timur, Sulawesi, dan Bali sejak tahun 1995. Semua proyek telah kita selesaikan dengan sikap yang profesional dengan mengutamakan kualitas untuk proyek.</p>
              </li>
              <li>
                <i class="text-lg font-secondary not-italic">JUJUR DAN DAPAT DIANDALKAN</i>
                <p class="font-secondary text-sm mt-2">Bagi kami, kejujuran adalah suatu sikap yang kami jaga dengan intergritas. Kepercayaan adalah faktor penting untuk menjaga hubungan yang baik demi mencapai dan menyelesaikan proyek dengan hasil yang maksumal. Bukan hanya dengan klien, tetapi juga dengan semua yang berkontribusi di proyek tersebut. </p>
              </li>
              <li>
                <i class="text-lg font-secondary not-italic">EFEKTIF DAN EFISIEN</i>
                <p class="font-secondary text-sm mt-2">Selalu berinovasi dalam pengerjaan dan bekerja bersama dengan tenaga - tenaga ahli merupakan suatu strategi yang selalu kita gunakan agar pekerjaan konstruksi dapat terselesaikan dengan efektif dan efisien tanpa melupakan perhatian terhadap detil dan memastikan bahwa semua terselesaikan dengan benar.</p>
              </li>
              <li>
                <i class="text-lg font-secondary not-italic">KEPERCAYAAN</i>
                <p class="font-secondary text-sm mt-2">Menjaga kepercayaan yang diberikan oleh konsumen dengan memberikan hasil kerja yang maksimal tanpa mengurangi rasa kenyamanan dan keamanan</p>
              </li>
            </ul>
          <div>
        </div>
      </section>
      <section class="w-full h-[180px] text-center flex bg-black px-[10%]">
        <p class="m-auto font-secondary text-white font-semibold tracking-widest text-sm">Tumbuh dan berkembang menjadi perusahaan kontraktor yang bertaraf Internasional dengan tekad yang kuat serta kegigihan dalam berusaha untuk menjawab tantangan dimasa yang akan datang</p>
      </section>
      <section class="w-full min-h-[400px] bg-gray-50 px-[8%] py-4 flex flex-col py-8">
        <div class="m-auto w-full flex flex-col">
          <div>
            <h2 class="text-left text-3xl font-primary tracking-wider font-semibold">Klien Kami</h2>
            <div class="w-full h-[2px] relative my-2">
              <div class="w-full h-full absolute bg-red-600"></div>
              <div class="w-[20%] h-full absolute bg-black"></div>
            </div>
          </div>
          <div class="w-full flex m-auto mt-4">
            <ul class="grid-cols-6 grid gap-4 w-full h-auto m-auto">
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (1).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (2).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (3).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/logo.png" class="w-full h-full object-contain m-auto">
              </li>
               <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (1).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (2).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (3).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/logo.png" class="w-full h-full object-contain m-auto">
              </li>
               <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (1).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (2).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/klien (3).jpg" class="w-full h-full object-contain m-auto">
              </li>
              <li class="w-full h-[200px] flex grayscale hover:grayscale-0">
                <img src="images/logo.png" class="w-full h-full object-contain m-auto">
              </li>
            </ul>
          <div>
        </div>
      </section>
    `;
  },
  async afterRender() {
  }
};
export default home;
