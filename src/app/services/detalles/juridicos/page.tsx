import Image from 'next/image';

const Juridico = () => {
    return (
      <div>
        <h1>Servicios Jurídicos</h1>
        <Image 
          src="/debora.jpeg" 
          alt="foto abogada" 
          width={200}
          height={200}
        />
      </div>

    )
  }
  
  export default Juridico