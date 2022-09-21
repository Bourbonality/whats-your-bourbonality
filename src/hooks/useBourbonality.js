import { useRecoilState } from 'recoil';
import { bourbonalityAtom } from 'atoms/bourbonalityAtom';

export const useBourbonality = () => {
  const [bourbonality, setBourbonality] = useRecoilState(bourbonalityAtom);

  const updateBourbonality = (bourbon) => {
    setBourbonality(bourbon);
  };

  return { bourbonality, updateBourbonality };
};
