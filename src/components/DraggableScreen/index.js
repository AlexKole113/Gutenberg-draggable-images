const { Component } = wp.element;


class DraggableScreen extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			startDrag: false,
			currentDraggableNumberItem: null,
			currentCoordsOnItem:[]
		}

		this.dragStart = this.dragStart.bind(this)
		this.dragStop = this.dragStop.bind(this)
		this.mouseMovement = this.mouseMovement.bind(this)
	}

	dragStart( e ) {
		if(!e.target.hasAttribute('data-item') ) return;
		this.setState({
			startDrag: true,
			currentDraggableNumberItem: e.target.getAttribute('data-item'),
			currentCoordsOnItem:[ e.nativeEvent.offsetX, e.nativeEvent.offsetY ]
		})
	}

	dragStop( e ) {
		this.setState({
			startDrag: false,
			currentDraggableNumberItem: null
		})
	}

	mouseMovement( e ) {
		const { startDrag, currentDraggableNumberItem, currentCoordsOnItem } = this.state;
		if( !startDrag || !currentDraggableNumberItem ) return;

		const { notices, setItemsCoords } = this.props;
		const { offsetX, offsetY } = e.nativeEvent;

		notices[currentDraggableNumberItem]['coordX'] = offsetX - currentCoordsOnItem[0];
		notices[currentDraggableNumberItem]['coordY'] = offsetY - currentCoordsOnItem[1];
		setItemsCoords({
			notices: [...notices]
		})
	}

	render(){
		const { children } = this.props;
		const { startDrag } = this.state
		return(<div
					onMouseDown={ this.dragStart }
					onMouseUp={ this.dragStop }
					onMouseMove={ this.mouseMovement }
					className={`gutenberg-draggable-images__notices ${ (startDrag) ? 'in-draggable' : '' } `}
				>
					{children}
					{ startDrag && (
						<div style={{ position: 'absolute', background:"transparent", top:'0', right:0, bottom:0, left:'0', zIndex: 999999 }}/>
					)}
				</div>)
	}

}


export {DraggableScreen};
