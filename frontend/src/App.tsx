import Dashboard from './components/Dashboard';
import './App.css';

function AppContent() {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <div>Loading...</div>
  //     </div>
  //   );
  // }
  console.log('test')
return <Dashboard/>
  // return user ? <Dashboard /> : <AuthPage />;
}

function App() {
  return (
    // <AuthProvider>
      <AppContent />
    // </AuthProvider>
  );
}

export default App
