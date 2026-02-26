import { useState } from 'react';

import css from './App.module.css';

import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification.tsx';

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
        setVotes({ ...votes, neutral: votes.neutral + 1 });
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
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes ? true : false}
      />
      {totalVotes ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
