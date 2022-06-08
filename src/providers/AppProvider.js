import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext(() => {
  throw new Error('Forgot to wrap component in `AppProvider`')
})

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='Hello'>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useApp = () => useContext(AppContext)

export default AppProvider