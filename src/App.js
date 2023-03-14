
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-20' >
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
