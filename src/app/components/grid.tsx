export default function Home() {
  return (
    <>
      {/* Just practice ignore */}

      <div className="w-full grid grid-cols-1 sm:grid-cols-[20%_50%_20%] gap-5 p-5  justify-center">
        <div className="h-[5rem] flex justify-center items-center rounded bg-red-500">
          01 This is awsome
        </div>
        <div className="h-[5rem] flex justify-center items-center rounded bg-green-500">
          02 This is awsome
        </div>
        <div className="h-[5rem] flex justify-center items-center rounded bg-green-500">
          03 This is awsome
        </div>
      </div>

      {/* Another one */}
      <div className="bg-red-500">
        <div className="w-full grid grid-cols-1 sm:grid-cols-[20%_70%] gap-5 p-5 justify-center">
          <div className="h-[5rem] flex justify-center items-center rounded bg-green-500">
            01 First One
          </div>
          <div className="h-[5rem] flex justify-center items-center rounded bg-green-500">
            02 Second One
          </div>
        </div>
      </div>

      {/* Another one */}

      <div className="w-full  grid grid-cols-1 sm:grid-cols-4 gap-1 p-5 justify-center ">
        <div className="h-[2.5rem]  bg-green-500 col-span-4  grid grid-cols-2 justify-center items-center">
          <div className="ps-5">Logo</div>
          <div className="flex justify-end pe-5">
            <ul className="flex  gap-4">
              <li className="font-bold text-white">Home</li>
              <li className="font-bold text-white">About</li>
              <li className="font-bold text-white">Service</li>
              <li className="font-bold text-white">Login</li>
            </ul>
          </div>
        </div>
        <div className="w-full col-span-4 flex">
          <div className="h-[20rem] w-[15%] sm:w-[20%] flex justify-center items-center  bg-green-500">
            01 This is for hero section l1
          </div>

          <div className=" relative flex w-[80%] justify-center items-center  bg-green-500 brightness-95">
            <form className="absolute z-1 h-[14rem] rounded bg-red-500 w-[90%] sm:w-[50%] p-4 overflow-hidden shadow-2xl">
              <h1 className="text-2xl text-center sm:py-3">Feedback here</h1>
              <div className="flex flex-col py-1 sm:flex-row justify-evenly  overflow-hidden">
                <label htmlFor=""> UserName</label>
                <input type="text" className="border-2 border-black rounded" />
              </div>
              <div className="flex flex-col py-1 sm:flex-row justify-evenly  overflow-hidden">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="border-2 border-black rounded"
                />
              </div>
              <div className="p-1 text-white float-right sm:pr-12 sm:pt-5">
                <button className=" bg-blue-500 rounded p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-400 ">
                  Submit
                </button>
              </div>
            </form>
            <div className="absolute text-white z-2 text-2xl text-center bottom-[4%] w-[50%] h-[3rem] bg-blue-700 bg-opacity-60">
              Here
            </div>
          </div>
        </div>
        <div className="h-[3rem] col-span-4 flex justify-center items-center  bg-green-500">
          01 This is for footer section l2
        </div>
      </div>

      {/* Anothter one */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 grid-flow-row-dense gap-5 p-5 justify-center">
        <div className="min-h-[5rem]  flex justify-center items-center rounded bg-green-500">
          01 This is awsome
        </div>
        <div className="min-h-[5rem] sm:col-span-2 flex justify-center items-center rounded bg-green-500">
          02 This is awsome
        </div>
        <div className="min-h-[5rem] sm:row-span-2  flex justify-center items-center rounded bg-green-500">
          03 This is awsome
        </div>
        <div className="min-h-[5rem] flex justify-center items-center rounded bg-green-500">
          04 This is awsome
        </div>
        <div className="min-h-[5rem] sm:row-span-2 flex justify-center items-center rounded bg-green-500">
          05 This is awsome
        </div>
        <div className="min-h-[5rem] flex justify-center items-center rounded bg-green-500">
          06 This is awsome
        </div>{" "}
        <div className="min-h-[5rem] sm:col-span-3 flex justify-center items-center rounded bg-green-500">
          07 This is awsome
        </div>
      </div>
    </>
  );
}
