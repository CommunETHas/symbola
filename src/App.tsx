import { ConnectButton } from "@rainbow-me/rainbowkit";

export function App() {
    /**
     * Wagmi hook for getting account information
     * @see https://wagmi.sh/docs/hooks/useAccount
     */
    return (
        <>
            <div className="header">
                <h1>Symbola</h1>
                <ConnectButton />
            </div>
        </>
    );
}
