import React from 'react';
import ToolTip from './ToolTip';
import PrimaryCarSelector from './PrimaryCarSelector';
import * as Chevron from 'react-icons/bs';
import * as Times from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { typesActions } from '../store/types-slice';

function PrimaryCarSelectors({ vehicles }) {
  const dispatch = useDispatch();

  const selectedSecondaryTypes = useSelector(
    (state) => state.typeStorage.selectedSecondaryTypes
  );
  const isMoreSelected = useSelector(
    (state) => state.typeStorage.isMoreSelected
  );

  return (
    <div className='car-filter__primary-wrapper'>
      {vehicles.map((el) => {
        return el.priority ? (
          /* TOOLTIP STYLES IN APP.CSS! */
          <ToolTip
            content={'$' + el.startingPrice + '+'}
            direction='top'
            key={el.type}
          >
            <PrimaryCarSelector el={el} />
          </ToolTip>
        ) : null;
      })}
      <div
        className={
          isMoreSelected || selectedSecondaryTypes.length > 0
            ? 'car-filter__primary-selector more active'
            : 'car-filter__primary-selector more'
        }
        onClick={() => {
          dispatch(typesActions.isMoreSelectedToggler());
        }}
      >
        <div className='car-filter__selector-text'>
          <p>More</p>
          <div className={'car-filter__secondary-details'}>
            {selectedSecondaryTypes.length === 1
              ? selectedSecondaryTypes[0]
              : selectedSecondaryTypes.length === 0
              ? ''
              : selectedSecondaryTypes.length + ' selected'}
          </div>
        </div>

        {selectedSecondaryTypes.length > 0 ? (
          <div
            onClick={() => {
              dispatch(typesActions.resetSelectedStorageHandler('secondary'));
              dispatch(typesActions.isMoreSelectedToggler());
            }}
          >
            <Times.FaTimes color='#fafafa' size={14} />
          </div>
        ) : (
          <div
            className={
              isMoreSelected
                ? 'car-filter__selecor-icon active'
                : 'car-filter__selecor-icon'
            }
          >
            <Chevron.BsChevronUp color='#9ba8b0' size={14} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PrimaryCarSelectors;
