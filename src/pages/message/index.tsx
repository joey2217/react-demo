import React, { memo } from 'react'
import { useMessage } from '../../context/MessageContext'

const Message: React.FC = () => {
  const message = useMessage()
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <button onClick={() => message.success('success')}>success</button>
      </div>
      <div className="col-span-4">
        <button onClick={() => message.error('error')}>error</button>
      </div>
      <div className="col-span-4">
        <button onClick={() => message.info('info')}>info</button>
      </div>
    </div>
  )
}

export default memo(Message)
