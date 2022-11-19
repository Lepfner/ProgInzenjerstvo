import React , {Compontent} from 'react'

const PS3 = ({page, setPage}) => {
  return (
    <div className="card">
    <div className="step-title">Step3</div> 
    <input
      type="text"
      placeholder="placeholder"
      className="form-group"
    />
    <input
      type="text"
      className="form-group"
      placeholder="placeholder"
    />
    <input
      type="text"
      className="form-group"
      placeholder="placeholder"
    />
     <button
        onClick={() => {
          alert("You've successfully submitted this form");
        }}>
        Submit
      </button>
      <br />
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
export default PS3