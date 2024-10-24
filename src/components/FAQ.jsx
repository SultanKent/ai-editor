import React, { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Часто задаваемые вопросы</h2>
      <div className="faq-item" onClick={() => toggleFAQ(0)}>
        <div className="faq-question">Что такое грамматическое редактирование?</div>
        <div className={`faq-answer ${open === 0 ? "open" : ""}`}>
          <p>
          Грамматическое редактирование включает исправление грамматических и пунктуационных ошибок в тексте. Наша услуга помогает сохранить оригинальный стиль, улучшая при этом ясность.
          </p>
        </div>
      </div>

      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-question">Как это работает?</div>
        <div className={`faq-answer ${open === 1 ? "open" : ""}`}>
          <p>
          Вы загружаете свой документ или текст через нашу платформу. Наши продвинутые AI-инструменты анализируют текст и предлагают исправления.
          </p>
        </div>
      </div>

      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-question">Каков срок выполнения?</div>
        <div className={`faq-answer ${open === 2 ? "open" : ""}`}>
          <p>
          Обычный срок выполнения — 1 минута для большинства документов.
          </p>
        </div>
      </div>

      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-question">Безопасны ли мои данные?</div>
        <div className={`faq-answer ${open === 3 ? "open" : ""}`}>
          <p>
          Безусловно! Мы уделяем первостепенное внимание вашей конфиденциальности и безопасности данных.
          </p>
        </div>
      </div>

      <div className="faq-item" onClick={() => toggleFAQ(4)}>
        <div className="faq-question">Какова стоимость услуг?</div>
        <div className={`faq-answer ${open === 4 ? "open" : ""}`}>
          <p>
          Стоимость почти всех наших услуг бесплатна.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
