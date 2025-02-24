'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const LanguageToggle = ({ style }: any) => {
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

  return (
    <div className={`flex border-4 border-[#00000000]  overflow-hidden`}>
      <button
        onClick={() => setSelectedLang('JP')}
        className={`px-4 py-2 font-pretendardLight text-sm ${
          selectedLang === 'JP'
            ? ' bg-white  text-[#4d0000] font-bold'
            : ' bg-[#00000000]  text-white'
        }`}
      >
        JP
      </button>
      <button
        onClick={() => setSelectedLang('EN')}
        className={`px-4 font-pretendardLight py-2 text-sm ${
          selectedLang === 'EN'
            ? 'bg-white text-[#4d0000] font-bold'
            : 'bg-[#00000000] text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
