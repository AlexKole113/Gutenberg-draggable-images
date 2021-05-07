
const AnimationSelect = ( { selectedAnimation , setAnimation } ) => {

	const animationsCollection = [
		{ name:'Fade In', value:'fadeIn' },
		{ name:'Scale', value:'scale' }
	];

	const options = animationsCollection.map( ({name,value}) => {
		if( value === selectedAnimation ) {
			return(<option selected value={value}>{name}</option>)
		}
		return(<option value={value}>{name}</option>)
	});

	return(
		<select onChange={ (e) => { setAnimation(e) } }>
			<option value="">none</option>
			{options}
		</select>
	);

}


export {AnimationSelect}
