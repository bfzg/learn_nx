import { Login } from '@lnton-worksapce/login-lib';
export function App() {
  return (
    <div>
      <Login
        version="0.0.1"
        onFinish={() => {
          console.log();
        }}
        refreshCaptcha={() => {
          console.log();
        }}
      />
    </div>
  );
}

export default App;
