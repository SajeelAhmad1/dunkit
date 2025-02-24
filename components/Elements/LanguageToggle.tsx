'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const LanguageToggle = ({ style, isDark }: any) => {
  const [selectedLang, _setSelectedLang] = useState('EN');

  const setSelectedLang = (lang: string) => {
    Cookies.set('lang', lang);
    window.dispatchEvent(new CustomEvent('langChange', { detail: lang }));
    _setSelectedLang(lang);
  };

  useEffect(() => {
    const lang = Cookies.get('lang');
    if (lang) {
      setSelectedLang(lang);
    }
  }, []);

  const bgClass = isDark ? "bg-[#00000088]" : "bg-[#ffffff88]";
  const bgClassB = isDark ? "bg-[#00000044]" : "bg-[#ffffff44]";

  const textColor = isDark ? "text-[#000000dd]" : "text-white";

  return (
    <div className={`flex border-4 border-[#00000000]  overflow-hidden`}>
      <button
        onClick={() => setSelectedLang('JP')}
        className={`px-4 py-2 font-pretendardLight text-sm ${
          selectedLang === 'JP'
            ? `${bgClass} bg-[#ffffff88]  ${textColor} font-bold`
            : `${bgClassB}  ${textColor}`
        }`}
      >
        JP
      </button>
      <button
        onClick={() => setSelectedLang('EN')}
        className={`px-4 font-pretendardLight py-2 text-sm ${
          selectedLang === 'EN'
            ? `bg-[#ffffff88] ${textColor} font-bold`
            : `bg-[#ffffff44] ${textColor}`
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
