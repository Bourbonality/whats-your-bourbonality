import { atom } from 'recoil';
import { RecoilKeys } from 'services/constants';

export const scoresAtom = atom({
	key: RecoilKeys.ScoresAtom,
	default: {
		logical: 0,
		emotional: 0,
		introvert: 0,
		extrovert: 0,
		thinker: 0,
		doer: 0,
	},
});
