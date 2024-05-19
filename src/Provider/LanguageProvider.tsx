import {jp} from '@/lang/jp';
import {ko} from '@/lang/ko';
import {createContext, useState} from 'react';

export interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translate: (key: string) => string;
}

// 기본값 설정 예시
const defaultContextValue: LanguageContextType = {
  language: 'jp',
  setLanguage: () => {},
  translate: (key: string) => key,
};

export const LanguageContext = createContext(defaultContextValue);

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState<string>('jp');
  const value = {language, setLanguage};

  const translate = key => {
    const data = language === 'jp' ? jp : ko;
    return data[key] || key;
  };

  return (
    <LanguageContext.Provider value={{...value, translate}}>
      {children}
    </LanguageContext.Provider>
  );
};
