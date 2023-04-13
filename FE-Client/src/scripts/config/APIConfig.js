class APIConfig {
	baseUrl = "";

	constructor(){
        this.baseUrl = "http://localhost:3000";
		this.baseUrlAPI = `${this.baseUrl}/api`
	}

	async requestGET({request}) {
        return await $.ajax({
            type: "GET",
            url: `${this.baseUrlAPI}/${request}`,
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

    async requestPOST({request,data}) {
        $.post(`${this.baseUrlAPI}/${request}`,data)
    }

    getBaseUrl(){
        return this.baseUrl;
    }

}


export default APIConfig;