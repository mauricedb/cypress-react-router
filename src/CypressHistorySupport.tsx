import { useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';

export const CypressHistorySupport: FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.Cypress) {
      window.cyHistory = history;
    }
  }, [history]);

  return null;
};
