import styles from './styles.module.css';

interface ItemBoxProps {
  icon: string;
  text: string;
}

export const ItemBox: React.FC<ItemBoxProps> = ({ icon, text }) => {
  return (
    <div className={styles.itemBox}>
      <div className={styles.itemContent}>
        <i className="material-symbols-outlined">{icon}</i>
        <p>{text}</p>
      </div>
    </div>
  );
};
