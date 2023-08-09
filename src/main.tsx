import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import "./styles/global.css";
import { RainbowKitProvider, RainbowKitAuthenticationProvider } from "@rainbow-me/rainbowkit";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/router";

import { config, chains } from "./wagmi";
import {rainbowAuthenticationAdapter} from "./utils/rainbowCustomAuthent";

// @TODO: define status in  RainbowKitAuthenticationProvider.status: https://www.rainbowkit.com/docs/custom-authentication
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
        <RainbowKitAuthenticationProvider adapter={rainbowAuthenticationAdapter} status={'loading'}>
            <RainbowKitProvider chains={chains}>
                <RouterProvider router={router} />
             </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
