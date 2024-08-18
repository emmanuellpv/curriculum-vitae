import styles from './styles.module.css';

interface TabBtbProps {
  text: string;
  tab: string;
  tabSelected: string;
  onClick: () => void;
}

export const TabBtn: React.FC<TabBtbProps> = ({
  text,
  tab,
  tabSelected,
  onClick,
}) => {
  return (
    <button
      className={`${styles.tabBtn} ${tab === tabSelected ? 'active' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
