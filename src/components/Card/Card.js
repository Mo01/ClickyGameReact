import React from 'react';
import './Card.css';

const divStyle = {
	margin: '40px',
	border: '5px solid red'
};
const Card = (props) => (
	<div className="card" id={props.id} onClick={() => props.clickCount(props.id)}>
		<div style={divStyle} className="img-container">
			<img src={props.image} />
		</div>
	</div>
);

export default Card;
