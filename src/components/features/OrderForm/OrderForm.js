import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({tripCost, options, setOrderOption}) => {
  const optionPrice = pricing.map(option =>
    (<Col md={4} key={option.id}>
      <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}>
      </OrderOption>
    </Col>
    )
  );
  return (
    <Row>
      {optionPrice}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}>

        </OrderSummary>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
