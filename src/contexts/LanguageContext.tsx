import { createContext, useState, ReactNode, useEffect } from 'react';
import type { Language } from '@/lib/translations';

// 创建语言上下文接口
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// 创建语言上下文，提供默认值
export const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {}
});

// 语言提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // 从localStorage获取保存的语言，如果没有则使用浏览器语言或默认中文
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // 获取浏览器语言
    const browserLang = navigator.language.split('-')[0];
    if (['zh', 'en', 'de'].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return 'zh'; // 默认语言为中文
  });

  // 当语言改变时，保存到localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}