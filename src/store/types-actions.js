import { typesActions } from './types-slice';

export const fetchStorageData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('./VehicleCats.json');

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const typeData = await fetchData();
      dispatch(
        typesActions.replaceStorage({
          types: typeData.types,
          primary: typeData.types.filter((item) => item.primary),
          secondary: typeData.types.filter((item) => item.secondary),
        })
      );
    } catch (error) {
      dispatch(
        typesActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};
