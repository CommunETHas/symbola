import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {WagmiConfig} from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import "./styles/global.css"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";


import { App } from "./App";
import { config, chains } from "./wagmi";

/**
 * Configures wagmi connectors for rainbowkit
 * @see https://www.rainbowkit.com/docs/custom-wallet-list
 * @see https://wagmi.sh/react/connectors
 */
/**
 * Creates a singleton wagmi client for the app
 * @see https://wagmi.sh/react/client
 */

/**
 * Root providers and initialization of app
 * @see https://reactjs.org/docs/strict-mode.html
 * @see https://wagmi.sh/react/WagmiConfig
 * @see https://www.rainbowkit.com/docs/installation
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
        <App />
        </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
