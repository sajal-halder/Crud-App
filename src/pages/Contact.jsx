import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import BookService from "../service/BookService";

const ContactPage = ()=>{
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const fetchedData = await BookService.fetchAllBooks();
      setData(fetchedData);
      // Process the data here
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);

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
        Contact Page
        </h2>
        {data &&(
          console.log(data)
        )}
      </Container>
       </>
    );

}
export default ContactPage;