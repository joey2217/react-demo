import React, { memo } from 'react'
import Card from '../../components/Card'
import { useMessage } from '../../context/MessageContext'

const Home: React.FC = () => {
  const message = useMessage()
  return (
    <div className="container mx-auto">
      <Card title="Message">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <button
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => message.success('success')}
            >
              success
            </button>
          </div>
          <div className="col-span-4">
            <button
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => message.error('error')}
            >
              error
            </button>
          </div>
          <div className="col-span-4">
            <button
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => message.info('info')}
            >
              info
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default memo(Home)
