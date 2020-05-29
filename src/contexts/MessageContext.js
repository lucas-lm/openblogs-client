import React, { useReducer, createContext, useContext } from 'react'

const initialState = []

const reducer = (messages, action) => {
  const { type, payload } = action
  switch (type) {
    case 'reset':
      return []
    case 'set':
      return payload
    case 'addMessage':
      return [...messages, payload]
    case 'removeLast':
      return messages.slice(0, -1)
    case 'removeFirst':
      return messages.slice(1)
    case 'addAndRemoveFirst':
      return [...messages.slice(1), payload]
    case 'removeMessageByIndex':
      return [
        ...messages.slice(0, payload.index),
        ...messages.slice(payload.index + 1),
      ]
    default:
      throw new Error('invalid action type')
  }
}

const MessageContext = createContext()

const MessageContextProvider = ({ children }) => {
  const messagesState = useReducer(reducer, initialState)
  return (
    <MessageContext.Provider value={messagesState}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => useContext(MessageContext)
export default MessageContextProvider
