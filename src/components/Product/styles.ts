import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'
import { colors } from '../../styles '

export const Card = styled(Link)`
  display: block;
  position: relative;
  height: 100%;
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  background-color: ${colors.grey};
  color: ${colors.white};

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
`

export const Description = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
