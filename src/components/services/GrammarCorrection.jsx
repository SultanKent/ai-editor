// components/services/GrammarCorrection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './services.scss'; // Use shared stylesheet

const GrammarCorrection = () => {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const MAX_WORDS = 3000;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setCorrectedText('');

    const checkGrammarPrompt = `Check and correct the grammar of the following text, without changing the meaning of the sentences. If there are no grammatical errors, simply return the message "Все верно". If the user is asking for something else, return "Допустимы только грамматические исправления." обезательно ответить на том языке на которым ответили запрос Text: ${inputText}`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: checkGrammarPrompt }],
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      const result = data.choices[0].message.content.trim();

      if (result.toLowerCase().includes("допустимы только грамматические исправления")) {
        setError('Вы запросили что-то кроме грамматических исправлений. Допустимы только исправления.');
      } else if (result === "Все верно") {
        setCorrectedText("Все верно: текст не содержит грамматических ошибок.");
      } else {
        setCorrectedText(result);
      }
    } catch (err) {
      setError('Произошла ошибка при обработке запроса.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const wordCount = text.split(/\s+/).length;

        if (wordCount > MAX_WORDS) {
          setFileError(`Файл слишком велик, можно обработать только ${MAX_WORDS} слов. Мы обработаем первые ${MAX_WORDS} слов.`);
          const truncatedText = text.split(/\s+/).slice(0, MAX_WORDS).join(' ');
          setInputText(truncatedText);
        } else {
          setFileError(null);
          setInputText(text);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="service-container">
      <div className="service-content">
        <div className="service-input">
          <h2>Редактировать грамматику</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите ваш текст"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
            disabled={loading || !inputText}
          >
            {loading ? 'Загрузка...' : 'Отправить'}
          </motion.button>
          <div className="file-upload">
            <label htmlFor="fileInput" className="upload-label">
              Загрузить файл (макс. 3000 слов)
            </label>
            <input
              type="file"
              id="fileInput"
              accept=".txt,.docx"
              onChange={handleFileUpload}
            />
          </div>
          {fileError && <p className="error">{fileError}</p>}
        </div>
        <div className="service-output">
          {error && <p className="error">{error}</p>}
          {correctedText && <p>{correctedText}</p>}
        </div>
      </div>
    </div>
  );
};

export default GrammarCorrection;
