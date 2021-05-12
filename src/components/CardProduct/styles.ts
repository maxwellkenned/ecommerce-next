import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 1rem;
  background-color: var(--white);
  border-radius: 0.3125rem;
  width: 15.625rem;
  height: 27.5rem;
  padding: 1rem;
  cursor: pointer;
  color: var(--gray-600);

  box-shadow: 0 0 0.625rem var(--gray-100);

  .percentPromo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: var(--green-200);
    color: var(--white);
    font-size: 1rem;
    text-align: left;
    line-height: 1.25rem;
    font-weight: bold;
    padding: 0.1rem 0.3rem;
    z-index: 1;
  }

  > p {
    font-size: 1.1875rem;

    font-weight: 500;
    line-height: 1.5rem;
  }

  img {
    width: 14.0625rem;
    height: 14.0625rem;
    object-fit: contain;
  }

  footer {
    margin-top: auto;
    font-size: 1.375rem;

    .price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        color: var(--gray-600);
        font-weight: bold;
        line-height: 1.71875rem;
      }

      > svg {
        color: var(--pink-800);
      }
    }

    div.promo {
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
      }

      span {
        font-size: 0.75rem;
        line-height: 0.9375rem;
        color: var(--gray-300);
      }

      .oldPrice {
        p {
          font-size: 1rem;
          line-height: 1.25rem;
          color: var(--orange-800);
          font-weight: 500;
          text-decoration: line-through;
        }
      }
    }
  }
`
