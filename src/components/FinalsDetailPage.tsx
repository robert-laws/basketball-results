import { useParams, Link } from 'react-router-dom'
import finalsData from '../data/finals.json'
import type { Finals } from '../types'

const finals = finalsData as Finals[]

export default function FinalsDetailPage() {
  const { year } = useParams<{ year: string }>()
  const final = finals.find((f) => f.year === Number(year))

  if (!final) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Finals not found
        </h2>
        <Link to="/" className="text-nba-blue hover:underline">
          ← Back to all Finals
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center text-nba-blue hover:underline mb-6"
      >
        ← Back to all Finals
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-nba-blue text-white p-6">
          <h2 className="text-4xl font-bold mb-2">{final.year} NBA Finals</h2>
          <p className="text-xl opacity-90">
            {final.champion} vs {final.runnerUp}
          </p>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-sm text-green-600 font-medium mb-1">
                Champion
              </div>
              <div className="text-2xl font-bold text-green-800">
                {final.champion}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 font-medium mb-1">
                Series Result
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {final.series}
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="text-sm text-yellow-600 font-medium mb-1">
                Finals MVP
              </div>
              <div className="text-2xl font-bold text-yellow-800">
                {final.mvp}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Game-by-Game Results
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">
                    Game
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-700">
                    Winner
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-700">
                    Score
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-700">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {final.games.map((game) => (
                  <tr
                    key={game.game}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">Game {game.game}</td>
                    <td
                      className={`p-3 ${
                        game.winner === final.champion
                          ? 'text-green-700 font-medium'
                          : 'text-gray-600'
                      }`}
                    >
                      {game.winner}
                    </td>
                    <td className="p-3 font-mono">{game.score}</td>
                    <td className="p-3 text-gray-600">{game.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
