import React , {Compontent} from 'react'


//
// ZAO MI JE MORA SAN
//

const Tag = props => <span className="flex justify-between h-14 rounded-lg m-4 bg-gray-300 w-1/4" {...props} />
const Delete = props => <button className="bg-orange-500 rounded-md p-2 text-white hover:bg-orange-600" {...props} />
const Help = props => <span className="help" {...props} />

class TagsInput extends React.Component {
  constructor () {
    super()
    this.state = {
      newTag: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleRemoveTag = this.handleRemoveTag.bind(this)
  }
  
  handleChange (e) {
    this.setState({ newTag: e.target.value })
  }
  
  handleKeyDown (e) {
    if (e.keyCode === 13 && e.target.value !== '')  {
      let newTag = this.state.newTag.trim()

      if (this.props.value.indexOf(newTag) === -1) {
        this.props.value.push(newTag)
        this.setState({ newTag: '' })
      }
      e.target.value = ''
    }
  }
  
  handleRemoveTag (e) {
    let tag = e.target.parentNode.textContent.trim()
    let index = this.props.value.indexOf(tag)
    this.props.value.splice(index, 1)
    this.setState({ newTag: '' })
  }
  
  render () {
    return (
      <div className='w-full'>
        <div className=''>
          {this.props.value.map((tag, index) => (
            <Tag>
              {tag}
              <Delete onClick={this.handleRemoveTag} />
            </Tag>
          ))}
          <input type="text" 
          className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown} />
        </div>
        <Help>hit 'Enter' to add</Help>
      </div>
    )
  }
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tags: []
    }
  }
  
  handleTagsChange (tags) {
    this.setState({ tags: tags })
  }
  
  render () {
    return (
      <TagsInput value={this.state.tags} onChange={this.handleTagsChange} />
    )
  }
}





const PS3 = ({page, setPage}) => {
  return (
    <div className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full">
    <div className="step-title">Step3</div> 
    <div>Likes:</div>
    <App className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"></App>
    <div>Dislikes:</div>
    <App className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"></App>
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
          alert("You've successfully submitted this form");
        }}>
        Submit
      </button>
      <br />
     


      </div>
  </div>

  // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  )

}
export default PS3