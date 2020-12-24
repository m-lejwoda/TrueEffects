import React from 'react';
import '../sass/navbar.scss';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faClipboardList,faWeight,faGavel } from '@fortawesome/fontawesome-free-solid';
import { makeStyles } from '@material-ui/core/styles';
const Navbar2 = () => {
    return (
        <SideNav>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                          <FontAwesomeIcon icon={faHome} />
                        </NavIcon>
                        <NavText>
                            Strona Domowa
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="clipboard">
                        <NavIcon>
                          <FontAwesomeIcon icon={faClipboardList} />
                        </NavIcon>
                        <NavText>
                            Kalendarz treningów
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="gavel">
                        <NavIcon>
                          <FontAwesomeIcon icon={faGavel} />
                        </NavIcon>
                        <NavText>
                            Kreator trening
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="weight">
                        <NavIcon>
                         <FontAwesomeIcon icon={faWeight} />
                        </NavIcon>
                        <NavText>
                            Dodaj pomiary
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="weightall">
                        <NavIcon>
                          <FontAwesomeIcon icon={faWeight} />
                        </NavIcon>
                        <NavText>
                            Wyświetl wszystkie pomiary
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    );
};

export default Navbar2;