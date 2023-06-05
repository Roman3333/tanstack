import { FC } from 'react';
import { RevolvingDot } from 'react-loader-spinner';

import styles from './spinner.module.scss';

export const Spinner: FC = () => {
  return (
    <div className={styles.loader}>
      <RevolvingDot
        height="80"
        width="80"
        radius={20}
        color="#26164d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
