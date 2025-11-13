import React, { createContext, useState } from 'react';

export const MoktarAIContext = createContext();

export const MoktarAIProvider = ({ children }) => {
  const [language, setLanguage] = useState('so');
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => setMessages((prev) => [...prev, msg]);
  const clearMessages = () => setMessages([]);

  return (
    <MoktarAIContext.Provider value={{
      language,
      setLanguage,
      messages,
      addMessage,
      clearMessages
    }}>
      {children}
    </MoktarAIContext.Provider>
  );
};