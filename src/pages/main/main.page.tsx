import React from 'react';
import Typewriter from 'react-ts-typewriter';

export const MainPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '0 50px',
        fontSize: '55px',
      }}
    >
      <Typewriter text="Добрый день меня зовут Вишневский Владислав, представляю вам выполненное мною тестовое задание! Все пункты тз постарался реализовать. Стили я писал очень бегло, надеюсь это не главный критерий надеюсь на обратную связь при любом результате)))" />
    </div>
  );
};
