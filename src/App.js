import { ThemeProvider } from "styled-components";
import { Container } from "./components/Styles/Container.styled"
import GlobalStyles from "./components/Styles/Global"
import Header from "./components/Header"
import Footer from "./components/Footer";
import { content } from "./content";
import Card from "./components/Card"
import SocialIcons from "./components/SocialIcons";


const theme = {
  colors: {
    header: '#ebfbff',
    body: "#fff",
    footer: '#003333',
  },
  mobile: '768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card key={index} item={item} />
          })}
        </Container>
        <Footer />
        <SocialIcons />
      </>
    </ThemeProvider>



  );
}

export default App;
