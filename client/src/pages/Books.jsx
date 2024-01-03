import React,{useState,useEffect} from 'react'
import { Table } from 'antd';
import Axios from 'axios';
const Books = () => {


    const [books,setBooks] = useState([])

    useEffect(() => {
      const getBooks = async () => {
        try {
          const res = await Axios.get('http://localhost:8000/api/books');
          const data = res.data;
          setBooks(data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
       getBooks();      
    } ,[])

    const dataSource = books.map((book,index) => {
        return {
            key: book._id,
            bookName: book.bookName,
            author: book.author,
            department: book.department,
            quantity: book.quantity,
            process: (
                <div className='flex items-center gap-x-3'>
                  <button onClick={() => lendBook(book._id)}
                   className='bg-green-500 text-white px-2 py-1 rounded-lg'>Lend</button>
                  <button onClick={() => deleteBook(book._id)}
                   className='bg-red-500 text-white px-2 py-1 rounded-lg'>Delete</button>
                  <button onClick={() => backBook(book._id)} 
                   className='bg-blue-500 text-white px-2 py-1 rounded-lg'>Back</button>
                </div>
              ),
        }
    }
    )

    
      
      const columns = [
        {
          title: 'Book Name',
          dataIndex: 'bookName',
          key: 'bookName',
        },
        {
          title: 'Author',
          dataIndex: 'author',
          key: 'author',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
          },
          {
            title: 'Process',
            dataIndex: 'process',
            key: 'process',
          },
      ];

      const deleteBook = async (id) => {
        try {
          // Kitabı sil
          await Axios.delete(`http://localhost:8000/api/books/delete/${id}`);
          
          // Silinen kitabı state'ten kaldır
          setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
          
          console.log('Book deleted successfully');
        } catch (error) {
          console.error('Error deleting book:', error);
        }
      };

      const lendBook = async (id) => {
        try {
          // Kitabın quantity değerini azalt
          await Axios.put(`http://localhost:8000/api/books/lend/${id}`);
          
          // Kitapları güncelle (sayfayı yenilemeden hemen sonra görmek için)
          const updatedBooks = await Axios.get('http://localhost:8000/api/books');
          setBooks(updatedBooks.data);
          
          console.log('Book lend successfully');
        } catch (error) {
          console.error('Error lending book:', error);
        }
      };

      const backBook = async (id) => {
        try {
          // Kitabın quantity değerini azalt
          await Axios.put(`http://localhost:8000/api/books/back/${id}`);
          
          // Kitapları güncelle (sayfayı yenilemeden hemen sonra görmek için)
          const updatedBooks = await Axios.get('http://localhost:8000/api/books');
          setBooks(updatedBooks.data);
          
          console.log('Book lend successfully');
        } catch (error) {
          console.error('Error lending book:', error);
        }
      };
      

     
      
      
      

  return (
    <div className='w-full'>
      <Table scroll={{ x:1000, y:1000 }}
            className="overflow-auto max-h-[20rem]"
       pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Books