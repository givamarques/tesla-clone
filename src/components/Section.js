import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            Custom Order
          </LeftButton>
          <RightButton>
            Existing Inventory
          </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover; //cobrir a área
  background-position: center; //centralizar imagem
  background-repeat: no-repeat;
  background-image: url('./images/model-s.jpg');
  display: flex; //vai permitir alinhar os items dentro dele. botoes ficam lado a lado
  flex-direction: column; //botoes ficam abaixo do texto (mantendo-se lado a lado)
  justify-content: space-between; //vertical
  align-items: center; //horizontal
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`

`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`