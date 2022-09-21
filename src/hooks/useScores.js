import { useRecoilState } from 'recoil';
import { scoresAtom } from 'atoms/scoresAtom';

export const useScores = () => {
  const [scores, setScores] = useRecoilState(scoresAtom);

  const updateScores = (trait) => {
    setScores((prevScores) => {
      return {
        ...prevScores,
        [trait]: prevScores[trait] + 1,
      };
    });
  };

  return { scores, updateScores };
};
