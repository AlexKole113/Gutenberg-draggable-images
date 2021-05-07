const unitMap = ( num , { unit , containerHeight, containerWidth } ) => {

	num = parseFloat(num);

	switch ( unit ) {

		case 'coordX':
			if( !containerWidth ) throw new Error( `need container width ${unit}` );
			return `${ num  / containerWidth * 100 }%`;
		case 'coordY':
			if( !containerHeight ) throw new Error( `need container height ${unit}` );
			return `${ num / containerHeight * 100 }%`;
		case 'containerHeight':
			return `${ num / window.innerWidth * 100 }vw`;
		case 'containerWidth':
			return `${ num / window.innerWidth * 100 }vw`;
		case 'imageWidth':
			if( !containerWidth ) throw new Error( `need container width for ${unit}` );
			return `${ num / containerWidth * 100 }%`;
		case 'minHeight':
			return `${num}px`
	}

	throw new Error( 'unknown unit' );
}

export {unitMap}
