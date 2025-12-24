import { useState } from 'react';
import { useTranslation } from "@/lib/translations";
import type { Language } from '@/lib/translations';

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const languages = [
    { code: 'zh', name: '中文' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' }
  ];
  
  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsDropdownOpen(false);
  };
  
  // 点击页面其他地方关闭下拉菜单
  const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.getElementById('language-dropdown');
    const button = document.getElementById('language-selector-button');
    
    if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };
  
  // 添加全局点击事件监听器
  useState(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  
  return (
    <div className="relative">
      <button 
        id="language-selector-button"
        className="flex items-center space-x-1 text-sm font-light py-1 px-3 rounded-full bg-white/80 hover:bg-white transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>{languages.find(l => l.code === language)?.name}</span>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      <div 
        id="language-dropdown" 
        className={`absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg overflow-hidden z-10 transition-all duration-200 ${
          isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
        }`}
      >
        {languages.map(lang => (
          <button
            key={lang.code}
            className={`w-full text-left px-4 py-2 text-sm font-light hover:bg-gray-50 transition-colors ${
              language === lang.code ? 'bg-gray-50 font-medium' : ''
            }`}
            onClick={() => handleLanguageChange(lang.code as Language)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}