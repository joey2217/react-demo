import React, { memo } from 'react'
import { Button, Space, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-semibold">Home</h2>
      <Space>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button shape="circle" icon={<SearchOutlined />} />
        <Input.Search
          placeholder="input search text"
          allowClear
          size="large"
        />
      </Space>
    </div>
  )
}

export default memo(Home)
