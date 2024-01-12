import styled from "styled-components";

const Trusted = () => {
  const sliderData = [
    {
      imgSrc:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png",
    },
  ];
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {sliderData?.map((val, index) => {
            return (
              <div className="slide" key={index}>
                <img src={`${val.imgSrc}`} alt="trusted-brands" />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
