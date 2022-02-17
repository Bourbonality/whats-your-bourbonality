import { useRecoilState } from 'recoil'
import { traitsAtom } from '../atoms/traitsAtom'

export const useTraits = () => {
  const [traits, setTraits] = useRecoilState(traitsAtom);

  const updateTraits = scores => {
    setTraits(() => ({
      logical: scores.logical > scores.emotional,
      emotional: scores.logical < scores.emotional,
      introvert: scores.introvert > scores.extrovert,
      extrovert: scores.introvert < scores.extrovert,
      thinker: scores.thinker > scores.doer,
      doer: scores.thinker < scores.doer,
    }))
  }

  return {
    traits,
    updateTraits,
  };
}
