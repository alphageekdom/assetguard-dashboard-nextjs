'use client';

import { PulseLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0px 0px',
};

const ButtonWithSpinner = ({ loading }) => {
  return (
    <PulseLoader
      color={'#FFF'}
      loading={loading}
      cssOverride={override}
      size={14}
      aria-label='Loading Spinner'
    />
  );
};

export default ButtonWithSpinner;
