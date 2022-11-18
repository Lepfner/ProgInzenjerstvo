import React , {Compontent} from 'react'

function ProfileSetup() {
  return (
    <div className="card">
    <div className="step-title">Step1</div> 
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
    <button>
      Next
    </button>
  </div>
  )

}
export default ProfileSetup