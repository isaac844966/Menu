import styled from "styled-components";

const Wrapper = styled.div`
  img {
    display: none;
  }
  .container {
    background: var(--primary-50);
    display: flex;
    gap: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
  }
  h1 {
    font-weight: 800;
    font-size: 1.6rem;
    margin-bottom: 3rem;
    line-height: 1.123;
  }
  @media screen and (min-width: 966px) {
    img {
      display: block;
      width: 50vw;
      border-radius: 1rem;
    }
    .container {
      padding-top: 0rem;
      padding-left: 4rem;
      padding-right: 4rem;
      margin-bottom: 2rem;
    }
    h1 {
      text-align: left;
      margin-top: 3rem;
      font-size: 3rem;
    }
  }
`;
export default Wrapper;
