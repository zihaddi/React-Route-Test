//import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
//import Default from './components/Default/Default';
import Main from './layouts/Main/Main';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
//import Header from './components/Header/Header';

function App() {
 
  const router = createBrowserRouter(
    [
      {
        path : '/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children :
        [
          {path:'about' , element : <About></About>},
          {path:'home' , element : <Home></Home>},
          {path:'products',
          loader:()=>{
             return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element:<Products></Products>
          },
          {
            path:'product/:id',
            loader: async({params}) => {
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
            element: <ProductDetails></ProductDetails>
          },
          {
            path:'/posts',
            loader: async() => {
                 return fetch('https://jsonplaceholder.typicode.com/posts')
            },
            element: <Posts></Posts>
          },
          {
            path:'/post/:id',
            loader : async({params})=>{
               return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            },
            element: <PostDetails></PostDetails>
          }
        ]
      },
      
    ]
  )
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
