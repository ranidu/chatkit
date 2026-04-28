import { type ReactNode } from "react";

interface ChatProviderProps {
  children: ReactNode;
}

const ChatProvider = ({ children }: ChatProviderProps) => {
  return <div className="h-screen w-screen">{children}</div>;
};

export default ChatProvider;
