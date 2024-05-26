import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import themeConfigs from './config/theme.config'
import { ToastContainer } from 'react-toastify'

function App() {
  const { themeMode } = useSelector((state: RootState) => state.themeMode)
  return (
    <>
      <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme={themeMode}
        />
      </ThemeProvider>
    </>
  )
}

export default App
