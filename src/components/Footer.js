import { Container } from "./Styles/Container.styled";
import { Flex } from "./Styles/Flex.styled";
import { StyledFooter } from "./Styles/Footer.styled";
import SocialIcons from "./SocialIcons";


export default function Footer() {
 return (
  <StyledFooter>
   <Container>
    <img src="./images/logo_white.svg" alt="" />
    <Flex>
     <ul>
      <li>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua
      </li>
      <li>+1-234-s567-8909</li>
      <li>example@huddle.com</li>
     </ul>
     <ul>
      <li>About Us</li>
      <li>What We Do</li>
      <li>FAQ</li>
     </ul>

     <ul>
      <li>Career</li>
      <li>Blog</li>
      <li>Contact Us</li>
     </ul>

     <SocialIcons />
    </Flex>

   </Container>
  </StyledFooter>

 )
}