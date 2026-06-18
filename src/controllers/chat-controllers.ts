//
import { NextFunction, Request, Response } from "express";
// import { ChatCompletionRequestMessage } from "openai";
import { GoogleGenAI } from "@google/genai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

// import ai from "../config/gemini-config.js";
import User from "../models/User.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    // console.log(user);

    if (!user)
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });

    // grab chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    })) as ChatCompletionMessageParam[];

    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // send all chats with new one to openAI API

    // const config = configureOpenAI();
    // const openai = new OpenAIApi(config);

    // get latest response
    // const chatResponse = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages: chats,
    // });

    //tring leastes api for gpt-4o-mini

    // const openai = configureOpenAI();
    // const chatResponse = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: chats,
    // });

    // const assistantMessage = chatResponse.choices[0].message;

    // user.chats.push({
    //   role: "assistant",
    //   content: assistantMessage.content || "",
    // });

    // user.chats.push(chatResponse.data.choices[0].message);

    //trying gemeni api

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
    });

    const assistantReply = response.text || "No response";

    user.chats.push({
      role: "assistant",
      content: assistantReply,
    });

    await user.save();

    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
