import { Routes, Route } from 'react-router-dom'
import FinalsListPage from './components/FinalsListPage'
import FinalsDetailPage from './components/FinalsDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-nba-blue text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">NBA Finals Results</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<FinalsListPage />} />
          <Route path="/finals/:year" element={<FinalsDetailPage />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-gray-400 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm">
          NBA Finals Historical Data
        </div>
      </footer>
    </div>
  )
}

export default App
