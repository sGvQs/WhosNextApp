import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Title } from './Title';
import { Roulette } from './Roulette';
import { GlobalStyle } from './styled';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Title />} />
          <Route path={`/roulette`} element={<Roulette />} />
          <Route path={`/amidaLottery`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
