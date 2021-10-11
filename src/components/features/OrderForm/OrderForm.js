import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};


const OrderForm = ({tripCost, options, setOrderOption, countryCode, tripName, tripId}) => {
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
      <Button onClick={() => {options.name!='' && options.contact !='' ? sendOrder(options, tripCost, tripName, tripId, countryCode) : alert('Please enter your contact data');}}>Order now!</Button>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
  countryCode: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
};

export default OrderForm;
