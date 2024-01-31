import styles from './gat-login-lib.module.less';

/* eslint-disable-next-line */
export interface GatLoginLibProps {}

export function GatLoginLib(props: GatLoginLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GatLoginLib!</h1>
    </div>
  );
}

export default GatLoginLib;
