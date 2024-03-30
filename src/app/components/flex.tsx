import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* Just practice ignore */}
      <nav className=" w-full inline-block justify-between sm:inline-flex items-center px-2 py-2.5 bg-white border-b-2 border-gray-100">
        <div>
          <Image src="next.svg" width={100} height={100} alt="Logo" />
        </div>
        <ul className="pt-3 inline-block justify-between sm:inline-flex  gap-5 font-bold">
          <li className="text-2xl">Home</li>
          <li className="text-2xl">About</li>
          <li className="text-2xl">Contact</li>
          <li className="text-2xl">Sign Up</li>
        </ul>
      </nav>
      <main className="w-full min-h-[30rem] px-5 inline-block sm:inline-flex justify-between items-center border-b-2 border-gray-100">
        <div className="w-1/2 mx-auto">
          <h1 className="text-3xl font-bold">Today is Awsome.</h1>
          <h2 className="text-2xl py-2">Tailwind is also Awsome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laudantium, laborum modi mollitia ad est animi eaque, autem quaerat
            esse pariatur ea? Incidunt at odit labore dignissimos optio quae
            dolore.
          </p>
        </div>
        <div className="w-1/3 mx-auto pt-10 sm:pt-0">
          <Image src="vercel.svg" width="300" height="300" alt="" />
        </div>
      </main>

      {/* Responsive cards */}
      <h1 className="w-full p-3 text-3xl font-bold text-center ">
        Responsive Cards
      </h1>

      <div className="w-full p-3 flex justify-center border-b-2 border-gray-100">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[20rem] min-h-[20rem] border-2 border-gray-100 flex flex-col justify-center items-center m-4">
            <Image src="vercel.svg" width="200" height="400" alt="" />
            <div className="text-center p-2">
              <h1 className="text-2xl font-bold">Title of Card</h1>
              <p>
                Some description of the card. Responsive design of the card in
                the tailwind css. Love toward design and performance
              </p>
            </div>
          </div>
          <div className="max-w-[20rem] min-h-[20rem] border-2 border-gray-100 flex flex-col justify-center items-center m-4">
            <Image src="vercel.svg" width="200" height="400" alt="" />
            <div className="text-center p-2">
              <h1 className="text-2xl font-bold">Title of Card</h1>
              <p>
                Some description of the card. Responsive design of the card in
                the tailwind css. Love toward design and performance
              </p>
            </div>
          </div>
          <div className="max-w-[20rem] min-h-[20rem] border-2 border-gray-100 flex flex-col justify-center items-center m-4">
            <Image src="vercel.svg" width="200" height="400" alt="" />
            <div className="text-center p-2">
              <h1 className="text-2xl font-bold">Title of Card</h1>
              <p>
                Some description of the card. Responsive design of the card in
                the tailwind css. Love toward design and performance
              </p>
            </div>
          </div>
          <div className="max-w-[20rem] min-h-[20rem] border-2 border-gray-100 flex flex-col justify-center items-center m-4">
            <Image src="vercel.svg" width="200" height="400" alt="" />
            <div className="text-center p-2">
              <h1 className="text-2xl font-bold">Title of Card</h1>
              <p>
                Some description of the card. Responsive design of the card in
                the tailwind css. Love toward design and performance
              </p>
            </div>
          </div>
          <div className="max-w-[20rem] min-h-[20rem] border-2 border-gray-100 flex flex-col justify-center items-center m-4">
            <Image src="vercel.svg" width="200" height="400" alt="" />
            <div className="text-center p-2">
              <h1 className="text-2xl font-bold">Title of Card</h1>
              <p>
                Some description of the card. Responsive design of the card in
                the tailwind css. Love toward design and performance
              </p>
            </div>
          </div>
          <div className="max-w-[20rem] min-h-[20rem] border-2 border-gray-100 flex flex-col justify-center items-center m-4">
            <Image src="vercel.svg" width="200" height="400" alt="" />
            <div className="text-center p-2">
              <h1 className="text-2xl font-bold">Title of Card</h1>
              <p>
                Some description of the card. Responsive design of the card in
                the tailwind css. Love toward design and performance
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full min-h-[5rem] bg-white-500 flex justify-center items-center">
        <h2 className="text-center font-bold">
          Thanks for your time......................
        </h2>
      </footer>
    </>
  );
}
