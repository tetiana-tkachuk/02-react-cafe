// import { useState } from 'react';
import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';

import css from './App.module.css';
import VoteOpptions from '../VoteOptions/VoteOptions.tsx';

import { type Votes, type VoteType } from '../../types/votes.ts';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType): void {
    switch (type) {
      case 'good':
        setVotes({ ...votes, good: votes.good + 1 });
        return;
      case 'neutral':
        setVotes({ ...votes, neutral: votes.good + 1 });
        return;
      case 'bad':
        setVotes({ ...votes, bad: votes.bad + 1 });
        return;
      default:
        return;
    }
  }

  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOpptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
}
