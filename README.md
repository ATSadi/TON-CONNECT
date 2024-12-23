# Ton Wallet using react and Ton connect ui react

## Installation
```
git clone https://github.com/ae-atik/ton_wallet.git
npm i
npm run dev
```
### Detailed description
1. In main.jsx file we use TonConnectUIProvider to connect to react ton ui connect. The manifest.json file should contain the url of live site and other desription about the app. The prop of TonConnectUIProvider should contain manifestUrl and it should contain the url to the manifest.json file.
2. In app.jsx file
   ```
   {
        address: 'UQD4qE4-dVUH0zxHn-F-KIALvTj8bfGI7QRn3qoDCxU5mThz',
        amount: tonToNanoton('0.2')
   }
   ```
   Here address is hardcoded and ton coin will be sent to this address.
3. The connect button is pre build component and is used by using component TonConnectButton
4. Upon connection the useTonAddress hook will return the connected user address.
