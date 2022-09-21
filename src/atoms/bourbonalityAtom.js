import { atom } from 'recoil';
import { RecoilKeys } from 'services/constants';

export const bourbonalityAtom = atom({
  key: RecoilKeys.BourbonalityAtom,
  default: undefined,
});
