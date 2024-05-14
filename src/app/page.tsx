'use client'
import Textfield from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { useState } from 'react'

export default function Home() {
  const [ inputvalue, setInputvalue ] = useState("")
  return (
      <div>
        <h1 className="title">imaginary-friend-app</h1>
        <div className="boxone">
        <Box component="section" sx={{ p: 2, border: '1px dashed black',width: '300px',   flexDirection:'row', display:'flex' }}><Textfield value={inputvalue} sx={{ fontsize: "5px" ,width: "300px" , }}onChange={(e) => setInputvalue(e.target.value)}  placeholder={inputvalue ? "" : "ここにしゃべりたいことを書いてね"} variant="standard" InputProps={{disableUnderline: true}}></Textfield></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed black',width: '300px',   flexDirection:'row', display:'flex', paddingTop: "5px" ,}}><p>友達の返答欄</p></Box>
        </div>
      </div>
  );
}
