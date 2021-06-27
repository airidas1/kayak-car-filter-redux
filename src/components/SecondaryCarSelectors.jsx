import React, { useRef, useEffect } from 'react';
import SecondaryCarSelector from './SecondaryCarSelector';
import { useSelector, useDispatch } from 'react-redux';
import { typesActions } from '../store/types-slice';

function SecondaryCarSelectors(props) {
  const dispatch = useDispatch();
  const node = useRef();

  const isSelectorShown = useSelector(
    (state) => state.typeStorage.isMoreSelected
  );

  useEffect(() => {
    // add when mounted
    document.addEventListener('click', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const handleClick = (e) => {
    if (node.current.contains(e.target) || !isSelectorShown) {
      return;
    }
    dispatch(typesActions.closeMoreSelected());
  };

  return (
    <div
      className={
        isSelectorShown
          ? 'car-filter__secondary-selector'
          : 'car-filter__secondary-selector disabled'
      }
      ref={node}
    >
      <div className='car-filter__secondary-inner'>
        {props.vehicles.map((el) => {
          return !el.priority ? (
            <div className='car-filter__secondary-wrapper' key={el.type}>
              <SecondaryCarSelector el={el} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default SecondaryCarSelectors;
