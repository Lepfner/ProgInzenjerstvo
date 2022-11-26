import React , {Compontent} from 'react'

const PS1 = ({page, setPage}) => {
  return (
    <div className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full">
    <div className="step-title">Step1</div> 
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Name:</div>
    <input
      type="text"
      placeholder="placeholder"
      className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
    />
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Surname:</div>
    <input
      type="text"
      className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      placeholder="placeholder"
    />
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Date Of Birth:</div>
    <input
      type="date"
      className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
    />
    <div className=" lg:text-3xl mb-2 md: text-5xl sm: text-4xl">Gender:</div>
     <div className= "lg:text-2xl mb-2 md: text-5xl sm: text-2xl">
        <input type="radio" className= "lg:text-2xl mb-2 md: text-5xl sm: text-2xl" value="Male" name="gender" />Male
        <input type="radio" className= "lg:text-2xl mb-2 md: text-5xl sm: text-2xl" value="Female" name="gender" />Female
      </div>


      <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
    <button
    className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
        onClick={() => {
          setPage(page + 1);
        }}>
        Next
      </button>
      </div>
  </div>

  // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  )

}
export default PS1