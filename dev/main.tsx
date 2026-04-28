import React from "react";
import ReactDOM from "react-dom/client";
import { ChatKit, ChatProvider } from "../src";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChatProvider>
      <ChatKit />
    </ChatProvider>
  </React.StrictMode>,
);
