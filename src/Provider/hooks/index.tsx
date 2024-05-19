import {useContext} from 'react';
import {LanguageContext, LanguageContextType} from '../LanguageProvider';

export const useLanguage = (): LanguageContextType =>
  useContext(LanguageContext);
