import React from 'react';

import { Header } from './Header';
import { Rainbow } from '../components/Rainbow';
import CheckboxList from '../components/CheckboxList';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <div className="main-wrap">
      <article className="main-content">
        <Header
          user={user}
          onLogin={() => setUser({ name: 'Jane Doe' })}
          onLogout={() => setUser(undefined)}
          onCreateAccount={() => setUser({ name: 'Jane Doe' })}
        />

        <section className="storybook-page">
          <h2>Pick your setlist!</h2>

          <div className="checkbox-section">
            <h3>Your favorites</h3>
            <CheckboxList />
          </div>

          <p>
            Get a guided tutorial on component-driven development at{' '}
            <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
              Storybook tutorials
            </a>
            . Read more in the{' '}
            <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
              docs
            </a>
            .
          </p>
          <div className="tip-wrapper">
            <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
            <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                  id="a"
                  fill="#999"
                />
              </g>
            </svg>
            Viewports addon in the toolbar
          </div>
        </section>
      </article>
      <Rainbow />
    </div>
  );
};
