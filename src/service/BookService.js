class BookService {
    static token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjJAZ21haWwuY29tIiwiaWF0IjoxNjg3NTE4NzY3LCJleHAiOjE2ODc1MjE2NDd9.vPkf51-drSIxGhDeB2IJBEtz60lo6RedIqpE-IUbnYw';
    static url = 'http://localhost:8080/books/all';
  
    static async fetchAllBooks() {
      try {
        const response = await fetch(BookService.url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${BookService.token}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        throw new Error(`Error: ${error.message}`);
      }
    }
  }
  export default BookService;