import styled from 'styled-components'
import { breakpoints, colors } from '../../styles '
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import closeIcon from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.grey};

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const Prices = styled.p`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGrey};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
`

export const CartList = styled.ul`
  max-height: 74vh;
  overflow-y: auto;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  padding: 8px 0;
  border-bottom: 1px solid ${colors.lightGrey};

  img {
    margin-right: 24px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    position: absolute;
    top: 8;
    right: 0;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-image: url(${closeIcon});
  }
`
