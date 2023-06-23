import { Container } from "@mui/material";
import { useEffect } from "react";


const fetchData = async (url, token) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // Process the data here
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const ContactPage = ()=>{
  
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjJAZ21haWwuY29tIiwiaWF0IjoxNjg3NTE0ODk1LCJleHAiOjE2ODc1MTc3NzV9.HQgY4EGjBlCGwX85Oj6G-Xy1ZNKZvRwr1w7fi3v07pE';
  const url = 'http://localhost:8080/books/all';

  useEffect(() => {
    fetchData(url, token);
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
      </Container>
       </>
    );

}
export default ContactPage;