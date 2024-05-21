import { AzOpenaiRepository } from './azopenaiRepository';

export const getAzOpenAIData = async (inputvalue: string) => {
  try {
    const repo = new AzOpenaiRepository();
    return await repo.getAzOpenAIData(inputvalue);
  } catch (err) {
    return err;
  }
};