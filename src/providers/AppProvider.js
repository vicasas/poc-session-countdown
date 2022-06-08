import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext(() => {
  throw new Error('Forgot to wrap component in `AppProvider`')
})

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

const AppProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState()
  const [targetDate, setTargetDate] = useState()

  const values = useMemo(() =>  ({ currentDate: currentDate, targetDate }), [serverDate, targetDate])

  useEffect(() => {
    setTargetDate(new Date().getTime())
    setCurrentDate(1654905455000)
  }, [])

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useApp = () => useContext(AppContext)

export default AppProvider