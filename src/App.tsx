import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import CorrectionApply from './pages/CorrectionApply';
import CorrectionApplyHistory from './pages/CorrectionApplyHistory';
import Login from './pages/Login';
import MyInfo from './pages/MyInfo';
import SalaryHistory from './pages/SalaryHistory';
import WorkManagement from './pages/WorkManagement';
import store from './redux/store';

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Inner>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/MyInfo" element={<MyInfo />} />
            <Route path="/SalaryHistory" element={<SalaryHistory />} />
            <Route path="/CorrectionApply" element={<CorrectionApply />} />
            <Route
              path="/CorrectionApplyHistory"
              element={<CorrectionApplyHistory />}
            />
            <Route path="/WorkManagement" element={<WorkManagement />} />
          </Routes>
        </Inner>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
