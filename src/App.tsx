import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import ReportedHours from './ReportedHours'
import ReportHours from './ReportHours'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Home from './Home'

function App () {
  const [user] = useAuthState(auth)

  return (
    <div className="flex bg-[url('/layered-waves-haikei.svg')] bg-cover place-items-center justify-center h-screen">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/Report" element={<ReportHours />} />
        <Route path="/Hours" element={(user != null) && <ReportedHours uid={user.uid} />} />
      </Routes>
      {user != null && <Sidebar />}
    </div>
  )
}

export default App
