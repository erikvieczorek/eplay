import styled from 'styled-components'
import { cores } from '../../styles '
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/fechar.png'

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
  background-color: ${cores.cinza};

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  padding: 8px 0;
  border-bottom: 1px solid ${cores.cinzaClaro};

  img {
    margin-right: 24px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.branca};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
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
    background-image: url(${fechar});
  }
`
