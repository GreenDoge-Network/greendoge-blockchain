import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.GREENDOGE]: IS_MAINNET ? 'XDG' : 'TXDG',
};
