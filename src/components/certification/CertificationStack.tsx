import { MainBtn } from '../shared';
import { ICertification } from '@/types';
import styles from './styles.module.css';

interface CertificationStackProps {
  list: ICertification[];
  onRedirect: (url: string) => void;
  onOpenModal: (title: string, path: string) => void;
}

export const CertificationStack: React.FC<CertificationStackProps> = ({
  list,
  onRedirect,
  onOpenModal,
}) => {
  return (
    <div>
      {list.map((value, index) => (
        <div key={`certification-${index}`}>
          <div className={styles.content}>
            <div>
              <p>{`${value.achievement}, ${value.institution}`}</p>
              <p>{value.date}</p>
            </div>
            <div>
              <MainBtn
                isPrimary
                icon={{
                  name:
                    value.displayMode === 'new_tab'
                      ? 'open_in_new'
                      : 'visibility',
                  type: 'material',
                }}
                onClick={() => {
                  if (value.displayMode === 'new_tab') {
                    onRedirect(value.url);
                  } else {
                    onOpenModal(value.achievement, value.url);
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
