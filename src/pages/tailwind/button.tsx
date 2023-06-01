import React, { memo } from 'react'
import Button from '../../components/base/Button'

const ButtonPage: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button type="default"> default </Button>
      <Button type="primary"> primary </Button>
      <Button type="outline"> outline </Button>
      <Button type="text"> text </Button>
      <Button type="default" size="default">
        default
      </Button>
      <Button type="default" size="small">
        small
      </Button>
      <Button type="default" size="large">
        large
      </Button>
      <Button type="primary" size="default" loading>
        loading
      </Button>
      <Button type="outline" size="default" loading>
        loading
      </Button>
      <Button type="primary" size="default" disabled>
        disabled
      </Button>
    </div>
  )
}

export default memo(ButtonPage)
