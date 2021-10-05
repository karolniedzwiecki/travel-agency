import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (

  <div
    className={styles.component}>
    {!required ? '' : (
      <div
        className={styles.icon}
        value = ''
        onClick={() => setOptionValue('')}
      >
        <Icon name={'times-circle'}>
          none
        </Icon>
      </div>
    )}
    {values.map(value => (
      <div
        className={currentValue == value.id ? styles.iconActive : styles.icon}
        key={value.id} value=''
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}>
          {value.name}
        ({formatPrice(value.price)})
        </Icon>
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;
