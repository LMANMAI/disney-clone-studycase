import styled from "styled-components";

export const WatchlistContainer = styled.section`
  margin: 0px auto;
  margin-top: 100px;
  padding: 10px 25px;
  width: calc(100vw - 60px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  transition: 250ms ease-in-out;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  }

  .watchlist__item {
    flex: 1;
    height: 150px;
    overflow: hidden;
    transition: 250ms ease-in-out;
    img {
      width: 100%;
      vertical-align: top;
      object-fit: contain;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.08);
      transform-origin: center;
      box-shadow: 11px -4px 86px -21px rgba(0, 0, 0, 0.93);
      & > .overlay {
        height: 50%;
        display: block;
      }
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.08);
      transform-origin: center;
      box-shadow: 11px -4px 86px -21px rgba(0, 0, 0, 0.93);
      & > .overlay {
        height: 50%;
        display: block;
      }
    }
    .overlay {
      display: none;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #161a1d);
      overflow: hidden;
      width: 100%;
      height: 0;
      transition: 0.5s ease;
    }
    .text {
      white-space: nowrap;
      color: white;
      font-size: 12px;
      position: absolute;
      overflow: hidden;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  }
`;