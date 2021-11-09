import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const CypressHistorySupport: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Cypress) {
      window.cyNavigate = navigate;
    }
  }, [navigate]);

  return null;
};
