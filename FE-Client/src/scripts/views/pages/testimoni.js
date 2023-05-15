import ContentData from '../../data/ContentData';
const sidebar = {
	async init(){
		this.API = new ContentData()

		return `
			<section class="w-full h-[600px] md:h-[700px] flex bg-red-600 flex-col px-[8%] md:mt-[80px] flex">
				<div class="w-full min-h-[300px] md:w-[30%] md:min-h-[300px] bg-gray-50 m-auto flex flex-col p-4  rounded-md shadow-md">
					<span class="w-full text-center font-primary text-[15px] md:text-[18px] text-red-600 font-[500]">Testimoni</span>
					<hr class="mt-2"></hr>
					<form id="form" method="POST" action="" class="gap-2 w-full h-full flex flex-col mt-4 font-secondary text-[10px] md:text-[13px]">
						<input type="text" placeholder="Nama Lengkap" class="p-2 shadow-md" id="name" required>
						<input type="text" placeholder="Email" class="p-2 shadow-md" id="email" required>
						<textarea placeholder="Pesan" class="p-2 shadow-md max-h-[180px] h-[100px]" id="description" required></textarea>
						<input required type="text" name="rating" class="rating hidden"  value="4" id="rating" required />
						<div class="w-full mx-auto flex flex-col">
							<div class="mx-auto flex my-[2px] text-gray-400">
								<span class=" text-red-600 testimoni-star text-[18px] cursor-pointer">★</span>
								<span class=" text-red-600 testimoni-star text-[18px] cursor-pointer">★</span>
								<span class=" text-red-600 testimoni-star text-[18px] cursor-pointer">★</span>
								<span class=" text-red-600 testimoni-star text-[18px] cursor-pointer">★</span>
								<span class=" testimoni-star text-[18px] cursor-pointer">★</span>
							</div>
						</div>
						<input type="submit" id="submit" class="mt-2 bg-green-500 p-2 shadow-md text-white font-secondary font-semibold">
					</form>
				</div>
			</section>
		`;
	},

	afterRender(){
		this.testimoniStar()
		this.create()
		return "";
	},
	testimoniStar(){
		$('.testimoni-star').each((e)=>{
			$('.testimoni-star')[e].addEventListener('click',(x)=>{
				x.target.classList.toggle('text-red-600')
				$('.rating').val(e+1);
				for (var i = 0; i < e+1; i++) {
					$('.testimoni-star')[i].classList.add('text-red-600')
				}
				for (var i = e+1; i < 5; i++) {
					$('.testimoni-star')[i].classList.remove('text-red-600')
				}
			})
		})
	},

	create(){
		let data = ()=>{
			let formData = new FormData()
			formData.append("name", $('#name').val())
			formData.append("email", $('#email').val())
			formData.append("description", $('#description').val())
			formData.append("rating", $('#rating').val())
			return formData 		
		}

		let submit = ()=>{
			$('#form').submit(async (e)=>{
		      e.preventDefault()
		      $('#submit').attr('value', 'Process');
  		      $('#submit').prop('disabled', true);
		      await this.API.requestPOST({
		        request : 'feedback',
		        data : data()
		      }).then((e)=>{
		      	if(e.status == 200){
			      $('#submit').prop('disabled', false);	      
		          window.location.reload()
		        }
				$('#submit').attr('value', 'Tambah');
		      })
		    })
		}
		submit();
	},
}

export default sidebar;