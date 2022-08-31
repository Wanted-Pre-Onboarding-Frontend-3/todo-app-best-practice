import './App.css'
import { Api } from './api/api'
import axios, { AxiosError } from 'axios'
import { Layout } from './components/Layout'
import Router from './router'

function App() {
  const Login = async () => {
    try {
      await Api.authSignUp.request('rlaks21232@naver.com', '12341234')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        if (axiosError.response?.status === 400) {
          // @ts-ignore
          alert(axiosError.response.data.message)
          return {
            notFound: true,
          }
        }

        if (axiosError.response?.status === 404) {
          // @ts-ignore
          alert(axiosError.response.data.message)
          return {
            notFound: true,
          }
        }

        // @ts-ignore
        alert(axiosError.response.data.message)
        throw error
      }
    }
  }
  return (
    <Layout>
      <Router />
    </Layout>
  )
}

export default App
