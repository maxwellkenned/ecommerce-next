import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const Background = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: var(--gray-400);
  opacity: 0.5;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  width: auto;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0 0.625rem var(--gray-200);

  padding: 2rem;
  color: var(--gray-600);

  position: relative;

  @media screen and (max-width: 1096px) {
    max-width: 100%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }

  > button {
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 1rem;
    right: 1rem;

    padding: 0.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  > div {
    min-height: 31.25rem;
    width: 31.25rem;
    padding: 2rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
      font-size: 2rem;
      font-weight: bold;
    }

    > div {
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

      .percentPromo {
        background-color: var(--green-200);
        color: var(--white);
        font-size: 1rem;
        text-align: left;
        line-height: 1.25rem;
        font-weight: bold;
        padding: 0.1rem 0.3rem;
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
  }

  img {
    width: 31.25rem;
    height: 31.25rem;

    @media screen and (max-width: 650px) {
      width: 100%;
      height: 10rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    flex: 1;
    gap: 1rem;

    div.formGroup {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;

      label {
        font-size: 1.25rem;
        font-weight: 500;
      }

      input {
        text-align: center;
        height: 2rem;
        width: 6rem;
        font-size: 1.25rem;
        border-radius: 4px;
        border: 1px solid var(--pink-800);

        &:focus,
        &:active,
        &:target,
        &:focus-visible {
          outline: 0;
          border: 2px solid var(--pink-800);
        }
      }
    }

    > button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      height: 3rem;
      margin-top: auto;
      border: 0;
      border-radius: 3px;
      background-color: var(--pink-800);
      color: var(--white);
      font-size: 2rem;
      font-weight: bold;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.92);
      }
    }
  }
`
