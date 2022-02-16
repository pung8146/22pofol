import styled from "styled-components";

const Nav = styled.nav`
    width:100%;
    justify-content: space-between;
    align-items: center;;
`;

const Col = styled.div`

`;

const Logo = styled.svg`
    margin-right: 50px;
`;

const Items = styled.ul`
    display:flex;
    align-items: center;
    margin-left: 10px;
`;

const Item = styled.li`
    margin-right: 20px;
`;


function Header() {
    return (
        <Nav>
            <Col>
                <Logo />
                <Items>
                    <Item>Home</Item>
                    <Item>Skill</Item>
                    <Item>Contact</Item>
                </Items> 
            </Col>
            <Col>
                {/* <button>search</button> */}
            </Col>
        </Nav>
    )
}
    
export default Header;