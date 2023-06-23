import Link from 'next/link';

const Nosotros = () => {
  return (
    <div>
      <h1>Nosotros</h1>
      <nav>
        <Link href="/"><a>Inicio</a></Link>
        <Link href="/nosotros"><a>Nosotros</a></Link>
      </nav>
    </div>
  );
}

export default Nosotros;