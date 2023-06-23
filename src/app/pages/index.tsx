import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <nav>
        <Link href="/"><a>Inicio</a></Link>
        <Link href="/nosotros"><a>Nosotros</a></Link>
      </nav>
    </div>
  );
}

export default Home;