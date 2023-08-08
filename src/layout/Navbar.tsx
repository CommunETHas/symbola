import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, Outlet } from "@tanstack/router";
import { useAccount } from "wagmi";

export function Navbar() {
  const { isConnected } = useAccount();
  return (
    <>
      <div className="header">
        <h1>Symbola</h1>
        <div className="header-navigation">
          {isConnected && (
            <>
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/create-ticketing">Create Ticketing</Link>
            </>
          )}
          <ConnectButton />
        </div>
      </div>
      <Outlet />
    </>
  );
}
