var MarkdownIt = require('markdown-it')
import ContentData from '../../data/ContentData';
import UrlParser from '../../routes/url-parser';
import accessImage from '../../tools/accessImage';
import sidebar from '../components/layouts/sidebar';
const blog_detail = {
	async init(){
		this.id = UrlParser.parseActiveUrlWithoutCombiner().id;
		let md = new MarkdownIt()
		this.API = new ContentData();
		this.data = await this.API.requestGET({ request : `cms/content/blog/${this.id}`})
		this.data = this.data[0];
		console.log(this.id)

		return `
			${await sidebar.init()}
			<section class="w-full h-auto flex flex-col px-[8%] mt-[80px] ">
		      <div class="w-full m-auto flex md:flex-row flex-col 2xl:max-w-[1366px] 2xl:m-auto">
		      	<div id="blog_detail" class="w-full lg:w-4/6 min-h-[100vh] lg:border-r-2 border-b-2 border-gray-100 lg:py-4 lg:pr-2">
		      		<h1>${this.data.title}</h1>
		      		<span class="text-[13px] md:text-[14px] text-gray-800">${this.data.date} - PT. Restu Agung Narogong</span>
		      		<img src="icons/loading.gif" data-src="${accessImage.set(this.data.image)}" class="lazyload w-full h-[200px] md:h-[300px] object-cover mt-4">
		      		${md.render(this.data.description)}

		      	</div>
		      	<div class="w-full lg:w-2/6 max-h-[100vh] flex-col py-4 gap-4 px-4 flex">
		      		<span class="text-[17px] font-semibold"> Blog Terbaru </span>
		      		${await this.listProcess()}
		      		<a href="#/blog" class="text-[15px] text-center capitalize bg-red-600 py-2 text-white">Semua Blog</a>
		      	</div>

		      </div>
		    </section>
		`;
	},

	afterRender(){
		return "";
	},
	async listProcess(){
	    let html = "";
	    let loop = 0;
	    this.dataList = await this.API.getContent({page : "blog"})
    	this.maxlist = 5;
	    this.dataList.items.forEach((e)=>{
	      if(loop < this.maxlist){
	        html += `<a href="#/blog/${e.id}" class="border-b border-gray-50 rounded-md p-2 flex">
			      		<img src="icons/loading.gif" data-src="${accessImage.set(e.image)}" class="lazyload w-[50px] h-[50px] object-cover mr-4">
		      			<div class="w-5/6 flex flex-col">
		      			<span class="text-[15px] font-semibold truncate">${e.title}</span>
		      			<span class="text-[12px]">${e.date} - PT. Restu Agung Narogong</span>
		      			</div>
		      		</a>`        
	      }
	      loop += 1
	    });
	    return html;
	}
}

export default blog_detail;