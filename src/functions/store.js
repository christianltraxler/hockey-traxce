import React, {createContext, useReducer} from 'react';

const initialState = {
    'menuToggle': true
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
      const newState = { ...state };
    switch(action.type) {
      case 'TOGGLE_MENU':
        newState.menuToggle = !newState.menuToggle;
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };