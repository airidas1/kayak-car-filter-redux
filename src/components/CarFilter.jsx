import { useEffect } from 'react';
import PrimaryCarSelectors from './PrimaryCarSelectors';
import SecondaryCarSelectors from './SecondaryCarSelectors';

import { useSelector, useDispatch } from 'react-redux';
import { fetchStorageData } from '../store/types-actions';
import { typesActions } from '../store/types-slice';

function CarFilter() {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.typeStorage);

  const selectedPrimaryTypes = useSelector(
    (state) => state.typeStorage.selectedPrimaryTypes
  );
  const selectedSecondaryTypes = useSelector(
    (state) => state.typeStorage.selectedSecondaryTypes
  );

  useEffect(() => {
    dispatch(fetchStorageData());
  }, [dispatch]);

  return (
    <div className='car-filter'>
      <div className='car-filter__header'>
        <p className='car-filter__title'>Car type</p>
        {selectedSecondaryTypes.length > 0 ||
        selectedPrimaryTypes.length > 0 ? (
          <p
            className='car-filter__reset'
            onClick={() => {
              dispatch(typesActions.resetSelectedStorageHandler('all'));
              dispatch(typesActions.closeMoreSelected());
            }}
          >
            Reset
          </p>
        ) : null}
      </div>
      <div className='car-filter__filters'>
        <div className='car-filter__filters-list'>
          <PrimaryCarSelectors vehicles={types.primaryTypes} />
          <SecondaryCarSelectors vehicles={types.secondaryTypes} />
        </div>
      </div>
    </div>
  );
}

export default CarFilter;
