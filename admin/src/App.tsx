import './assets/styles/App.css'
import {
  Outlet,
  useLocation,
} from 'react-router-dom';
import {
  Header,
  Footer,
  Sidebar,
} from './components/common'
import {
  Auth
} from './components/page'

function App() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname === '/' ?
          <Auth />
          :
          <>
            <section className='grid grid-cols-[15rem_auto]'>
              <Sidebar />
              <section>
                <Header />
                <main className='mx-auto max-w-full h-screen py-2 px-2 sm:px-6 sm:py-6 lg:px-8 lg:py-8'>
                  <Outlet />
                </main>
              </section>
            </section>
            <Footer />
          </>
      }
    </>
  )
}

export default App
