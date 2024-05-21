import { getAzOpenAIData } from '../models/azopenaiApplicationService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
        console.log("catched")
        const inputvalue = req.body.inputvalue;
        const data = await getAzOpenAIData(inputvalue);
        res.json(data);
    } catch (error) {
      console.log('🚀 ~ file: hello.ts:13 ~ error:', error);
    }
  }