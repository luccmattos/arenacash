import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { BalancePage } from './pages/BalancePage';
import { HomePage } from './pages/HomePage';
import { InvestPage } from './pages/InvestPage';
import { KycPage } from './pages/KycPage';
import { VerifyEmailPage } from './pages/VerifyEmailPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
        <Route path="kyc" element={<KycPage />} />
        <Route path="balance" element={<BalancePage />} />
        <Route path="invest" element={<InvestPage />} />
      </Route>
    </Routes>
  );
}
