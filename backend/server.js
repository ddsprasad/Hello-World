import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OLLAMA_API_URL = 'http://localhost:11434/api/chat';
const OLLAMA_MODEL = 'llama3.2:latest';

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running with Ollama (Llama 3.2)' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await axios.post(
      OLLAMA_API_URL,
      {
        model: OLLAMA_MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant. Keep responses concise and friendly.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        stream: false
      }
    );

    const reply = response.data.message.content;

    res.json({
      success: true,
      message: message,
      reply: reply
    });
  } catch (error) {
    console.error('Ollama API Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to get response from Ollama. Make sure Ollama is running on http://localhost:11434',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`✨ Hello World backend running on http://localhost:${PORT}`);
  console.log(`📡 Chat endpoint: POST http://localhost:${PORT}/api/chat`);
});
