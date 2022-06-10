import Image from 'next/image';
import React from 'react';
import styled from 'styled-components'
import ToggleSwitch from '../components/ToggleSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

export default function Toggle(props, child) {
    const [isChecked, setChecked] = React.useState(true)

    console.log("is checked", isChecked)

    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }

    return (
        <PageWrapper>
            <pre>{isChecked ?  <FontAwesomeIcon icon={faDoorClosed} className="fa-10x"/> :  <FontAwesomeIcon icon={faDoorOpen} className="fa-10x"/>}</pre>
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
