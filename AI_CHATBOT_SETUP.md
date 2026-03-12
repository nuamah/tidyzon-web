# AI Chatbot Setup Guide

## Prerequisites
- Node.js installed
- OpenAI API Key (get one from https://platform.openai.com/api-keys)

## Installation Steps

### 1. Install Server Dependencies
Navigate to your project root and run:
```bash
npm install express cors dotenv openai
```

### 2. Create .env File
Create a `.env` file in the root of your project (tidyzon-website folder) with:
```
OPENAI_API_KEY=your_actual_openai_api_key_here
PORT=3001
```

**Important:** Replace `your_actual_openai_api_key_here` with your real OpenAI API key.

### 3. Update package.json
Add the following to your `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "server": "node server/index.js",
    "dev:all": "concurrently \"npm run dev\" \"npm run server\"",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 4. Install Concurrently (Optional)
To run both the Vite dev server and the AI chatbot server simultaneously:
```bash
npm install --save-dev concurrently
```

## Running the Application

### Option 1: Run Both Servers Together (Recommended)
```bash
npm run dev:all
```

### Option 2: Run Servers Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend API:**
```bash
npm run server
```

## How It Works

1. **Frontend (Port 5173):** Your React app with Vite
2. **Backend (Port 3001):** Express server handling OpenAI API calls
3. **AI Assistant:** Uses GPT-3.5-turbo to answer questions about Tidyzon

## Features

- **Smart Restrictions:** Only answers questions related to Tidyzon services
- **Context Aware:** Knows all about Tidyzon's services, pricing, and policies
- **Friendly UI:** Beautiful chat interface in bottom-right corner
- **Mobile Responsive:** Works great on all devices

## Testing the Chatbot

Once running, try asking:
- "What services do you offer?"
- "How much does car cleaning cost?"
- "Tell me about the Deluxe package"
- "How do I book a service?"

The bot will politely decline to answer off-topic questions.

## Troubleshooting

### API Key Issues
- Make sure your `.env` file is in the project root
- Verify your OpenAI API key is correct
- Check if you have billing enabled on your OpenAI account

### Server Won't Start
- Make sure port 3001 is not already in use
- Check that all dependencies are installed
- Verify `server/index.js` file exists

### Chat Not Working
- Open browser console to check for errors
- Ensure both frontend and backend servers are running
- Check network tab for failed API requests

## Security Notes

- **Never commit `.env` file** to version control
- The `.env` file is already in `.gitignore`
- API calls are made from your server, not the client
- This prevents exposing your OpenAI API key to users

## Cost Considerations

- GPT-3.5-turbo is relatively inexpensive
- Each message costs approximately $0.002
- Set usage limits in your OpenAI dashboard
- Monitor your API usage regularly

