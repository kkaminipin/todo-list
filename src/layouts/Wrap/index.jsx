import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';

import './styles/style.css';

const Wrap = () => {
  return (
    <div className='wrap'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default Wrap;
