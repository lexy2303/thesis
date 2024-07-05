import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordPlayer                     from './components/RecordPlayer/RecordPlayer';
import Record                           from './components/Record/Record';
import Home                             from './components/Home/Home';
import NewsPage                         from './components/NewsPage/NewsPage';
import ScrollToTop                      from './components/ScrollToTop/ScrollToTop';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index                               element={<Home />} />
        <Route path="/"                            element={<Home />} />
        <Route path="record/:id"                   element={<Record />} />
        <Route path="record/:id/record-player/:id" element={<RecordPlayer />} />
        <Route path="/news"                        element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
