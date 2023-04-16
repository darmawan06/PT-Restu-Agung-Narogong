import sidebar from '../../../components/layouts/sidebar';
import ContentData from '../../../../data/ContentData';
import accessImage from '../../../../tools/accessImage';
const galery = {
	async init(){
	    this.API = new ContentData();
	    this.data = await this.API.getContent({page : "galery"})
	    console.log(this.data)
		return `
			<section class="w-[20%] fixed">
				${sidebar.init()}
			</section>
			<section class="w-[80%] ml-auto">
				<h1 class="text-[24px] font-semibold tracking-wider text-center py-4">Galery Management</h1>
				<div class="my-4 flex px-[8%] bg-gray-200 py-2">
					<form id="form" class="flex flex-col w-full"  method="POST" enctype="multipart/form-data" action="">
						<div class="flex text-sm gap-2 justify-content">
							<label class="my-auto">Upload Gambar :</label>
							<input class="my-auto" type="file" required id="image" accept="image/jpeg, image/png">
							<input type="submit" id="submit" value="Submit" class="ml-auto bg-red-600 text-white p-2 cursor-pointer rounded-md">
						</div>
					</form>
				</div>
				<div class="w-full px-[8%] py-4">
			      <ul class="masonry-container columns-2 md:columns-3">
			        ${this.listProcessImage()}
			      </ul>
			    </div>
			</section>
		`
	},

	afterRender(){
		sidebar.afterRender()
		this.create();
		this.delete();
		return "";
	},

	listProcessImage(){
	  	let html = "";
	  	this.data.reverse().forEach((e)=>{
	  		html += `<li class="masonry-item relative">
			        	<img src="icons/loading.gif" data-src="${accessImage.set(e.src)}"  class="lazyload shadow-md " >
			        	<div class="remove-image text-red-600 absolute top-0 right-2 p-2 font-bold text-xl cursor-pointer" data-role="${e.id}">X</div>
			        </li>`
	  	});

	  	return html;
	},

	create(){

		let data = ()=>{
			let formData = new FormData()
			formData.append("image",document.getElementById("image").files[0])
			return formData 		
		}

		let submit = ()=>{
			$('#form').submit(async (e)=>{
		      e.preventDefault()
  		      $('#submit').prop('disabled', true);
		      await this.API.requestPOST({
		        request : 'cms/content/galery',
		        data : data()
		      }).then((e)=>{
		      	if(e.status == 200){
			      $('#submit').prop('disabled', false);	      
		          window.location.reload()
		        }
				$('#submit').attr('value', 'Submit');
		      })
		    })
		}
		submit();
	},

	delete(){
		let data = (id)=>{
			let formData = new FormData()
			formData.append("id",id);
			return formData 
		}

		let submit = async (id)=>{
			await this.API.requestPOST({
				request : 'cms/content/galery/remove',
				data : data(id)
			}).then((e)=>{
	      		if(e.status == 200){
	          		window.location.reload()
	       		}
			})
		}

		$('.remove-image').on('click',async (e)=>{
 			let id = e.target.dataset.role;
			submit(id);

		})
	}
}

export default galery;