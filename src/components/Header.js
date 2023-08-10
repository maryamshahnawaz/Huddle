import { StyledHeader, Nav, Logo, Image } from "./Styles/Header.styled"
import { Container } from "./Styles/Container.styled";

import { Flex } from "./Styles/Flex.styled";
import { Button } from "./Button.styled";


const Header = () => {
 return (
  <StyledHeader >
   <Container>
    <Nav>
     <Logo src="./images/logo.svg" alt="logo" />
     <Button>
      Try It Free
     </Button>
    </Nav>
    <Flex>
     <div>
      <h1>Create a Community your Fans will Love</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis accusantium aliquid exercitationem iure, atque totam, corporis recusandae doloremque adipisci debitis laudantium. Odit dolore magnam officiis. Ad deserunt omnis ullam.</p>
      <Button bg="#ff0099" color="#fff">Get Started For Free</Button>

     </div>
     <Image src="./images/illustration-mockups.svg" />
    </Flex>
   </Container>
  </StyledHeader >
 )
}

export default Header;