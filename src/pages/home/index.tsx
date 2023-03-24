import React, { memo } from 'react'
import Button from '../../components/base/Button'
import Card from '../../components/Card'
import { useMessage } from '../../context/MessageContext'

const Home: React.FC = () => {
  const message = useMessage()
  return (
    <div>
      <Card title="Message">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <Button type="primary" onClick={() => message.success('success')}>
              success
            </Button>
          </div>
          <div className="col-span-4">
            <Button onClick={() => message.error('error')}>error</Button>
          </div>
          <div className="col-span-4">
            <Button onClick={() => message.info('info')}>info</Button>
          </div>
        </div>
      </Card>
      <h2 className="font-bold text-2xl p-2">Components</h2>
      <Card title="Button" className="mt-4">
        <div className="grid gap-4 grid-cols-12">
          <Button>defalut</Button>
          <Button type="primary">primary</Button>
        </div>
      </Card>
    </div>
  )
}

export default memo(Home)
