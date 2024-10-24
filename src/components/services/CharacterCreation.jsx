// components/services/CharacterCreation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './services.scss'; // Используем общий файл стилей

const CharacterCreation = () => {
  const [inputText, setInputText] = useState('');
  const [generatedCharacter, setGeneratedCharacter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const MAX_WORDS = 3000;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setGeneratedCharacter('');

    const characterCreationPrompt = `Create a character with deep psychological development, a detailed backstory, and their role in the plot. Consider their personality, motivations, past, and how they interact with the story's conflicts and arcs. обезательно ответить на том языке на которым ответили запрос Input details: ${inputText}`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: characterCreationPrompt }],
          max_tokens: 1500,
        }),
      });

      const data = await response.json();
      const result = data.choices[0].message.content.trim();

      setGeneratedCharacter(result);
    } catch (err) {
      setError('Произошла ошибка при создании персонажа.');
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
          <h2>Создание Персонажа</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите детали вашего сюжета или идеи для персонажа"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
            disabled={loading || !inputText}
          >
            {loading ? 'Загрузка...' : 'Создать персонажа'}
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
          {generatedCharacter && <p>{generatedCharacter}</p>}
        </div>
      </div>
    </div>
  );
};

export default CharacterCreation;
