import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { dog_to_greendoge } from '../../../util/greendoge';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardTotalGreenDogeFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalGreenDogeFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return dog_to_greendoge(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total GreenDoge Farmed</Trans>}
      value={totalGreenDogeFarmed}
      loading={loading}
    />
  );
}
