const getDataUser = {

	async getAll(){
		this.data = {};
		let ip = await $.getJSON('https://api.ipify.org/?format=json')
		await $.getJSON(`https://ipapi.co/${ip.ip}/json/`,async (data)=> {
			console.log(navigator.platform)
        	this.data = {
        		ip_address : data.ip,
        		country : data.country_name,
        		regionName : data.region,
        		city : data.city,
        		isp : data.org,
        		device : navigator.platform,
        		date : new Date().toString()
        	};
        })
		return this.data
	}
}

export default getDataUser;