import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const rainbowAuthenticationAdapter = createAuthenticationAdapter({
    getNonce: async () => {
        const response = await fetch(`${baseUrl}/nonce`);
        return await response.text();
    },

    createMessage: ({ nonce, address, chainId }) => {
        return new SiweMessage({
            domain: window.location.host,
            address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId,
            nonce,
        });
    },

    getMessageBody: ({ message }) => {
        return message.prepareMessage();
    },

    verify: async ({ message, signature }) => {
        const verifyRes = await fetch(`${baseUrl}/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, signature }),
        });

        return Boolean(verifyRes.ok);
    },

    signOut: async () => {
        await fetch(`${baseUrl}/logout`);
    },
});