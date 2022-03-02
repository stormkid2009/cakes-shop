import '../styles/globals.css'
import MainLayout from '../components/mainLayout'
import ReviewLayout from '../components/reviewLayout'

const layouts = {
  main:MainLayout,
  review:ReviewLayout
}

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children)=> <>{children}</>)
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
