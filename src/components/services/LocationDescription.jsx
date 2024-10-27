// components/services/LocationDescription.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './services.scss'; // Используем общий файл стилей

const LocationDescription = () => {
  const [inputText, setInputText] = useState('');
  const [locationDescription, setLocationDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const MAX_WORDS = 3000;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setLocationDescription('');

    const locationPrompt = `Create a detailed and vivid description of the following location or setting, обезательно ответить на том языке на которым ответили запрос: ${inputText}`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: locationPrompt }],
          max_tokens: 1500,
        }),
      });

      const data = await response.json();
      const result = data.choices[0].message.content.trim();

      setLocationDescription(result);
    } catch (err) {
      setError('Произошла ошибка при создании описания окружения.');
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
          <h2>Создать описание окружения</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите описание места или окружения"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
            disabled={loading || !inputText}
          >
            {loading ? 'Загрузка...' : 'Создать описание'}
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
          {locationDescription && <p>{locationDescription}</p>}
        </div>
      </div>
    </div>
  );
};

export default LocationDescription;