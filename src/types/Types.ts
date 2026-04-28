export interface ChatConfig {
  baseUrl: string;
  wsUrl: string;
  authToken: string;
  currentUserId: string;
  theme?: 'light' | 'dark';
  onMessageReceived?: (message: ChatMessage) => void;
}

export interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  channelId: string;
  createdAt: string;
  pending?: boolean;
}

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  isOnline?: boolean;
}