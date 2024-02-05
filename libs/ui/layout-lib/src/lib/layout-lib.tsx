import styles from './layout-lib.module.less';

/* eslint-disable-next-line */
export interface LayoutLibProps {}

export function LayoutLib(props: LayoutLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutLib!</h1>
    </div>
  );
}

export default LayoutLib;
