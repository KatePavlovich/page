import React, { Component } from "react"

export default OriginalComponent =>
  class ToggleOpen extends Component {
    state = {
      isOpen: true
    }

    toggleOpen = e => {
      e.preventDefault()
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }
