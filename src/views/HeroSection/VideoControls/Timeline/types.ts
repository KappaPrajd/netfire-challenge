import { ChangeEvent } from 'react';

export interface TimelineProps {
  playbackTime: number;
  duration: number;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
