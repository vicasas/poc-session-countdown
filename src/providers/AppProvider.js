import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useInterval from '../hooks/useInterval'

const AppContext = createContext(() => {
  throw new Error('Forgot to wrap component in `AppProvider`')
})

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

const AppProvider = ({ children }) => {
  const [time, setTime] = useState(0)

  useInterval(() => {
    console.log('tick')
    setTime((current) => current + 1 )
  }, [5000])

  return <AppContext.Provider value={time}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useApp = () => useContext(AppContext)

export default AppProvider