import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    //track 'editing' state.
    this.state = {
      editing: false
    };
  }
  render() {
    if(this.state.editing){
      return this.renderEdit();
    }
    return this.renderNode();
  }
  renderEdit = () => {
    return <input type="text"
      autoFocus={true}
      placeholder={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
  };
  renderNode = () => {
    return <div onClick={this.edit}>{this.props.task}</div>;
  };
  edit = () => {
    this.setState({
      editing: true
    });
  };
  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit = (e) => {
    if(this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }
    this.setState({
      editing: false
    });
  };
}
