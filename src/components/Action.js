import React from 'react';

export default class Action extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '',
      suggestions: []
    }

    this.handleAction = this.handleAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAction (e)  {
    e.preventDefault();
    this.props.onHandleAction(e.target.query.value); 
  }

  handleChange(e) {
    this.setState({val: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAction} className='searchForm'>
          <input 
            type='text' 
            name='query'
            placeholder='Search Movie Title'
            className='searchInput' 
            value={this.state.val} 
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}