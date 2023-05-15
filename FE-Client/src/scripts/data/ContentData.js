import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getContent({page = "home"}){
		return await this.requestGET({
			request : `cms/content/${page}`,
		})
	}

	async getFeedback(){
		return await this.requestGET({
			request : `feedback`,
		})
	}
}

export default ContentData;