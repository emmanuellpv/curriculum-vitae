import styles from './styles.module.css';

interface ChipProps {
  text: string;
}

export const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className={styles.chip}>
      <span>{text}</span>
    </div>
  );
};
