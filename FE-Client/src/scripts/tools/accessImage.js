import APIConfig from '../config/APIConfig';

const accessImage = {

	set(src){
		let apiConfig = new APIConfig()
		const base_url = apiConfig.getBaseUrl();
		return base_url + src

	}
}


export default accessImage;