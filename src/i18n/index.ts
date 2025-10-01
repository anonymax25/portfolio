import { useTranslation as useI18nextTranslation } from 'react-i18next';

export const NAMESPACE = 'portfolio';

export const useTranslation = () => {
  return useI18nextTranslation(NAMESPACE);
};