import styled from "styled-components";

const Title = styled.h1`
    color:${(props) => props.theme.textColor};
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: "Nanum pen Script";
`

function Home() {
    return (
        <Wrapper> 
            <Title>Hi</Title>
            <h2> 이곳은 홈 입니다</h2>
        </Wrapper>
    )
}

export default Home;