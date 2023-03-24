import React, { memo } from 'react'
import Button from '../../components/base/Button'
import Card from '../../components/Card'
import { useMessage } from '../../context/MessageContext'

const Message: React.FC = () => {
  const message = useMessage()
  return (
    <Card>
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
  )
}

export default memo(Message)
