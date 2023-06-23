import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
const AboutPage = ()=>{
  const location = useLocation()
  const pathArray = location.pathname.split('/').slice(2);

    return(
       <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop:20
        }}
      >
        <h2>
        About Page
        </h2>
        <div>
        <h4>
        { pathArray}
        </h4>
       
        </div>
       
      </Container>
       </>
    );

}
export default AboutPage;