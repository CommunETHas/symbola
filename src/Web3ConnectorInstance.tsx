// Web3Auth Libraries
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Chain } from "wagmi";

export default function Web3AuthConnectorInstance(chains: Chain[]) {
    // Create Web3Auth Instance
    const name = "Symbola";
    const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x" + chains[0].id.toString(16),
        rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
        displayName: chains[0].name,
        tickerName: chains[0].nativeCurrency?.name,
        ticker: chains[0].nativeCurrency?.symbol,
        blockExplorer: chains[0].blockExplorers?.default.url[0] as string,
    };

    const web3AuthInstance = new Web3Auth({
        clientId: import.meta.env.VITE_WEB3AUTH_CLIENT_ID,
        chainConfig,
        uiConfig: {
            appName: name,
            theme: "light",
            loginMethodsOrder: ["github", "google"],
            defaultLanguage: "en",
            appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
            modalZIndex: "2147483647",
        },
        web3AuthNetwork: "cyan",
        enableLogging: true,
    });

    // Add openlogin adapter for customisations
    // const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });
    // const openloginAdapterInstance = new OpenloginAdapter({
    //     privateKeyProvider,
    //     adapterSettings: {
    //         network: "cyan",
    //         uxMode: "popup",
    //         whiteLabel: {
    //             name: "Your app Name",
    //             logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
    //             logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
    //             defaultLanguage: "en",
    //             dark: true, // whether to enable dark mode. defaultValue: false
    //         },
    //     },
    // });
    // web3AuthInstance.configureAdapter(openloginAdapterInstance);
    //
    return new Web3AuthConnector({
        chains: chains as any,
        options: {
            web3AuthInstance,
        },
    });
}