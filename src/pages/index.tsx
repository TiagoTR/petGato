import type { NextPage } from 'next';
import Header from '../components/Header';

import {  Container } from "../styles/homeStyle";


const Home: NextPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default Home;
