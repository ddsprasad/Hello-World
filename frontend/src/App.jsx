import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Send, AlertCircle } from 'lucide-react';
import './index.css';

function App() {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: 'Hello! 👋 I\'m your AI assistant powered by DeepSeek. Ask me anything!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setError('');

    setMessages((prev) => [
      ...prev,
      { type: 'user', content: userMessage }
    ]);

    setLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        message: userMessage
      });

      if (response.data.success) {
        setMessages((prev) => [
          ...prev,
          { type: 'assistant', content: response.data.reply }
        ]);
      } else {
        setError(response.data.error || 'Failed to get response');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.error || 'Failed to connect to backend');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full" style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--dark-bg)'
    }}>
      {/* Header */}
      <header style={{
        padding: '24px',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <h1 className="brand-gradient">Hello World</h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '14px',
          marginTop: '8px'
        }}>
          Powered by DeepSeek AI
        </p>
      </header>

      {/* Messages */}
      <main style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div className="flex flex-col gap" style={{ gap: '16px' }}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.type === 'user' ? 'message-user' : 'message-assistant'}`}
              style={{
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '90%',
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap'
              }}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="message message-assistant" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div className="spinner"></div>
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Error Message */}
      {error && (
        <div style={{
          margin: '0 24px',
          padding: '12px 16px',
          backgroundColor: 'rgba(227, 67, 74, 0.15)',
          borderLeft: '3px solid var(--brand-red)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ff9999'
        }}>
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {/* Input Form */}
      <footer style={{
        padding: '24px',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--dark-surface)',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%'
      }}>
        <form onSubmit={handleSend} className="flex" style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={loading}
            className="input"
            style={{
              flex: 1,
              borderRadius: '6px'
            }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="btn btn-primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              whiteSpace: 'nowrap'
            }}
          >
            <Send size={18} />
            Send
          </button>
        </form>
      </footer>
    </div>
  );
}

export default App;
