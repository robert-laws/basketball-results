import { useParams, Link } from 'react-router-dom'
import finalsData from '../data/finals.json'
import type { Finals } from '../types'
import Card from './common/Card'
import StatBox from './common/StatBox'

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
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        ← Back to all Finals
      </Link>

      {/* Hero Section */}
      <div
        className="rounded-lg overflow-hidden shadow-card-lg mb-8 text-white p-8 md:p-12"
        style={{
          background: `linear-gradient(135deg, ${final.teamColors.champion} 0%, ${final.teamColors.runnerUp} 100%)`,
        }}
      >
        <div className="max-w-4xl">
          <div className="text-sm font-semibold opacity-90 mb-2">
            {final.era}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {final.year}
          </h1>
          <p className="text-xl md:text-2xl opacity-95 mb-6">
            {final.champion}
            <span className="mx-2 opacity-75">vs</span>
            {final.runnerUp}
          </p>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="text-xs opacity-80 mb-1">Series</div>
              <div className="font-bold text-lg">{final.series}</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="text-xs opacity-80 mb-1">Finals MVP</div>
              <div className="font-bold text-lg">{final.mvp}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatBox
          label="Champion"
          value={final.champion}
          bgColor="bg-green-50"
          borderColor="border-green-200"
        />
        <StatBox
          label="Series Result"
          value={final.series}
          bgColor="bg-blue-50"
          borderColor="border-blue-200"
        />
        <StatBox
          label="Finals MVP"
          value={final.mvp}
          bgColor="bg-yellow-50"
          borderColor="border-yellow-200"
        />
      </div>

      {/* Narrative Section */}
      {final.narrative && (
        <Card variant="elevated" className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {final.narrative}
          </p>
        </Card>
      )}

      {/* Significance & Notable Moments */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {final.significance && (
          <Card variant="elevated" className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Historical Significance
            </h3>
            <p className="text-gray-700">{final.significance}</p>
          </Card>
        )}

        {final.notableMoments && final.notableMoments.length > 0 && (
          <Card variant="elevated" className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Notable Moments
            </h3>
            <ul className="space-y-2">
              {final.notableMoments.map((moment, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">•</span>
                  <span>{moment}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      {/* Game-by-Game Results */}
      <Card variant="elevated" className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Game-by-Game Results
        </h2>

        <div className="space-y-4">
          {final.games.map((game) => {
            const isChampionWin = game.winner === final.champion
            return (
              <div
                key={game.game}
                className={`p-4 rounded-lg border-l-4 transition-all ${
                  isChampionWin
                    ? 'bg-green-50 border-green-400'
                    : 'bg-gray-50 border-gray-400'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      Game {game.game}
                    </div>
                    <div
                      className={`text-lg font-bold ${
                        isChampionWin
                          ? 'text-green-700'
                          : 'text-gray-700'
                      }`}
                    >
                      {game.winner}
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right gap-1">
                    <div className="text-2xl font-bold text-gray-900 font-mono">
                      {game.score}
                    </div>
                    <div className="text-sm text-gray-600">
                      {game.location}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
