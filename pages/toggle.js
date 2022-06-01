import Image from 'next/image';
import React from 'react';
import styled from 'styled-components'
import ToggleSwitch from '../components/ToggleSwitch';

export default function Toggle(props, child) {
    const [isChecked, setChecked] = React.useState(true)

    console.log("is checked", isChecked)

    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }

    return (
        <PageWrapper>
            <pre>{isChecked ?   <Image  src="./img/avatar/Vermelho.svg" width="500" height="500"/> :  <Image  src="./img/avatar/Azul.svg" width="500" height="500"/>}</pre>
            <ToggleSwitch isChecked={isChecked}  onClick={handleCheck}/>  
           
        </PageWrapper>
    )
} 

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background: lightgray;
    height: 100vh;
    width: 100vw;
`

const color = () => {
    return (
              <Image  src="./img/avatar/Verde.svg" width="500" height="500"/>
    )
}