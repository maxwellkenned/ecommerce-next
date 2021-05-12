import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2.125rem;

  h2 {
    font-size: 1.375rem;
    color: var(--gray-800);
    font-weight: bold;
    line-height: 1.6875rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: 644px) {
      flex-direction: column;
    }

    gap: 1.425rem;
    padding: 1.75rem;
  }
`
