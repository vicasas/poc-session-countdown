import { createContext, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createTab, removeTab } from '../utils/tabs'

window.tabId =  createTab()

const AppContext = createContext(() => {
  throw new Error('Forgot to wrap component in `AppProvider`')
})

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

const AppProvider = ({ children }) => {
  useEffect(() => {
    window.onbeforeunload = () => {
      removeTab()
    }

    window.onfocus = () => {}
  }, [])

  return <AppContext.Provider value='Hello'>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useApp = () => useContext(AppContext)

export default AppProvider