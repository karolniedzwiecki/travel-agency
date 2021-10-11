import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({tripCost, options}) => {
  const price = calculateTotal(formatPrice(tripCost), options);

  return (
    <h2 className={styles.component}>
      Total:
      <strong>
       ${price}
      </strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  days: PropTypes.number,
};

export default OrderSummary;
