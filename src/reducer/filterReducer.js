const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };  

    case "SET_LIST_VIEW":
        return {
            ...state,
            grid_view: false,
        };

    case "GET_SORT_VALUE":
        let userSortValue = document.getElementById("sort")
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        
        return{
            ...state,
            sorting_value : sort_value, 
        }

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload];
      
            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];
      
            const sortingProducts = (a, b) => {
              if (sorting_value === "lowest") {
                return a.price - b.price;
              }
      
              if (sorting_value === "highest") {
                return b.price - a.price;
              }
      
              if (sorting_value === "a-z") {
                return a.name.localeCompare(b.name);
              }
      
              if (sorting_value === "z-a") {
                return b.name.localeCompare(a.name);
              }
            };
      
            newSortData = tempSortProduct.sort(sortingProducts);
      
            return {
              ...state,
              filter_products: newSortData,
            };


        case "UPDATE_FILTER_VALUE" : 
            const {name , value} = action.payload;

            return{
              ...state,
              filters :{
                ...state.filters,
                [name] : value,
              }
            }

        case "FILTER_PRODUCTS":
          let {all_products} = state;
          let tempFilterProduct = [...all_products];
          const {text , category , company} = state.filters;

          if(text){
            tempFilterProduct = tempFilterProduct.filter((elm)=>elm.name.toLowerCase().includes(text))
          }

          if(category !== "all"){
            tempFilterProduct = tempFilterProduct.filter((elm)=> elm.category === category)
          }
          if(company !== "all"){
            tempFilterProduct = tempFilterProduct.filter((elm)=> elm.company.toLowerCase() === company.toLowerCase())
          }

          return{
            ...state,
              filter_products: tempFilterProduct,
          }

          case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;