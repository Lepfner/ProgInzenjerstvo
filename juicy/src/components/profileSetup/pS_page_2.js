import React , {Compontent} from 'react'

const PS2 = ({page, setPage}) => {
  return (
    <div className="card">
    <div className="step-title">Step2</div>
    <div>Status:</div> 
    <select>
    <option value="unmarried">unmarried</option>
    <option value="married">married</option>  
    
    </select>
    <div>Nationality:</div> 
    <input
      type="text"
      className="form-group"
      placeholder="placeholder"
    />
    <div>Religion:</div> 
    <textarea
      className="form-group"
      placeholder="placeholder"
    />
     <button
        onClick={() => {
          setPage(page + 1);
        }}>
        Next
      </button>
      <br/>
      <button
        onClick={() => {
          setPage(page - 1);
        }}>
        Previous
      </button>
  </div>

  // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  )

}
export default PS2