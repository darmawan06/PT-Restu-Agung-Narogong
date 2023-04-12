class APIConfig {
    baseUrl = "";

    constructor(){
        this.baseUrl = 'http://localhost:3000'
        this.baseUrlAPI = `${this.baseUrl}/api`
    }

    getBaseUrl(){
        return this.baseUrl;
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

    async requestPOSTWithoutForm({request,data}) {
      return await $.ajax({
            method: "POST",
            url: `${this.baseUrlAPI}/${request}`,
            data : data,
            cache: false,
            contentType: false,
            processData: false,
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

}

module.exports = APIConfig;