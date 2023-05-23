import React, { memo, useState } from 'react'
import Modal from '../../components/Modal'

const PaginationPage: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="text-center">
      <button onClick={() => setOpen(true)}>open</button>
      <Modal open={open} onClose={() => setOpen(false)} title="modal">
        <h2>Hello</h2>
      </Modal>
    </div>
  )
}

export default memo(PaginationPage)
