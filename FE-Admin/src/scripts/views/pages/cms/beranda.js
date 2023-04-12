import sidebar from '../../components/layouts/sidebar';
import ContentData from '../../../data/ContentData';
import accessImage from '../../../tools/accessImage';
const beranda = {
	async init(){
		this.API = new ContentData();
		let contentHome = await this.API.getHome();
		return await `
			<section class="w-[20%]">
				${sidebar.init()}
			</section>
			<section class="w-[80%]">
				<div class="btn-cms grid grid-cols-5 px-8 mt-4 gap-4">
					<button class="border border-gray-500 text-gray-500 font-semibold hover:bg-red-600 p-2 hover:text-white btn-hero">Hero</button>
					<button class="border border-gray-500 text-gray-500 font-semibold hover:bg-red-600 p-2 hover:text-white btn-aboutus">Tentang Kami</button>
					<button class="border border-gray-500 text-gray-500 font-semibold hover:bg-red-600 p-2 hover:text-white btn-advantedge">Kelebihan Kami</button>
					<button class="border border-gray-500 text-gray-500 font-semibold hover:bg-red-600 p-2 hover:text-white btn-project">Proyek Kami</button>
					<button class="border border-gray-500 text-gray-500 font-semibold hover:bg-red-600 p-2 hover:text-white btn-testimonial">Testimoni</button>
				</div>
				<form id="form" class="px-8 py-4" method="POST" enctype="multipart/form-data" action="">
					<div class="cms-form w-full border-2 shadow-md p-4 my-2 hero">
						<h2 class="uppercase text-[20px] font-bold">HERO </h2>
						<div class="grid grid-cols-3 w-full  gap-4 mt-4">
							<div class="flex flex-col">
								<label class="text-[15px]">Judul</label>
								<input type="text" id="hero_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.hero.title}">
							</div>
							<div class="flex flex-col col-span-3">
								<label class="text-[15px]">Deskripsi</label>
								<textarea type="text" id="hero_description" class="border border-gray-400 px-2 text-[15px] h-[100px]">${contentHome.hero.description}</textarea>
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Gambar 1</label>
								<img src="${accessImage.set(contentHome.hero.image_1)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="hero_image_1" class="border border-gray-400 px-2 text-[15px]">
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Gambar 2</label>
								<img src="${accessImage.set(contentHome.hero.image_2)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="hero_image_2" class="border border-gray-400 px-2 text-[15px]">
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Gambar 3</label>
								<img src="${accessImage.set(contentHome.hero.image_3)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="hero_image_3" class="border border-gray-400 px-2 text-[15px]">
							</div>
						</div>
					</div>
					<div class="cms-form w-full border-2 shadow-md p-4 my-2 aboutus hidden">
						<h2 class="uppercase text-[20px] font-bold">Tentang Kami </h2>
						<div class="grid grid-cols-3 w-full  gap-4 mt-4">
							<div class="flex flex-col">
								<label class="text-[15px]">Pengalaman(tahun)</label>
								<input type="text" id="aboutus_experience" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.about_us.experience}">
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Proyek Selesai</label>
								<input type="text" id="aboutus_project_complete" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.about_us.project_complete}">
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Pekerja</label>
								<input type="text" id="aboutus_workers" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.about_us.workers}">
							</div>

							<div class="flex flex-col">
								<label class="text-[15px]">Judul</label>
								<input type="text" id="aboutus_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.about_us.title}">
							</div>

							<div class="flex flex-col">
								<label class="text-[15px]">Sub Judul</label>
								<input type="text" id="aboutus_subtitle" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.about_us.subtitle}">
							</div>
							<div class="flex flex-col col-span-3">
								<label class="text-[15px]">Deskripsi</label>
								<textarea type="text" id="aboutus_description" class="border border-gray-400 px-2 text-[15px] h-[100px]">${contentHome.about_us.description}</textarea>
							</div>
							<div class="flex flex-col col-span-3">
								<label class="text-[15px]">Penghargaan <i class="text-red-600">gunakan "," (koma) sebagai pemisah</i></label>
								<textarea type="text" id="aboutus_award" class="border border-gray-400 px-2 text-[15px] h-[100px]">${contentHome.about_us.award}</textarea>
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Gambar</label>
								<img src="${accessImage.set(contentHome.about_us.image)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="aboutus_image" class="border border-gray-400 px-2 text-[15px]">
							</div>
						</div>
					</div>
					<div class="cms-form w-full border-2 shadow-md p-4 my-2 advantedge hidden">
						<h2 class="uppercase text-[20px] font-bold">Kelebihan Kami </h2>
						<div class="grid grid-cols-3 w-full  gap-4 mt-4 ">
							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Judul</label>
								<input type="text" id="advantedge_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.title}">
							</div>
							<div class="flex flex-col mt-auto col-span-2">
								<label class="text-[15px]">Sub Judul</label>
								<input type="text" id="advantedge_subtitle" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.subtitle}">
							</div>
							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Icon Item 1</label>
								<img src="${accessImage.set(contentHome.our_advantedge.items[0].icon)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="advantedge_item1_image" class="border border-gray-400 px-2 text-[15px]">
							</div>

							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Judul Item 1</label>
								<input type="text" id="advantedge_item1_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.items[0].title}">
							</div>
	
							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Deskripsi Item 1</label>
								<input type="text" id="advantedge_item1_description" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.items[0].description}">
							</div>

							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Icon Item 2</label>
								<img src="${accessImage.set(contentHome.our_advantedge.items[1].icon)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="advantedge_item2_image" class="border border-gray-400 px-2 text-[15px]">
							</div>

							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Judul Item 2</label>
								<input type="text" id="advantedge_item2_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.items[1].title}">
							</div>
	
							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Deskripsi Item 2</label>
								<input type="text" id="advantedge_item2_description" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.items[1].description}">
							</div>

							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Icon Item 3</label>
								<img src="${accessImage.set(contentHome.our_advantedge.items[2].icon)}" width="120" height="120" class="bg-red-200 my-2 object-cover w-[120px] h-[120px]">
								<input type="file" id="advantedge_item3_image" class="border border-gray-400 px-2 text-[15px]">
							</div>

							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Judul Item 3</label>
								<input type="text" id="advantedge_item3_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.items[2].title}">
							</div>
	
							<div class="flex flex-col mt-auto">
								<label class="text-[15px]">Deskripsi Item 3</label>
								<input type="text" id="advantedge_item3_description" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_advantedge.items[2].description}">
							</div>
						</div>
					</div>
					<div class="cms-form w-full border-2 shadow-md p-4 my-2 project hidden">
						<h2 class="uppercase text-[20px] font-bold">Proyek Kami </h2>
						<div class="grid grid-cols-3 w-full  gap-4 mt-4">
							<div class="flex flex-col">
								<label class="text-[15px]">Judul</label>
								<input type="text" id="ourproject_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_project.title}">
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Sub Judul</label>
								<input type="text" id="ourproject_subtitle" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.our_project.subtitle}">
							</div>
						</div>
					</div> 
					<div class="cms-form w-full border-2 shadow-md p-4 my-2 testimonial hidden">
						<h2 class="uppercase text-[20px] font-bold">Testimoni </h2>
						<div class="grid grid-cols-3 w-full  gap-4 mt-4">
							<div class="flex flex-col">
								<label class="text-[15px]">Judul</label>
								<input type="text" id="testimonial_title" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.testimonial.title}">
							</div>
							<div class="flex flex-col">
								<label class="text-[15px]">Sub Judul</label>
								<input type="text" id="testimonial_subtitle" class="border border-gray-400 px-2 text-[15px]" value="${contentHome.testimonial.subtitle}">
							</div>
						</div>
					</div> 
					<input id="submit" type="submit" value="Update" class="w-full bg-green-600 p-2 text-white font-bold tracking-wider cursor-pointer " disable>
				</form>
			</section>
		`;
	},

	afterRender(){
		sidebar.afterRender();
		this.eventBtnContent('.btn-hero', '.hero')
		this.eventBtnContent('.btn-aboutus', '.aboutus')
		this.eventBtnContent('.btn-advantedge', '.advantedge')
		this.eventBtnContent('.btn-project', '.project')
		this.eventBtnContent('.btn-testimonial', '.testimonial')
		// this.validateForm()
		this.postData()
		console.log(this.createData())
		return "";
	},

	eventBtnContent(classBtn, classForm){
		$(classBtn).on('click',()=>{
			$('.cms-form').hide();
			$(classForm).show();
		})
	},

	validateForm(){
		$("#form").validate({
		  rules: {
		    alamat_1 : {
		      required : true,
		        maxlength: 84,
		    },
		   alamat_2 : {
		      required : true,
		        maxlength: 84,
		    },
		    telepon : {
		      required : true,
		        maxlength: 84,
		    },
		    email : {
		      required : true,
		        maxlength: 84,
		    },
		  }
		});
	},
	postData(){
	    $('#form').submit(async (e)=>{
	      e.preventDefault()
	      
	      $('#submit').prop('disabled', true);
	      $('#submit').attr('value', 'Dalam Proses');
	      await this.API.requestPOST({
	        request : 'cms/content/home',
	        data : this.createData()
	      }).then((e)=>{
	      	console.log(e);
	        if(e.status == 200){
		      $('#submit').attr('value', 'Selesai');
	          $('#submit').prop('disabled', false);	      
	          window.location.reload()
	        }else{
		      $('#submit').attr('value', 'Gagal');
	        }
			$('#submit').attr('value', 'Submit');
	      })
	    })
  	},
	createData(){
		let formData = new FormData()
		formData.append("hero_title",$('#hero_title').val())
		formData.append("hero_description",$('#hero_description').val())
		formData.append("hero_image_1",document.getElementById("hero_image_1").files[0])
		formData.append("hero_image_2",document.getElementById("hero_image_2").files[0])
		formData.append("hero_image_3",document.getElementById("hero_image_3").files[0])
		
		formData.append("aboutus_experience",$('#aboutus_experience').val())
		formData.append("aboutus_project_complete",$('#aboutus_project_complete').val())
		formData.append("aboutus_workers",$('#aboutus_workers').val())
		formData.append("aboutus_title",$('#aboutus_title').val())
		formData.append("aboutus_subtitle",$('#aboutus_subtitle').val())
		formData.append("aboutus_description",$('#aboutus_description').val())
		formData.append("aboutus_award",$('#aboutus_award').val())
		formData.append("aboutus_image",document.getElementById("aboutus_image").files[0])

		formData.append("ouradvantedge_title",$('#advantedge_title').val())
		formData.append("ouradvantedge_subtitle",$('#advantedge_subtitle').val())
		formData.append("ouradvantedge_item1_icon",document.getElementById("advantedge_item1_image").files[0])
		formData.append("ouradvantedge_item1_title",$('#advantedge_item1_title').val())
		formData.append("ouradvantedge_item1_description",$('#advantedge_item1_description').val())
		formData.append("ouradvantedge_item2_icon",document.getElementById("advantedge_item2_image").files[0])
		formData.append("ouradvantedge_item2_title",$('#advantedge_item2_title').val())
		formData.append("ouradvantedge_item2_description",$('#advantedge_item2_description').val())
		formData.append("ouradvantedge_item3_icon",document.getElementById("advantedge_item3_image").files[0])
		formData.append("ouradvantedge_item3_title",$('#advantedge_item3_title').val())
		formData.append("ouradvantedge_item3_description",$('#advantedge_item3_description').val())
		
		formData.append("ourproject_title",$('#ourproject_title').val())
		formData.append("ourproject_subtitle",$('#ourproject_title').val())

		formData.append("testimonial_title",$('#testimonial_title').val())
		formData.append("testimonial_subtitle",$('#testimonial_subtitle').val())
		return formData 		
	}
}

export default beranda;