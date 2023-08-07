import {useAccount, useDisconnect, useNetwork} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function App() {
    /**
     * Wagmi hook for getting account information
     * @see https://wagmi.sh/docs/hooks/useAccount
     */
    const {isConnected} = useAccount();
    const {disconnect} = useDisconnect();
    return (
        <>
            <h1>OP Starter Project</h1>
                    <ConnectButton />
            {isConnected && (
                <>
                    <hr />
                    <button onClick={() => disconnect()}>
                        Disconnect
                    </button>
                </>
            )}
        </>
    );
}
