import { Outlet } from 'react-router-dom';
import './styles/style.css';

const Container = () => {
  return (
    <>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default Container;
