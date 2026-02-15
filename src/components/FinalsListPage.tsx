import { Link } from 'react-router-dom'
import finalsData from '../data/finals.json'
import type { Finals } from '../types'
import Card from './common/Card'
import Badge from './common/Badge'

const finals = finalsData as Finals[]

export default function FinalsListPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        NBA Finals Championship History
      </h2>
      <p className="text-gray-600 mb-8">
        Explore the championship series from 2010 to 2024
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {finals
          .slice()
          .reverse()
          .map((final) => (
            <Link
              key={final.year}
              to={`/finals/${final.year}`}
              className="group"
            >
              <Card
                variant="default"
                className={`h-full p-6 border-l-4 transition-all duration-300`}
                style={{
                  borderLeftColor: final.teamColors.champion,
                  backgroundColor: `${final.teamColors.champion}08`,
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 leading-none mb-1">
                      {final.year}
                    </div>
                    <Badge variant="era" className="text-xs">
                      {final.era}
                    </Badge>
                  </div>
                  <Badge variant="series" className="text-xs whitespace-nowrap">
                    {final.series}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {final.champion}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    defeated
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {final.runnerUp}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-600">
                    <span className="font-semibold">Finals MVP:</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {final.mvp}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  )
}
