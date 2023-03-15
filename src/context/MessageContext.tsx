import { createPortal } from 'react-dom'
import React, { useCallback, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import {
  IcBaselineCheckCircle,
  IcBaselineError,
  IcBaselineInfo,
} from '../components/Icons'
import type { ReactNode } from 'react'

type MessageType = 'success' | 'error' | 'info'

interface MessageOption {
  type: MessageType
  duration: number
}

type MessageMethod = (
  content: string,
  option?: Partial<Omit<MessageOption, 'type'>>
) => void

interface MessageProps {
  success: MessageMethod
  error: MessageMethod
  info: MessageMethod
}

const MessageContext = React.createContext<MessageProps>({
  success: () => {},
  error: () => {},
  info: () => {},
})

export function useMessage() {
  return React.useContext(MessageContext)
}

interface Props {
  message: string
  type: MessageType
}

const MessageTypeIcons: { [props in MessageType]: ReactNode } = {
  success: <IcBaselineCheckCircle className="w-6 h-6 text-teal-600" />,
  error: <IcBaselineError className="w-6 h-6 text-yellow-500" />,
  info: <IcBaselineInfo className="w-6 h-6 text-gray-500" />,
}

const MessageContent: React.FC<Props> = ({ message, type }) => {
  return (
    <div
      role="alert"
      className="fixed top-8 z-50 w-fit min-w-[200px] left-4 right-4 ml-auto mr-auto rounded-xl border bg-white border-gray-100 p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex items-start gap-4">
        <span>{MessageTypeIcons[type]}</span>
        <div className="flex-1">
          <strong className="block text-center font-medium text-gray-900 dark:text-white">
            {message}
          </strong>
        </div>
      </div>
    </div>
  )
}

const DEFALUT_MESSAGE_OPTION: MessageOption = {
  type: 'info',
  duration: 2000,
}

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')
  const [messageOption, setMessageOption] = useState(DEFALUT_MESSAGE_OPTION)

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false)
      }, messageOption.duration)
    }
  }, [messageOption.duration, showModal])

  const messageMethod = useCallback(
    (type: MessageType) =>
      (content: string, option?: Partial<Omit<MessageOption, 'type'>>) => {
        setShowModal(true)
        setMsg(content)
        setMessageOption((opt) => ({ ...opt, ...option, type }))
      },
    []
  )

  return (
    <MessageContext.Provider
      value={{
        success: messageMethod('success'),
        error: messageMethod('error'),
        info: messageMethod('info'),
      }}
    >
      {showModal &&
        createPortal(
          <MessageContent message={msg} type={messageOption.type} />,
          document.body
        )}
      {children}
    </MessageContext.Provider>
  )
}
