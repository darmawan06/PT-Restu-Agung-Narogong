import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getHome(){
		return await this.requestGET({
			request : "cms/content/home",
		})
	}
}

export default ContentData;