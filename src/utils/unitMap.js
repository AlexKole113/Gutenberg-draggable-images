const unitMap = ( num , unit ) => {

	switch ( unit ) {
		case 'coordX':
			return `${ num }px`;
		case 'coordY':
			return `${ num }px`;
		case 'containerHeight':
			return `${ num }px`;
		case 'containerWidth':
			return `${ num }px`;
		case 'imageWidth':
			return `${ num }px`;
	}

	throw new Error( 'unknown unit' );
}

export {unitMap}
