import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getContent({page = "home"}){
		return await this.requestGET({
			request : `cms/content/${page}`,
		})
	}
}

export default ContentData;