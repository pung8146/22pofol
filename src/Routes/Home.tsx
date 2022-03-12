import styled from "styled-components";

const Title = styled.h1`
    color:${(props) => props.theme.textColor};
`

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color: ${(props) => props.theme.backgroundColor};
`

function Home() {
    return (
        <Wrapper> 
            <Title>Hi</Title>
        </Wrapper>
    )
}

export default Home;