(function (){
	window.addEventListener('load',() => {

		const elements = document.querySelectorAll('[data-animation]');
		const elmsWithAnimationName = Array.from( elements ).map((item) =>
			[item, item.dataset.animation]
		)
		const visibilityScreenZone = {
			min: .2,
			max: .8
		}

		if( elmsWithAnimationName.length ){
			elmsWithAnimationName.forEach(( [item, animationName]) => {
				item.classList.add(`${animationName}-animation-hidden`)
			})

			window.addEventListener('scroll', ()=> {
				elmsWithAnimationName.forEach(( [item, animationName]) => {
					if( item.getBoundingClientRect().top < window.innerHeight * visibilityScreenZone.max  &&
						item.getBoundingClientRect().top > window.innerHeight * visibilityScreenZone.min
					) {
						if(item.classList.contains(`${animationName}-animation-hidden`)){
							item.classList.remove(`${animationName}-animation-hidden`);
							item.classList.add(`${animationName}-animation-visible`)
						}
					} else {
						if(item.classList.contains(`${animationName}-animation-visible`)){
							item.classList.remove(`${animationName}-animation-visible`);
							item.classList.add(`${animationName}-animation-hidden`)
						}
					}
				})
			})
		}

	})
})()
