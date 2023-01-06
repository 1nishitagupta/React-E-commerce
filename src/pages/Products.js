import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import { useFilterContext } from "../context/filter_context";
import ReactLoading from "react-loading";

const Products = () => {
  const { filter_products } = useFilterContext();
  // if(filter_products){
  //   return(
  //     <>
  //       <Wrapper>
  //         <div className="main-product">
  //           <div className="loading">
  //           <ReactLoading type="bubbles" color="#000" />
  //           </div>
  //         </div>
  //       </Wrapper>
  //     </>
  //   )
  // }

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            {filter_products.length > 0 ? (
              <>
                <ProductList filter_products={filter_products} />
              </>
            ) : (
              <div className="loading">
              <ReactLoading type="bubbles" color="#000" />
              </div>
            )}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
