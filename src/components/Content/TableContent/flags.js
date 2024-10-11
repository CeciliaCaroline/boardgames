
import italy from '../../../assets/italy.png'
import england from '../../../assets/england.png'
import germany from '../../../assets/germany.png'

const flagMap = {
  ITA: italy,
  ENG: england,
  DEU: germany,
};

export const getFlag = (flag) => flagMap[flag] || null;