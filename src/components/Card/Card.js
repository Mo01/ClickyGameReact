import React from 'react';
import './Card.css';

const divStyle = {};
const Card = (props) => (
	<div className="card" id={props.id} onClick={() => props.clickCount(props.id)}>
		<div style={divStyle} className="img-container">
			<img src={props.image} />
		</div>
	</div>
);

export default Card;
