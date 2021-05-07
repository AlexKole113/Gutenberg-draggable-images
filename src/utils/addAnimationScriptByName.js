import {FadeIn} from "../components/AnimationSelect/animations/FadeIn";
import {Scale} from "../components/AnimationSelect/animations/Scale";


const addAnimationScriptByName = ( animationName ) => {

	switch ( animationName ) {
		case 'fadeIn':
			return <FadeIn />
		case 'scale':
			return <Scale />
	}
}

export {addAnimationScriptByName}
