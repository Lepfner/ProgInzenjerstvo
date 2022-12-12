import React from "react";
import { toast } from "react-hot-toast";

const Tag = (props) => (
  <div
    className="flex justify-between p-2 h-auto rounded-lg m-2 bg-gray-300 break-all lg:w-[30%]"
    {...props}
  />
);
const Delete = (props) => (
  <button
    className="flex items-center justify-center ml-4 mb-2 h-8 w-8 bg-orange-500 rounded-md p-2 
              text-white hover:bg-orange-600 text-2xl"
    {...props}
  >
    &times;
  </button>
);

const Help = (props) => (
  <div className="help mb-4 lg:text-xl md: text-lg sm: text-lg" {...props} />
);

class Tags extends React.Component {
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
    let { type, tags, updateData } = this.props;
    if (e.keyCode === 13 && e.target.value !== "") {
      let newTag = this.state.newTag.trim();

      if (tags.indexOf(newTag) === -1) {
        updateData({ [type]: [...tags, newTag] });
      } else {
        toast.error("tag already added!");
      }
      e.target.value = "";
    }
  }

  handleRemoveTag(e) {
    let tag = e.target.parentNode.textContent.trim();
    let index = this.props.tags.indexOf(tag);
    this.props.tags.splice(index, 1);
    this.setState({ newTag: "" });
  }

  render() {
    return (
      <div className="w-full">
        <input
          type="text"
          className="h-14 px-2 my-2 rounded-lg bg-gray-300 w-full"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <Help>hit 'Enter' to add</Help>

        <div className="flex flex-wrap max-sm:flex-col lg:text-xl md: text-lg sm: text-md">
          {this.props.tags.map((tag, index) => (
            <Tag key={index}>
              {tag}
              <Delete onClick={this.handleRemoveTag} />
            </Tag>
          ))}
        </div>
      </div>
    );
  }
}

export default Tags;
