import React from 'react';
import * as Icon from 'react-icons/fi';
import Checkbox from 'react-custom-checkbox';

import { useSelector, useDispatch } from 'react-redux';
import { typesActions } from '../store/types-slice';

function SecondaryCarSelector({ el }) {
  const dispatch = useDispatch();
  const selectedSecondaryTypes = useSelector(
    (state) => state.typeStorage.selectedSecondaryTypes
  );
  return (
    <div
      className='car-filter__secondary-item'
      onClick={() => {
        dispatch(
          typesActions.selectedStorageHandler({
            value: el.type,
            secondary: el.secondary,
          })
        );
      }}
    >
      <div className='car-filter__secondary-body__left'>
        <Checkbox
          icon={<Icon.FiCheck color='#0080a4' size={14} />}
          name={`${el.type}-input`}
          checked={selectedSecondaryTypes.includes(el.type) ? true : false}
          borderColor='#9ba8b0'
          borderWidth='1px'
        />
        <img src={el.img} alt='' />
        <p>{el.type}</p>
      </div>
      <div className='car-filter__secondary-body__right'>
        <p>${el.startingPrice}+</p>
      </div>
    </div>
  );
}

export default SecondaryCarSelector;
