import React, { memo } from 'react'
import Pagination from '../../components/Pagination'

const PaginationPage: React.FC = () => {
  return (
    <div className="text-center">
      <h2>total = 50</h2>
      <Pagination total={50} />
      <h2>total = 500</h2>
      <Pagination total={500} />
    </div>
  )
}

export default memo(PaginationPage)
