// creating an empty basket (no item in the initial shopping list)
export const initialState = {
  basket: [],
  user: ''
}
// Selector (for calculating subtotal amount)
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

// ACTIONS
export const ACTIONS = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
  SET_USER: 'SET_USER'
}

// create a reducer (parameter: state and action)
const reducer = (state, action) => {
  // use switch statement to perform each action
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
    case ACTIONS.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) =>
        item.id === action.id
      );

      // create a copy of shopping list (basket)
      let newBasket = [...state.basket];
    
      if (index >= 0) {
        // remove the item if its id equals to action.id
        newBasket.splice(index, 1);
      } else {
        console.warn(`This product (id: ${action.id}) does not exist in the shopping list`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state;
  }
}

export default reducer;