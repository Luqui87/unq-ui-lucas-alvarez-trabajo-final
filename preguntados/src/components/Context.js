import React, { Component, useState } from 'react'


const Context = React.createContext()

class ContextProvider extends Component {

  setDifficulty = (difficulty) => {
    localStorage.setItem('difficulty', difficulty)
  }

  render() {
    const { children } = this.props
    const  difficulty  = localStorage.getItem('difficulty')
    const {setDifficulty} = this
  
    return (
      <Context.Provider
        value={{
          difficulty,
          setDifficulty
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

export { ContextProvider }