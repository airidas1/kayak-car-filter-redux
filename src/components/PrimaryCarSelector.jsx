import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { typesActions } from '../store/types-slice';

function PrimaryCarSelectorButton(props) {
  const dispatch = useDispatch();
  const selectedPrimaryTypes = useSelector(
    (state) => state.typeStorage.selectedPrimaryTypes
  );

  return (
    <div
      onClick={() => {
        dispatch(
          typesActions.selectedStorageHandler({
            value: props.el.type,
            primary: props.el.primary,
          })
        );
      }}
      className={
        selectedPrimaryTypes.includes(props.el.type)
          ? 'car-filter__primary-selector active'
          : 'car-filter__primary-selector'
      }
    >
      <img src={props.el.img} alt={props.el.altImg} />
      <div className='car-filter__vehicle-type'>
        <p className='car-filter__selector-p'>{props.el.type}</p>
      </div>
    </div>
  );
}

export default PrimaryCarSelectorButton;
