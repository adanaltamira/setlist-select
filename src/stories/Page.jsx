import React from 'react';

import { Header } from './Header';
import { AnimatedRainbow } from '../components/AnimatedRainbow';
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
        </section>
      </article>
      <AnimatedRainbow />
    </div>
  );
};
