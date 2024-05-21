import { getAzOpenAIData } from '../../models/azopenaiApplicationService'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function Azopenai(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
        console.log("catched")
        const message = req.body.message;
        const data = await getAzOpenAIData(message);
        res.json(data);
    } catch (error) {
      console.log('🚀 ~ file: hello.ts:13 ~ error:', error);
    }
  }