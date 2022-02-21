const { trim } = require('lodash');
//const fs = require('fs');
const fse = require('fs-extra');


function enableCustomFieldRenderer() {
	/*
	const fileToModify = `${process.cwd()}/node_modules/@strapi/admin/admin/src/content-manager/components/Inputs/index.js`;

	if (fs.existsSync(fileToModify)) {
		console.log('OOKKKKKKKKKKKK')
	}*/

	const srcDir = `./.scripts/admin`;
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



module.exports = enableCustomFieldRenderer;