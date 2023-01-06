const cartReducer = (state,action) => {
  switch(action.type){
    case "ADD_TO_CART" : 
    let { id, color, quantity, singleProduct } = action.payload;

    // tackle the existing product

    let existingProduct = state.cart?.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart?.map((curElem) => {
        if (curElem.id === id + color) {
          let newQuantity = curElem.quantity + quantity;

          if (newQuantity >= curElem.max) {
            newQuantity = curElem.max;
          }
          return {
            ...curElem,
            quantity: newQuantity,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: singleProduct.name,
        color,
        quantity,
        image: singleProduct.image[0].url,
        price: singleProduct.price,
        max: singleProduct.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }

    case "REMOVE_ITEM" : {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "REMOVE_ALL_ITEM" : {
      return {
        ...state,
        cart: [],
      };
    }

    case "INCREASE_QUANTITY" : {
      let updatedProduct = state.cart?.map((curElem) => {
        if (curElem.id === action.payload) {
          let incQuantity = curElem.quantity + 1;
  
          if (incQuantity >= curElem.max) {
            incQuantity = curElem.max;
          }
  
          return {
            ...curElem,
            quantity: incQuantity,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }

    case "DECREASE_QUANTITY" : {
      let updatedProduct = state.cart?.map((curElem) => {
        if (curElem.id === action.payload) {
          let decQuantity = curElem.quantity - 1;
  
          if (decQuantity <= 1) {
            decQuantity = 1;
          }
  
          return {
            ...curElem,
            quantity: decQuantity,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }

    case "CART_ITEM_PRICE_TOTAL":{
      let { total_item, total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, quantity } = curElem;
  
          accum.total_item += quantity;
          accum.total_price += price * quantity;
  
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };
    }

    default : return {
      ...state,
      cart: [],
    };
  }
}



export default cartReducer;
