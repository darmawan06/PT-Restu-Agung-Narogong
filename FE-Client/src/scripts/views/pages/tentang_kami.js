var MarkdownIt = require('markdown-it')
import ContentData from '../../data/ContentData';
import accessImage from '../../tools/accessImage';
import sidebar from '../components/layouts/sidebar';
const tentang_kami = {
	async init(){
		const md = new MarkdownIt()
	    this.contentData = new ContentData();
	    this.data = await this.contentData.getContent({page : "about"})
		return `
			${await sidebar.init()}
			 <section class="w-full h-[380px] bg-gray-50 flex flex-col px-[8%] md:mt-[80px] ">
		      <div class="w-full m-auto flex-col 2xl:max-w-[1366px] 2xl:m-auto">
		        <p class="text-[30px] md:text-[50px] font-primary text-white text-center tracking-wider text-black font-[500]">${this.data.title}</p>
		        <div class="w-full h-[2px] relative my-2">
		          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
		          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
		        </div>
		        
		      </div>
		    </section>
		    <section class="w-full h-[50px] bg-red-600">
		      <div class="2xl:max-w-[1366px] 2xl:m-auto 2xl:px-0  w-full flex px-[8%] h-full">
		        <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
		          <p class="my-auto md:text-sm text-[2.2vw]">PT. Restu Agung Narogong</p>
		          <div class="ml-5 w-[2px] bg-white h-full rotate-[25deg]"></div>
		        </a>
		        <a href="#" class="my-auto p-2 h-full text-white font-primary tracking-wider flex">
		          <p class="my-auto md:text-sm text-[2.2vw]">${this.data.title}</p>
		        </a>
		      </div>
		    </section>

		    <section class="w-full md:h-[60vh] flex md:flex-row flex-col px-[8%] py-4 2xl:max-w-[1366px] 2xl:m-auto 2xl:px-0 2xl:h-[600px]">
		    	<div class="md:w-2/4 w-full h-full flex m-auto">
		    		<img src="icons/loading.gif" data-src="${accessImage.set(this.data.logo)}" class="lazyload m-auto md:h-[80%] md:w-auto w-[60%]">
		    	</div>
		    	<div class="md:w-2/4 w-full h-full flex mt-4 md:mt-0">
		    		<div class="my-auto">
			    		<h4 class="text-xl font-primary  mb-4 font-[500]">${this.data.profile.title}</h4>
			    		<p class="text-[13px] md:text-[15px] break-word text-justify">
				    		${this.data.profile.description}
			    		</p>
		    		</div>
		    	</div>
		    </section>
		    <section class="w-full min-h-[50vh] flex flex-col px-[8%] py-4 2xl:max-w-[1366px] 2xl:m-auto 2xl:px-0 2xl:min-h-[500px]">
		    	<div class="mx-auto w-full">
			    	<h4 class="text-center text-[20px] font-primary  mx-auto font-[500] tracking-wider">${this.data.vision_mission.title}</h4>
			    	<div class="w-full h-[2px] relative my-2">
			          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
			          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
			        </div>
		    	</div>
		    	<div class="grid grid-cols-1 md:grid-cols-2 h-full gap-8">
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-center text-[18px] font-primary	  mx-auto tracking-wider font-[500]">${this.data.vision_mission.vision.subtitle}</h5>
		    			<ul class="mt-4 gap-2 grid-cols grid md:text-[15px] text-[13px] text-justify">
		    				${this.data.vision_mission.vision.items.join("<li>")}
		    			</ul>
		    		</div>
		    		<div class="flex flex-col mt-4">
		    			<h5 class="text-center text-[18px] font-primary	  mx-auto tracking-wider font-[500]">${this.data.vision_mission.mission.subtitle}</h5>
		    			<ul class="mt-4 gap-2 grid-cols grid md:text-[15px] text-[13px] text-justify">
		    				${this.data.vision_mission.mission.items.join("<li>")}
		    			</ul>
		    		</div>
		    	</div>
		    </section>
		    <section class="w-full flex flex-col px-[8%] py-4 2xl:max-w-[1366px] 2xl:m-auto 2xl:px-0">
		    	<div class="mx-auto w-full">
			    	<h4 class="text-center text-[20px] font-primary  mx-auto font-[500] tracking-wider">${this.data.structure.title}</h4>
			    	<div class="w-full h-[2px] relative my-2">
			          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
			          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
			        </div>
		    	</div>
		    	<div class="w-full h-full p-4">
		    		<img src="icons/loading.gif" data-src="${accessImage.set(this.data.structure.image)}" class="lazyload m-auto w-full md:w-[80%] bg-red-600">
		    	</div>
		    </section>
		    <section class="w-full h-auto flex flex-col px-[8%] p-4 2xl:max-w-[1366px] 2xl:m-auto 2xl:px-0">
		    	<div class="mx-auto w-full">
			    	<h4 class="text-center text-[20px] font-primary  mx-auto font-[500] tracking-wider">${this.data.company_policy.title}</h4>
			    	<div class="w-full h-[2px] relative my-2">
			          <div class="w-[100px] absolute mx-auto h-full bg-red-600 z-10 top-0 left-0 right-0"></div>
			          <div class="w-full absolute mx-auto h-full bg-gray-200 top-0 left-0 right-0"></div>
			        </div>
		    	</div>
		    	<div class="grid grid-cols-1 h-full gap-4 md:p-5">
			    	<div class="tentang-kami-markdown text-[13px] md:text-[15px] break-word" style="white-space: pre-line">
			    		<h5 class="text-[18px] font-primary mx-auto my-2 font-[500] tracking-wider">${this.data.company_policy.quality.subtitle}</h5>
			    		${md.render(this.data.company_policy.quality.description)}
			    		<h5 class="text-[18px] font-primary mx-auto my-2 font-[500] tracking-wider">${this.data.company_policy.k3.subtitle}</h5>
			    		${md.render(this.data.company_policy.k3.description)}
			    		<h5 class="text-[18px] font-primary mx-auto my-2 font-[500] tracking-wider">${this.data.company_policy.drugs.subtitle}</h5>
			    		${md.render(this.data.company_policy.drugs.description)}

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