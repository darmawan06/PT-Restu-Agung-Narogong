class APIConfig {
	baseUrl = "";

	constructor(){
        // this.baseUrl = 'http://localhost:3000'
        this.baseUrl = 'https://gateway.restuagungnarogong.com'
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
      return await fetch(`${this.baseUrlAPI}/${request}`, {method: "POST", body: data}).then((response,status)=>{
            return (status !== 'error') ? response : status;
      })
    }
    
    getBaseUrl(){
        return this.baseUrl;
    }

}


export default APIConfig;