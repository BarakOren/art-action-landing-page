import styled from "styled-components";
import Logo from "./Assets/logo.png"

const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: none;
`

const Image = styled.img`
    margin-top: 20px;
  width: 80px;
  height: auto;
`;

const ArtActionLogo = () => {
    return (
        <Container>
        <Image src={Logo} alt="art-action-logo"/>
        </Container>

    )
}

export default ArtActionLogo;