import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Modal, Typography } from '@mui/material'
import { CHAIN, TonConnectButton, TonConnectUI, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react'
// import './style.css'

function App() {

  // const wallet = useTonWallet();
  const address = useTonAddress('');
  const [message, setMessage] = useState('');
  const[modalOpen, setModalOpen] = useState(false);
  const [tonConnetUI, setOptions] = useTonConnectUI();
  const tonToNanoton = (value)=>{
    if(value !== ''){
      return value*1e9;
    } else return '';
  }
  const transaction = {
    validUntil: Math.floor(new Date()/1000)+360,
    network: CHAIN.MAINNET,
    messages: [
      {
        address: 'UQD4qE4-dVUH0zxHn-F-KIALvTj8bfGI7QRn3qoDCxU5mThz',
        amount: tonToNanoton('0.001')
      }
    ]

  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(tonConnetUI.account);
      if(tonConnetUI.account.chain === CHAIN.MAINNET){
        const res = await tonConnetUI.sendTransaction(transaction);
        if (res) {
          console.log("transaction was successfull");
          setMessage("transaction was successfull")
          setModalOpen(true)
        }
      } else {
        setMessage("Please use MAINNET account for transaction");
        setModalOpen(true);
      }
    } catch (error) {
      console.log("Transaction failed");
      setMessage("transaction failed");
      setModalOpen(true)
    }

  }

  return (
    <div className="app">
      {
        message !== '' && <Modal open={modalOpen} onClose={()=>setModalOpen(false)} ><Typography>{message}</Typography></Modal>
      }
      <>
        {
          address === '' &&
          <span>Connect wallet</span>
        }
        <div className='container'>
          <TonConnectButton />
          {
            address !== '' &&
            <Button style={{ margin: '10%', borderRadius: '16px' }} variant='contained' onClick={handleClick}>Claim</Button>
          }
        </div>
      </>
    </div>
  )
}

export default App
