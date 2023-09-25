import {
  useState,
  useContext
} from 'react';
import './assets/styles/App.css'
import {
  Outlet,
} from 'react-router-dom';
import {
  Header,
  Footer,
  Sidebar,
} from './components/common'
import {
  Auth
} from './components/page'
import AuthContext from './context/AuthProvider';

function App() {
  const { success } = useContext(AuthContext) as any

  return (
    <>
      {
        success ?
          <>
            <section className='grid grid-cols-[15rem_auto]'>
              <Sidebar />
              <section>
                <Header />
                <main className='mx-auto max-w-full h-fit py-2 px-2 sm:px-6 sm:py-6 lg:px-8 lg:py-8'>
                  <Outlet />
                </main>
              </section>
            </section>
            <Footer />
          </>
          :
          <Auth />
      }
    </>
  )
}

export default App
