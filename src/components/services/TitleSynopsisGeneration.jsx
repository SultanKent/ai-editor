// components/services/TitleSynopsisGeneration.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './services.scss'; // Используем общий файл стилей

const TitleSynopsisGeneration = () => {
  const [inputText, setInputText] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedSynopsis, setGeneratedSynopsis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const MAX_WORDS = 3000;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setGeneratedTitle('');
    setGeneratedSynopsis('');

    const titleSynopsisPrompt = `Generate a compelling title and synopsis for a book based on the following information. Adapt the title and synopsis to the genre, target audience, and current market trends. The synopsis should be short and effective, helping to capture the reader's interest. обезательно ответить на том языке на которым ответили запрос Input: ${inputText}`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: titleSynopsisPrompt }],
          max_tokens: 1500,
        }),
      });

      const data = await response.json();
      const result = data.choices[0].message.content.trim();

      // Split the result into title and synopsis
      const [title, ...synopsisParts] = result.split('\n');
      const synopsis = synopsisParts.join(' ');

      setGeneratedTitle(title);
      setGeneratedSynopsis(synopsis);
    } catch (err) {
      setError('Произошла ошибка при создании заголовка и аннотации.');
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
          <h2>Генерация заголовка и аннотации</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите описание книги или идеи"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
            disabled={loading || !inputText}
          >
            {loading ? 'Загрузка...' : 'Создать'}
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
          {generatedTitle && <h3>Заголовок: {generatedTitle}</h3>}
          {generatedSynopsis && <p>{generatedSynopsis}</p>}
        </div>
      </div>
    </div>
  );
};

export default TitleSynopsisGeneration;
