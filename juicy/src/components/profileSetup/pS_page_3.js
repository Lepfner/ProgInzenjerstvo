import React, { Compontent } from "react";

//
// ZAO MI JE MORA SAN
//

const Tag = (props) => (
  <div
    className="flex justify-between p-2 h-auto rounded-lg m-4 bg-gray-300 w-1/3 break-all"
    {...props}
  />
);
const Delete = (props) => (
  <button
    className="flex items-center justify-center ml-4 mb-2 h-8 w-8 bg-orange-500 rounded-md p-2 
              text-white hover:bg-orange-600 "
    {...props}
  >
    X
  </button>
);
const Help = (props) => (
  <div className="help mb-4 lg:text-xl md: text-lg sm: text-lg" {...props} />
);

class TagsInput extends React.Component {
  constructor() {
    super();
    this.state = {
      newTag: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  }

  handleChange(e) {
    this.setState({ newTag: e.target.value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newTag = this.state.newTag.trim();

      if (this.props.value.indexOf(newTag) === -1) {
        this.props.value.push(newTag);
        this.setState({ newTag: "" });
      }
      e.target.value = "";
    }
  }

  handleRemoveTag(e) {
    let tag = e.target.parentNode.textContent.trim();
    let index = this.props.value.indexOf(tag);
    this.props.value.splice(index, 1);
    this.setState({ newTag: "" });
  }

  render() {
    return (
      <div className="w-full">
        <div>
          {this.props.value.map((tag, index) => (
            <Tag key={index}>
              {tag}
              <Delete onClick={this.handleRemoveTag} />
            </Tag>
          ))}
          <input
            type="text"
            className="h-14 px-2 rounded-lg bg-gray-300 w-full"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <Help>hit 'Enter' to add</Help>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
    };
  }

  handleTagsChange(tags) {
    this.setState({ tags: tags });
  }

  render() {
    return (
      <TagsInput value={this.state.tags} onChange={this.handleTagsChange} />
    );
  }
}

const PS3 = ({ page, setPage }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full lg:text-3xl md: text-2xl sm: text-xl">
      <div className="step-title mb-4 text-xl">Step 3</div>
      <div>Likes:</div>
      <App className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"></App>
      <div>Dislikes:</div>
      <App className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"></App>
      <div
        className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col 
                      lg:text-xl md:text-lg sm: text-lg"
      >
        <button
          className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
          onClick={() => {
            alert("You've successfully submitted this form");
          }}
        >
          Submit
        </button>
        <br />
      </div>
    </div>

    // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  );
};
export default PS3;
