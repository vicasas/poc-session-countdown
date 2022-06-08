import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext(() => {
  throw new Error('Forgot to wrap component in `AppProvider`')
})

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

const AppProvider = ({ children }) => {
  // const [serverDate, setServerDate] = useState(new Date().getTime())
  const serverDate = new Date().getTime()
  const targetDate = 1654905455000

  const values = useMemo(() =>  ({ currentDate: serverDate, targetDate }), [serverDate, targetDate])

  // useEffect(() => {
  //   setServerDate(new Date().getTime())
  // }, [])

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useApp = () => useContext(AppContext)

export default AppProvider