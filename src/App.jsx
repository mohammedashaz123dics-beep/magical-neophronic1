import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';
import Home from './pages/Home';
import PropertySearch from './pages/PropertySearch';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Sell from './pages/Sell';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Settings from './pages/Settings';
import Shares from './pages/Shares';
import Branches from './pages/Branches';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import Accessibility from './pages/Accessibility';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin, isAuthenticated } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-background gap-6">
        <img src="https://media.base44.com/images/public/6ac8911d1be83d1b620a4dd6/de423c2cd_Neophronic_Logo.jpg" alt="Neophronic" className="w-12 h-12 rounded-full object-cover" />
        <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Require authentication — redirect to login if not authenticated
  if (!isLoadingPublicSettings && !isLoadingAuth && !authError && !isAuthenticated) {
    navigateToLogin();
    return null;
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertySearch />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/sell" element={<Sell />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/shares" element={<Shares />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:userId" element={<MemberProfile />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App