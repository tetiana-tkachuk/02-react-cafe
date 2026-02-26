// import { useState } from 'react';
import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';

import { type Votes, type VoteType } from '../../types/votes.ts';

import css from './App.module.css';

import VoteOpptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';

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

  function resetVotes(): void {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOpptions onVote={handleVote} onReset={resetVotes} canReset={true} />
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
    </div>
  );
}
