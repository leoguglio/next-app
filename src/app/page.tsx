import Image from 'next/image'

export default function Home() {

  return (
    <div className="h-screen flex justify-center items-center text-gray-400  body-font">
      <div className="relative ">
        <Image
          src={'/images.jpeg'}
          alt="Animacion"
          width={600}
          height={300}
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
          <h3 className="text-xl text-white font-bold">
            Al servicio de la comunidad</h3>
          <p className="mt-2 text-sm text-gray-300">Servicio brindado por profesionales para el ciudadano</p>
        </div>
      </div>
    </div>
  )
}

