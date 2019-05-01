import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Cards extends Component {

    render() {
        

        // console.log("Cards.js: ", this.props.Cards)
        return this.props.Cards.map((card) => (
            <div key={card.id}>
       
        <img src={ card.title}alt="boohoo"
 className="img-responsive"/>
       
      </div>
           
        ));
    }
   
}
//PropTypes
  Cards.propTypes ={
    Cards: PropTypes.array.isRequired
   }
export default Cards;
