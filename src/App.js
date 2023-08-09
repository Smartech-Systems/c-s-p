import React,{useState} from 'react';
import './App.css';
import { firestore } from './fconfig';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleEmailSubmit = async () => {
    if (email) {
      setIsLoading(true)
      try {
        await firestore.collection('emailNotifications').add({ email });
        setEmail('');
        alert('Request received. We will notify you when we are about to launch.');
        setIsLoading(false)
      } catch (error) {
        console.error('Error submitting email:', error);
      }
    }
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">
        <img src={process.env.PUBLIC_URL + '/Iclass-logo.png'} alt="iclass Logo" height='100%' />
        </div>
      </header>
      <main className="landing-main">
        <h2 className="coming-soon">Coming Soon</h2>
        <p className="description">
          An easy and efficient way to collaborate in class.
        </p>
        <div className="email-section">
          <input
            type="email"
            placeholder="Enter email to get notified when we are up"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isLoading ? (
        <div className="loading-spinner"></div> // Use the loading-spinner class
      ) : (
          <button className="notify-button" onClick={()=>handleEmailSubmit()}>Notify Me</button>
      )}
        </div>
      </main>
      {<footer className="landing-footer">
        <p className="footer-text">© 2023 Iclass. All Rights Reserved.</p>
  </footer>}
    </div>
  );
}

export default App;
