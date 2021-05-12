import styled from 'styled-components'

export const Wrapper = styled.header`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  color: #333;
  min-width: 100%;
  height: 11.875rem;
  padding: 2rem 0 2rem 5rem;
  display: flex;
  flex-direction: row;

  border-bottom: 0.25rem solid var(--pink-800);
  transition: padding 0.5s;

  @media screen and (max-width: 991px) {
    padding: 2rem 0 2rem 1rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  max-width: 75%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
`

export const Logo = styled.div`
  width: 8.875rem;
  height: 8.875rem;

  @media screen and (min-width: 600px) {
    img {
      border-radius: 50%;
      border: 2px solid var(--pink-800) !important;
    }
  }
`
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  margin-left: 2rem;
  gap: 1rem;

  @media screen and (max-width: 1020px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 920px) {
    gap: 0.5rem;
  }
`

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  position: relative;

  @media screen and (max-width: 674px) {
    gap: 0.25rem;
  }
`

export const Title = styled.h1`
  display: inline-block;
  font-size: 1.75rem;
  color: var(--gray-800);

  @media screen and (max-width: 674px) {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`

export const OpenLabel = styled.span`
  display: flex;
  align-items: center;

  @media screen and (max-width: 674px) {
    position: absolute;
    top: -0.5rem;
    left: 0;
  }

  font-size: 0.75rem;
  color: var(--green-400);
  font-weight: bold;

  svg {
    width: 0.625rem;
    height: 0.625rem;
  }
`

export const Adress = styled.p`
  color: var(--gray-800);
  font-size: 1.1875rem;
  white-space: pre-wrap;

  @media screen and (max-width: 600px) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
`
export const ContentDelivery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.625rem;

  font-size: 1.125rem;
  color: var(--gray-800);
  font-weight: 600;

  @media screen and (max-width: 920px) {
    flex-direction: column;
    gap: 0;
  }
`
export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    p {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    & + div {
      padding-left: 0;
    }

    svg {
      display: none;
    }
  }

  svg {
    margin-right: 0.25rem;
  }

  span {
    color: var(--gray-500);
    margin-left: 0.625rem;
    white-space: pre-wrap;
  }
`
