import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./Styles/SocialIcons.styled"

export default function SocialIcons() {
 return (
  <StyledSocialIcons>
   <li>
    <a href="https://twitter.com"><FaTwitter />
    </a>
   </li>
   <li><a href="https://twitter.com"><FaFacebook />
   </a></li>

   <li><a href="https://twitter.com"><FaLinkedin />
   </a></li>

  </StyledSocialIcons>
 )
}