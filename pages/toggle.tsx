import Image from 'next/image';
import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

export default function Toggle() {
    const [isChecked, setChecked] = React.useState(true)

    console.log("is checked", isChecked)

    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }

    return (
        <PageWrapper>
            <pre>{isChecked ?  <FontAwesomeIcon icon={faDoorClosed} className="fa-10x"/> :  <FontAwesomeIcon icon={faDoorOpen} className="fa-10x"/>}</pre>
          
           
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
