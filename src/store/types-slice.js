import { createSlice } from '@reduxjs/toolkit';

const typesSlice = createSlice({
  name: 'types',
  initialState: {
    allTypes: [],
    primaryTypes: [],
    secondaryTypes: [],
    selectedPrimaryTypes: [],
    selectedSecondaryTypes: [],
    isMoreSelected: false,
  },
  reducers: {
    resetSelectedStorageHandler(state, action) {
      if (action.payload === 'secondary') {
        state.selectedSecondaryTypes = [];
      } else {
        state.selectedPrimaryTypes = [];
        state.selectedSecondaryTypes = [];
        state.isMoreSelected = false;
      }
    },
    replaceStorage(state, action) {
      state.allTypes = action.payload.types;
      state.primaryTypes = action.payload.primary;
      state.secondaryTypes = action.payload.secondary;
    },
    selectedStorageHandler(state, action) {
      const incomingItem = action.payload;
      // Handle primary selections
      if (
        incomingItem.primary &&
        !state.selectedPrimaryTypes.includes(incomingItem.value)
      ) {
        state.selectedPrimaryTypes.push(incomingItem.value);
        return;
      }

      if (
        incomingItem.primary &&
        state.selectedPrimaryTypes.includes(incomingItem.value)
      ) {
        state.selectedPrimaryTypes = [
          ...state.selectedPrimaryTypes.filter(
            (car) => car !== incomingItem.value
          ),
        ];
      }
      // Handle secondary selections
      if (
        incomingItem.secondary &&
        !state.selectedSecondaryTypes.includes(incomingItem.value)
      ) {
        state.selectedSecondaryTypes.push(incomingItem.value);
        return;
      }

      if (
        incomingItem.secondary &&
        state.selectedSecondaryTypes.includes(incomingItem.value)
      ) {
        state.selectedSecondaryTypes = [
          ...state.selectedSecondaryTypes.filter(
            (car) => car !== incomingItem.value
          ),
        ];
      }
    },
    isMoreSelectedToggler(state) {
      state.isMoreSelected = !state.isMoreSelected;
    },
    closeMoreSelected(state) {
      state.isMoreSelected = false;
    },
  },
});

export const typesActions = typesSlice.actions;

export default typesSlice;
