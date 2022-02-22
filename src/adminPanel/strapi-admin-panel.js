const { trim } = require('lodash');
const fse = require('fs-extra');


function strapiAdminPanel() {
	
	const srcDir = `./src/adminPanel/admin`;
	const destDir = `${process.cwd()}/node_modules/@strapi/admin/admin`;
	// To copy a folder or file  
	fse.copySync(srcDir, destDir,{ overwrite: true }, function (err) {
		if (err) {                 
			console.error(err);
		} else {
			console.log("success!");
		}
	});


}



module.exports = strapiAdminPanel;