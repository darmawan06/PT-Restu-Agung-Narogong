const fs = require("fs");

module.exports = {

	getDataJSON({dir}){
		let result;
		try {
			const jsonString = fs.readFileSync(dir);
			result = JSON.parse(jsonString);
		} catch (err) {
		  // console.log(err);
		  return;
		}
		return result; // => "Infinity Loop Drive"
	},

	setDataJSON({dir,data}){
		const jsonString = JSON.stringify(data)
		fs.writeFile(dir, jsonString, err => {
		    if (err) {
		        // console.log('Error writing file', err)
		    } else {
		        // console.log('Successfully wrote file')
		    }
		})
	}
}
