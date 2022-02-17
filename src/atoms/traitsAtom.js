import { atom } from 'recoil';
import { RecoilKeys } from '../services/constants';

export const traitsAtom = atom({
  key: RecoilKeys.TraitsAtom,
  default: {
    logical: false,
    emotional: false,
    introvert: false,
    extrovert: false,
    thinker: false,
    doer: false,
  },
});
