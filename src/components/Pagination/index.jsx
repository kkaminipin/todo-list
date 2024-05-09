import { Link } from 'react-router-dom';

import './styles/style.css';

const Pagination = () => {
  return (
    <>
      <ol className='pagination'>
        <li className='pagination__li'>
          <Link to='/todo/1' className='pagination__link'>
            1
          </Link>
        </li>
        <li className='pagination__li'>
          <Link to='/todo/2' className='pagination__link'>
            2
          </Link>
        </li>
        <li className='pagination__li'>
          <Link to='/todo/3' className='pagination__link'>
            3
          </Link>
        </li>
      </ol>
    </>
  );
};

export default Pagination;
