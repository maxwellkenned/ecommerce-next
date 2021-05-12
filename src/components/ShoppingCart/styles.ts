import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);

  background-color: var(--white);

  height: 8.5rem;

  border-left: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 0.8125rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  svg {
    width: 1.625rem;
    height: 1.625rem;
    margin-bottom: 1.5rem;

    transition: margin 0.3s;

    @media screen and (max-width: 991px) {
      margin-bottom: 0;
    }
  }
`

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: var(--gray-600);
    font-size: 1.125rem;
    font-weight: 600;

    transition: display 0.3s;

    @media screen and (max-width: 991px) {
      display: none;
    }
  }

  & > span {
    color: var(--pink-800);
    font-size: 1.25rem;
    font-weight: bold;
  }
`

export const ModalShop = styled.div`
  position: relative;
  width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  top: 0;
  right: 0;
  z-index: 10;
`
