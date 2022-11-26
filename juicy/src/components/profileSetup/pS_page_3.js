import React , {Compontent} from 'react'


//
// ZAO MI JE MORA SAN
//

const Tag = props => <span className="tag" {...props} />
const Delete = props => <button className="delete" {...props} />
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
      <div>
        <div className="tags-input">
          {this.props.value.map((tag, index) => (
            <Tag>
              {tag}
              <Delete onClick={this.handleRemoveTag} />
            </Tag>
          ))}
          <input type="text" 
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
    <div className="card">
    <div className="step-title">Step3</div> 
    <div>Likes:</div>
    <App></App>
    <div>Dislikes:</div>
    <App></App>

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