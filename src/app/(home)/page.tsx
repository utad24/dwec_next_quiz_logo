import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-white p-20">
      <div>
        <Image src="/next.svg" alt="Logo" width={100} height={50} className="mx-auto mb-4" />
        <h1 className="font-bold text-3xl text-center text-black">Selecciona tu QUIZ</h1>

        <Link href={"/quiz-logo"} className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-lg p-4 my-4 font-semibold text-center flex items-center justify-center">
          ¡Adivina! ¿qué logotipo es? <span className="text-3xl">🧐</span>
        </Link>

        <Link href={"/quiz-write"} className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-lg p-4 my-4 font-semibold text-center flex items-center justify-center">
          Escribe el nombre del logotipo <span className="text-3xl">📝</span>
        </Link>
      </div>
    </div>
  );
}
