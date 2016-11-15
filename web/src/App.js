const React = require('react')

const xhr = require('xhr')

module.exports = React.createClass({
  getInitialState() {
    return {
      foo: ''
    }
  },
  componentDidMount () {
    xhr.post('http://localhost:4000/', {
      json: { foo: 'bar'}
    }, (e,r,b) => {
      if (e) return console.log(e)
      this.setState({
        foo: b
      })
    })
  },
  render () {
    return (
      <div>
        <h1>{JSON.stringify(this.state.foo)}</h1>
      </div>
    )
  }
})
