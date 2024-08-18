import React from 'react';
import { ISelect } from '@/types';
import styles from './styles.module.css';

interface SelectInputProps {
  id: string;
  selectedValue: string;
  values: ISelect[];
  onChange: (value: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  id,
  selectedValue,
  values,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownBtnRef = React.useRef<HTMLDivElement>(null);
  const dropdownMenuRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    /**
     * Handle the outside area of select to hide the elements.
     * @param event MouseEvent
     */
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target as Node) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    } else {
      document.body.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownWrapper}>
      <div
        ref={dropdownBtnRef}
        className={styles.dropdownBtn}
        onClick={toggleDropdown}
      >
        <span id={id}>{selectedValue.toUpperCase()}</span>
        <span>
          <i className="material-symbols-outlined">arrow_drop_down</i>
        </span>
      </div>
      <div
        ref={dropdownMenuRef}
        className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}
      >
        {values.map((item, index) => (
          <div
            key={`item-select-${index}`}
            className={`${styles.item} ${
              selectedValue === item.value ? styles.active : ''
            }`}
            onClick={() => {
              onChange(item.value);
              setIsOpen(false);
            }}
          >
            <span>{item.viewValue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
