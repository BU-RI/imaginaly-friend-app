'use client'
import Textfield from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react'




 function Home() {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ inputvalue, setInputvalue ] = useState<string>("")
  const [ content, setContent ] = useState<string>('');

  const getAzData = async () => {
    setIsLoading(true);
    try {
      console.log('start');
      const message = inputvalue
      const res = await axios.post("./api/azopenai ", { message });
      console.log('途中')
      setContent(res.data[0].message.content);
      console.log("終わり")
    } catch (err) {
      console.log('🚀 ~ file: index.tsx:32 ~ getAzData ~ err:', err);
    }
    setIsLoading(false);
  };

  return (
      <div>
        <h1 className="title">imaginary-friend-app</h1>
        <div className="boxone">
        <Box component="section" sx={{ p: 2, border: '1px dashed black',width: '300px',   flexDirection:'row', display:'flex' }}><Textfield value={inputvalue} sx={{ fontsize: "5px" ,width: "300px" , }}onChange={(e) => setInputvalue(e.target.value)}  placeholder={inputvalue ? "" : "ここにしゃべりたいことを書いてね"} variant="standard" InputProps={{disableUnderline: true}}></Textfield></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed black',width: '300px',   flexDirection:'row', display:'flex', paddingTop: "5px" ,}}>
          {isLoading ?(
          <p >
            Loding...
          </p>
        ):(
        <p>
          友達の解答欄
        </p>
        )
        }
            </Box>
          
        </div>
        
        <div className='boxone'>
        <Button onClick={getAzData} >enter</Button>
        </div>
        
        <Link href="/inputprofile">
        プロフィール入力ページへ
      </Link>
      </div>
  );
}
export default  Home