import { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/auth'); // Перенаправление на страницу авторизации
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // Пока нет данных о пользователе, можно отобразить загрузку
  }

  return children;
};

export default ProtectedRoute;
