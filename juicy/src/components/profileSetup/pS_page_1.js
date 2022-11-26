import React , {Compontent} from 'react'

const PS1 = ({page, setPage}) => {
  return (
    <div className="card">
    <div className="step-title">Step1</div> 
    <div>Name:</div>
    <input
      type="text"
      placeholder="placeholder"
      className="form-group"
    />
    <div>Surname:</div>
    <input
      type="text"
      className="form-group"
      placeholder="placeholder"
    />
    <div>Date Of Birth:</div>
    <input
      type="date"
      className="form-group"
    />
    <div>Gender:</div>
     <div>
        <input type="radio" className="form-group" value="Male" name="gender" />Male
        <input type="radio" className="form-group" value="Female" name="gender" />Female
      </div>
    <button
        onClick={() => {
          setPage(page + 1);
        }}>
        Next
      </button>
  </div>

  // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  )

}
export default PS1