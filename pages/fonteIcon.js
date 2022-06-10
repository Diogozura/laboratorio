import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBookJournalWhills,  faChartLine, faCopyright, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { faBehance, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Aside = styled.aside`
    width: 600px;
    height: 600px;
    background-color: green;
    border-radius: 10px;
    margin: 2em;
`
const Item = styled.li`
    margin: 20px;
`
const Lista = styled.ul`
    list-style: none;
`

export default function Icons() {
    return (
        <>
            <h1>Bo testar os icones do Fontawesome</h1>
            
            <Link href="/">
                <a><FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-3x" color='black'/></a>
            </Link>
            <Aside>
                <ul>
                    <Item><FontAwesomeIcon icon={faBookJournalWhills} className="fa-3x" color="blue"/></Item>
                    <Item><FontAwesomeIcon icon={faBehance} className="fa-3x"/></Item>
                    <Item><FontAwesomeIcon icon={faGithub} className="fa-3x"/></Item>
                    <Item><FontAwesomeIcon icon={faGlobe} className="fa-3x" /></Item>
                    <Item><FontAwesomeIcon icon={faChartLine} className="fa-3x"/></Item>
                    <Item><FontAwesomeIcon icon={faCopyright} className="fa-inverse fa-3x"/></Item>
                    <Item><FontAwesomeIcon icon={faInstagram} className="fa-inverse fa-3x"/></Item>
                </ul>
                    
               
            </Aside>


        </>)

} 