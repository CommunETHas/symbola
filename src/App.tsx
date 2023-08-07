import {useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork} from "wagmi";
import {Attestooooooor} from "./components";

export function App() {
    /**
     * Wagmi hook for getting account information
     * @see https://wagmi.sh/docs/hooks/useAccount
     */
    const {chain} = useNetwork()
    console.log('chain: ', chain)
    const {chains, error, isLoading, pendingChainId, switchNetwork} =
        useSwitchNetwork()
    const {isConnected} = useAccount();
    const {connect, connectors} = useConnect();
    const {disconnect} = useDisconnect();
    return (
        <>
            <h1>OP Starter Project</h1>
            {!isConnected && (
                <>
                    {connectors.map((connector) => {
                        return (
                            <button className="card" key={connector.id} onClick={() => connect({connector})}>
                                {connector.name}
                            </button>
                        );
                    })}
                    {error && <div>{error.message}</div>}
                </>
            )}
            {isConnected && (
                <>
                    <hr/>
                    <Attestooooooor/>
                    <hr/>
                    {chain && <div>Connected to {chain.name}</div>}

                    {chains.map((x) => (
                        <button
                            disabled={!switchNetwork || x.id === chain?.id}
                            key={x.id}
                            onClick={() => {
                                console.log('chains :::::::::::::', x)
                                switchNetwork?.(x.id)
                            }}
                        >
                            {x.name} {x.id}
                            {isLoading && pendingChainId === x.id && ' (switching)'}
                        </button>
                    ))}

                    <div>{error && error.message}</div>
                    <hr/>
                    <button onClick={() => disconnect()}>
                        Disconnect
                    </button>
                </>
            )}
        </>
    );
}
