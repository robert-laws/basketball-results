import { Link } from 'react-router-dom'
import finalsData from '../data/finals.json'
import type { Finals } from '../types'

const finals = finalsData as Finals[]

export default function FinalsListPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Championship History
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {finals.map((final) => (
          <Link
            key={final.year}
            to={`/finals/${final.year}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-nba-red"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-3xl font-bold text-nba-blue">
                {final.year}
              </span>
              <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                {final.series}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {final.champion}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              defeated {final.runnerUp}
            </p>
            <div className="text-sm text-gray-500">
              <span className="font-medium">Finals MVP:</span> {final.mvp}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
