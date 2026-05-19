///

import { GoogleGenAI } from "@google/genai";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// console.log("KEY:", process.env.GOOGLE_API_KEY);

// const genAI = new GoogleGenerativeAI("AIzaSyCUM7F5eNKbejY0yh6EK4JAalsH4g1tx6Q");

// export const model = genAI.getGenerativeModel({

//   model: "gemini-1.5-flash-001",
// });
// console.log("KEY:", process.env.GOOGLE_API_KEY);

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCUM7F5eNKbejY0yh6EK4JAalsH4g1tx6Q",
});

export default ai;
