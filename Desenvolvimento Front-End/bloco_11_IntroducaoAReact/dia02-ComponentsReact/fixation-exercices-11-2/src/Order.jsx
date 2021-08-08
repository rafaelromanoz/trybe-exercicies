// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price,doidera} = this.props.order;

    return (
      <div className="order">
        <p> {doidera} for </p>
      </div>
    );
  }
}

export default Order;