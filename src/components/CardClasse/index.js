import styles from './styles.module.scss';

export function CardClasse({ classeId, cover, title, preco, openModal }) {
  return (
    <div onClick={() => openModal(classeId)} className={styles.container}>
      <img src={cover} alt="Cover" />
      <strong>{title}</strong>
      <p>{preco}</p>
    </div>
  );
}
