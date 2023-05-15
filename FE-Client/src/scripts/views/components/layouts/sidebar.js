import ContentData from '../../../data/ContentData';
const sidebar = {
	async init(){
		this.contentData = new ContentData()
		this.dataContact = await this.contentData.getContent({page : "contact"})
	    let whatsapp = this.dataContact.whatsapp.split("")
	    whatsapp.shift()
	    whatsapp = whatsapp.join('')
			// <a href="https://wa.me/62${whatsapp}" target="_blank" class="w-full my-auto"><img src="icons/whatsapp.png" class="w-full"></a>
			// <a href="${this.dataContact.link_instagram}" target="_blank" class="w-full my-auto"><img src="icons/instagram.png" class="w-full"></a>
			// <a href="${this.dataContact.link_youtube}" target="_blank" class="w-full my-auto"><img src="icons/youtube.png" class="w-full"></a>
			// <a href="#/testimoni" class="w-full my-auto">Testimoni</a>
		return `
		<div class="fixed w-[65px] h-[200px] top-[55%] z-[200] -translate-y-[50%] flex flex-col p-2 right-4 gap-4">
			<div class="flex flex-col gap-4">
					<button class="bg-red-600 p-2 rounded-md"><img src="icons/youtube.png"></button>
					<button class="bg-gray-100 p-2 rounded-md"><img src="icons/linkedin.png"></button>
					<button class="bg-green-600 p-2 rounded-md"><img src="icons/whatsapp.png"></button>
					<button class="bg-gray-500 p-2 rounded-md"><img src="icons/sms-tracking.png"></button>
			</div>
			<button class="bg-red-600 p-2 rounded-md"><img src="icons/messages.png"></button>

		</div>

		`;
	},

	afterRender(){
		return "";
	}
}

export default sidebar;