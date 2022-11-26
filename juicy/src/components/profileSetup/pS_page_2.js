import React , {Compontent} from 'react'

const PS2 = ({page, setPage}) => {
  return (
    <div className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full">
    <div className="step-title">Step2</div>
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Status:</div> 
    <select className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">
    <option value="unmarried">unmarried</option>
    <option value="married">married</option>  
    
    </select>
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Nationality:</div> 
    <input
      type="text"
      className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      placeholder="placeholder"
    />
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Religion:</div> 
    <textarea
      className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      placeholder="placeholder"
    />
     <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">

       <button
      className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
        onClick={() => {
          setPage(page - 1);
        }}>
        Previous
      </button>
     <button
     className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
        onClick={() => {
          setPage(page + 1);
        }}>
        Next
      </button>
      <br/>
     


      </div>
  </div>

  // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  )

}
export default PS2