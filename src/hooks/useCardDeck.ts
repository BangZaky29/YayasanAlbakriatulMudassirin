import { useState, useCallback } from 'react';

const TOTAL_CARDS = 3;

export function useCardDeck(initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const getPosition = useCallback(
    (cardIndex: number): 'front' | 'middle' | 'back' => {
      const offset = (cardIndex - activeIndex + TOTAL_CARDS) % TOTAL_CARDS;
      if (offset === 0) return 'front';
      if (offset === 1) return 'middle';
      return 'back';
    },
    [activeIndex]
  );

  const setActive = useCallback((index: number) => {
    setActiveIndex(index % TOTAL_CARDS);
  }, []);

  const cycleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_CARDS);
  }, []);

  const cyclePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TOTAL_CARDS) % TOTAL_CARDS);
  }, []);

  const handleCardClick = useCallback(
    (clickedIndex: number) => {
      if (clickedIndex === activeIndex) {
        cycleNext();
      } else {
        setActive(clickedIndex);
      }
    },
    [activeIndex, cycleNext, setActive]
  );

  const counterLabel = `0${activeIndex + 1} / 03`;

  return {
    activeIndex,
    getPosition,
    setActive,
    cycleNext,
    cyclePrev,
    handleCardClick,
    counterLabel,
  };
}
