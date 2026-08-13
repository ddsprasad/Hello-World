# Hello World - DataFactZ Full-Stack App

A modern full-stack application showcasing a DeepSeek AI backend with a beautiful React frontend, styled with DataFactZ brand colors.

## 🎨 Features

- **Backend**: Express.js server with DeepSeek API integration
- **Frontend**: React with Vite for fast development
- **Styling**: DataFactZ brand colors and design system
  - Brand gradient: yellow → orange → red
  - Dark mode as default
  - Lucide icons for consistency
  - Smooth animations and hover effects
- **Type-safe**: Clean, modern JavaScript
- **Responsive**: Works on all device sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (installed)
- npm 11+ (comes with Node.js)
- DeepSeek API key (get one at [api.deepseek.com](https://api.deepseek.com))

### Installation

1. **Clone the repository** (if needed)
   ```bash
   cd "Hello World"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your DeepSeek API key:
   ```
   PORT=5000
   DEEPSEEK_API_KEY=your_actual_api_key_here
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

#### Option 1: Run in separate terminals

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Or for development with auto-reload:
npm run dev
```

Backend will be available at: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will be available at: `http://localhost:3000`

#### Option 2: Run both simultaneously (from project root)

If you have `concurrently` installed globally:
```bash
npm install -g concurrently

# From the root "Hello World" directory
concurrently "cd backend && npm start" "cd frontend && npm run dev"
```

### Usage

1. Open `http://localhost:3000` in your browser
2. Type a message in the input field
3. Click "Send" or press Enter
4. The DeepSeek AI will process your message and respond
5. Enjoy the smooth DataFactZ-styled UI!

## 📁 Project Structure

```
Hello World/
├── backend/
│   ├── server.js          # Express server with /api/chat endpoint
│   ├── package.json       # Backend dependencies
│   ├── .env.example       # Environment variables template
│   └── .gitignore         # Git ignore rules
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # DataFactZ styling
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite configuration
│   ├── package.json       # Frontend dependencies
│   └── .gitignore         # Git ignore rules
└── README.md              # This file
```

## 🎯 API Endpoints

### Backend

- **GET** `/health` - Health check
  ```bash
  curl http://localhost:5000/health
  ```

- **POST** `/api/chat` - Send message to DeepSeek
  ```bash
  curl -X POST http://localhost:5000/api/chat \
    -H "Content-Type: application/json" \
    -d '{"message": "Hello! Who are you?"}'
  ```

  Response:
  ```json
  {
    "success": true,
    "message": "Hello! Who are you?",
    "reply": "I'm an AI assistant powered by DeepSeek..."
  }
  ```

## 🎨 DataFactZ Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Yellow | #F4AD0B | Gradient start, accents |
| Orange | #FC7900 | Primary buttons, links |
| Red | #E3434A | Gradient end, errors |
| Navy | #182127 | Headings, chrome |
| Dark Background | #0f1419 | Page background |
| Surface | #1a1f2e | Card backgrounds |

## 🔧 Configuration

### Backend (.env)

```env
PORT=5000                          # Express server port
DEEPSEEK_API_KEY=sk-xxxxx         # Your DeepSeek API key
```

### Frontend (vite.config.js)

- **Dev port**: 3000
- **API proxy**: `/api` proxies to `http://localhost:5000`

## 🛠️ Development

### Build Frontend for Production

```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Environment Setup

- **Node.js**: v20+ recommended
- **npm**: v11+
- **DeepSeek**: Requires valid API key

## 📝 Components

### Backend (`server.js`)
- CORS-enabled Express server
- Error handling with detailed responses
- System prompt for friendly AI responses
- Temperature and token limits for controlled output

### Frontend (`App.jsx`)
- Real-time chat interface
- Auto-scrolling message thread
- Loading states with spinner animation
- Error display with icons
- Responsive design for mobile/desktop
- Lucide icons (Send, AlertCircle)

### Styling (`index.css`)
- CSS variables for brand colors
- Dark mode default
- Smooth transitions and hover effects
- Card lift animation on hover
- Focus states for inputs
- Accessibility-friendly color contrast

## 🚨 Troubleshooting

### "Failed to connect to backend"
- Ensure backend is running on `http://localhost:5000`
- Check that both frontend and backend are started
- Verify CORS is enabled in backend

### "Invalid API Key"
- Check your `.env` file has the correct `DEEPSEEK_API_KEY`
- Verify the key is from [api.deepseek.com](https://api.deepseek.com)
- Ensure the key hasn't expired

### "Module not found" errors
- Delete `node_modules` folder
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## 📦 Dependencies

### Backend
- **express**: Web framework
- **cors**: Enable cross-origin requests
- **axios**: HTTP client for DeepSeek API
- **dotenv**: Environment variable management

### Frontend
- **react**: UI library
- **react-dom**: React rendering
- **vite**: Build tool
- **axios**: HTTP client
- **lucide-react**: Icon library

## 🔐 Security Notes

- Never commit `.env` files to git (included in `.gitignore`)
- Keep API keys private and rotate them regularly
- The `.env.example` file shows the template structure
- CORS is configured to allow localhost development

## 📄 License

MIT - Feel free to use this as a template for your own projects!

## 🤝 Support

For issues with:
- **DeepSeek API**: Visit [api.deepseek.com](https://api.deepseek.com)
- **React**: Check [React documentation](https://react.dev)
- **Vite**: See [Vite guide](https://vitejs.dev)
- **Express**: Review [Express docs](https://expressjs.com)

---

Built with ❤️ using DataFactZ brand colors
