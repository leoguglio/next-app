'use client'
import Image from 'next/image';
type Props = {
    src: string;
    alt: string;
    texto: string;
}
const FotoTexto = ({ src, alt, texto }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4">
        <Image src={src} alt={alt} width={100} height={100} />
      </div>
      <p>{texto}</p>
    </div>
  );
};

export default FotoTexto;