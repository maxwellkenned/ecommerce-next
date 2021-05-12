import styled from 'styled-components'

export const Wrapper = styled.div`
  form {
    display: inline-block;
    position: relative;
    width: min(41.25rem, 100%);

    input {
      width: 100%;
      height: 3.375rem;
      padding: 0 1rem;

      background-color: var(--white);
      border: 1px solid #ddd;
      border-radius: 0.1875rem;

      font-size: 1.25rem;

      &::placeholder {
        color: var(--gray-400);
      }
    }

    button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      background-color: transparent;
      border: 0;
      width: 100px;
      height: 100%;

      svg {
        color: var(--gray-400);
        font-size: 1.25rem;
      }
    }
  }
`
