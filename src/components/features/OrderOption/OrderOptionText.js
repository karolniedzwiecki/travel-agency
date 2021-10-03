import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}>
    </input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;
