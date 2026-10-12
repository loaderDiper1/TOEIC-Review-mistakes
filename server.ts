import express from "express";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = Number(process.env.PORT || 3000);

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  const FALLBACK_QUESTIONS = [
    {
      id: "p5-1",
      part: 5,
      question: "Mr. Davis requested that all department heads submit their annual budget proposals ---- than Friday afternoon.",
      options: ["(A) later", "(B) latest", "(C) no later", "(D) late"],
      correctAnswer: "(C)",
      explanation: "The phrase 'no later than' is a standard fixed expression indicating a deadline."
    },
    {
      id: "p5-2",
      part: 5,
      question: "The marketing team launched a comprehensive advertising campaign to boost sales for their ---- released software.",
      options: ["(A) newly", "(B) newest", "(C) new", "(D) newness"],
      correctAnswer: "(A)",
      explanation: "An adverb ('newly') is needed to modify the past participle adjective 'released'."
    },
    {
      id: "p5-3",
      part: 5,
      question: "All employees must display their identification badges ---- while inside the manufacturing facility.",
      options: ["(A) prominent", "(B) prominence", "(C) prominently", "(D) more prominent"],
      correctAnswer: "(C)",
      explanation: "The verb 'display' requires an adverb ('prominently') to describe the manner of display."
    }
  ];

  app.post("/api/ai/generate-practice", async (req, res) => {
    const { part, topic, count = 3 } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.json({ questions: FALLBACK_QUESTIONS.slice(0, count) });
    }

    try {
      const prompt = `Generate ${count} authentic TOEIC Reading practice questions for Part ${part || 5} focusing on ${topic || "general business English"}. 
      Return valid JSON with an array of objects containing:
      - id (string)
      - part (number: 5, 6, or 7)
      - passage (string, optional for Part 6 and 7, containing the text or email/memo)
      - question (string)
      - options (array of 4 strings like ["(A) ...", "(B) ...", "(C) ...", "(D) ..."])
      - correctAnswer (string like "(A)")
      - explanation (string explaining grammar, vocabulary, or reading clue)`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    part: { type: Type.NUMBER },
                    passage: { type: Type.STRING },
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    correctAnswer: { type: Type.STRING },
                    explanation: { type: Type.STRING }
                  },
                  required: ["id", "part", "question", "options", "correctAnswer", "explanation"]
                }
              }
            },
            required: ["questions"]
          }
        }
      });

      const data = JSON.parse(response.text || "{}");
      res.json(data);
    } catch (error: any) {
      console.error("Gemini practice generation error:", error);
      res.json({ questions: FALLBACK_QUESTIONS.slice(0, count) });
    }
  });

  app.post("/api/ai/explain", async (req, res) => {
    const { question, options, correctAnswer, userAnswer } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.json({ 
        explanation: `The correct answer is ${correctAnswer}. This tests standard TOEIC business grammar and vocabulary.` 
      });
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: `As an expert TOEIC tutor, explain why ${correctAnswer} is correct for this question: "${question}". Options: ${JSON.stringify(options)}. User answered: ${userAnswer || "none"}. Provide a concise, clear grammatical and contextual breakdown.`
      });
      res.json({ explanation: response.text });
    } catch (err) {
      res.json({ explanation: `The correct answer is ${correctAnswer}. Review the grammatical structure carefully.` });
    }
  });

  app.post("/api/ai/tutor", async (req, res) => {
    const { message } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.json({ reply: "Hello! I am your TOEIC AI tutor. Ask me any grammar, vocabulary, or reading strategy question!" });
    }

    try {
      const chat = ai.chats.create({
        model: "gemini-3.8-flash",
        config: {
          systemInstruction: "You are an expert TOEIC instructor helping students score 900+. Give concise, encouraging, and precise advice on English grammar, vocabulary, collocations, and reading strategies (Part 5, 6, 7)."
        }
      });

      const response = await chat.sendMessage({ message });
      res.json({ reply: response.text });
    } catch (err) {
      res.json({ reply: "I'm currently unable to connect to the AI tutor service. Please try again shortly." });
    }
  });

  // Setup Vite middleware for development
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
