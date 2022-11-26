import React , {Compontent} from 'react'
import { useState } from "react";
import PS1 from './pS_page_1';
import PS2 from './pS_page_2';
import PS3 from './pS_page_3';
import "../profileSetup/profileSetup.css"  
function ProfileSetup() {

  const [page, setPage] = useState(0);

  const componentList = [
    <PS1 
    page={page}
    setPage={setPage}>
    </PS1>,
    <PS2
    page={page}
    setPage={setPage}>
    </PS2>,
    <PS3 
    page={page}
    setPage={setPage}>
    </PS3>
  ];


  return (
     <div className='h-full flex flex-col justify-center pl-8 pb-12 lg:w-full md:w-full max-sm:pl-0 pb-8 w-full'>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-orange-600 h-2.5 rounded-full" style={{width: page === 0? "25%": page === 1? "50%": page === 2? "75%" : "100%"}}></div>
    </div> 

      <div className="flex justify-center items-center">{componentList[page]}</div>
     
     </div>
  // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  )

}
export default ProfileSetup