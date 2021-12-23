import { Container } from './styles';

import Link from 'next/link';

const Header = () => {

  return (
    <Container>
      <nav>
        <div className='left'>
          <Link href="/">
            <>
            <img src="/images/pata-marrom.svg" alt="logo" id="logo"/>
            <h1>Pet&Gato</h1>
            </>
          </Link>
        </div>
        
        
        <div className="right">
          <Link href="/">
              <h2>Home</h2>
          </Link>
          <Link href="/about">
              <h2>Sobre</h2>
          </Link>
          <Link href="/services">
              <h2>Serviços</h2>
          </Link>
          <Link href="/contact">
              <h2>Contato</h2>
          </Link>
        </div>

        
      </nav>
    </Container>
  );
};

export default Header;
