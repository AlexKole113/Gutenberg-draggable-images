const unitMap = ( num , unit ) => {
	switch ( unit ) {
		case 'coords':
			return `${num}px`;
		case 'blockHeight':
			return `${num}px`;
		case 'imageWidth':
			return `${num}px`;
	}

	throw new Error( 'unknown unit' );
}

export {unitMap}
