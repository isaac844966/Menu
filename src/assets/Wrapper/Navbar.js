import styled from "styled-components";

const Wrapper = styled.div`
  .navbar {
    margin-top: -3rem;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  .logo {
    width: 7.5rem;
    height: 1.5rem;
    border-radius: 0.1rem;
  }
  @media screen and (min-width: 966px) {
    .navbar {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`;
export default Wrapper;
