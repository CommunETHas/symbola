import {useAccount, useConnect, useDisconnect} from "wagmi";
import { Attestooooooor } from "./components";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { address, connector, isConnected } = useAccount();
    const { connect, connectors, error } = useConnect();
    const { disconnect } = useDisconnect();
    console.log('connectors: ', connectors)
  return (
    <>
      <h1>OP Starter Project</h1>
        {!isConnected && (
            <>
                {connectors.map((connector) => {
                    return (
                        <button className="card" key={connector.id} onClick={() => connect({ connector })}>
                            {connector.name}
                        </button>
                    );
                })}
                {error && <div>{error.message}</div>}
            </>
        )}

      {isConnected && (
        <>
          <hr />
          <Attestooooooor />
          <hr />
          <button onClick={() => disconnect()}>
            Disconnect
          </button>
        </>
      )}
    </>
  );
}
