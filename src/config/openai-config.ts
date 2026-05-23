//

// import { Configuration } from "openai";

// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: process.env.OPEN_AI_SECRET,
//     organization: process.env.OPEN_AI_ORGANIZATION_ID,
//   });
//   return config;
// };
import OpenAI from "openai";

export const configureOpenAI = () => {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
};
