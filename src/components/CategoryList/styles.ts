import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray-200);

  background-color: var(--white);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: stretch;
    list-style: none;

    overflow-y: auto;

    scrollbar-color: var(--pink-800) var(--gray-100);
    scrollbar-width: thin;

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 3px var(--white);
    }

    ::-webkit-scrollbar {
      height: 12px;
      width: 10px;
      background-color: var(--gray-100);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: var(--pink-800);
      border: 2px solid var(--gray-100);
      border-left: 0;
      border-right: 0;
    }

    li {
      flex: 1;
      min-width: 200px;
      text-align: center;
      color: var(--gray-600);
      font-size: 1.125rem;
      font-weight: 600;
      padding: 0 1rem;

      cursor: pointer;

      &:hover {
        font-weight: bold;
        text-decoration: underline;
      }

      &.active {
        color: var(--pink-800);
        font-weight: bold;
        text-decoration: underline;
      }

      & + li {
        border-left: 1px solid var(--gray-200);
      }
    }
  }
`
