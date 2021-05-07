const  checkMimeType = ( mimeType ) => {
	if ( mimeType.indexOf('vide') === 0 ) return 'video'
	if ( mimeType.indexOf('image') === 0 ) return 'image'
}


export {checkMimeType};
