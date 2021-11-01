import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const StyledHeader = styled.div``;

export const StyledHome = styled.div`
  color: blue;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 2rem 0.5rem;
  color: "#ffffff";
`;

export const GroupButtons = styled.div`
  margin: 1rem 0;
`;

export const Arrow = styled.span`
  font-weight: 900;
  margin: 0 0.5rem;
  &:hover,
  &:focus {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const StyledCarousel = styled(Carousel)`
  li {
    position: relative;
    margin: 0.5rem;
    width: 300px;
    height: 300px;
  }
`;
