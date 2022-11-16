import { Header } from '../../components/Header';
import { WatchClasse } from '../../components/WatchClasse';
import { Footer } from '../../components/Footer';
import styles from './styles.module.scss';
import { useState } from 'react';
import { CardClasse } from '../../components/CardClasse';

const classeList = [
  {
    id: 1,
    cover:
      'https://media-cdn.tripadvisor.com/media/photo-w/1a/8e/2a/59/capitao-charles-vane.jpg',
    title: 'Hamburger MixBacon',
    description:
      'Picanha, queijo Gorgonzola de origem Argentina, bacon, alface, tomate e cebola Caramelizada.',
    url: 'https://www.youtube.com/watch?v=3Lmu6VV2eLM',
    preco: 'R$ 40,00',
    links: [
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=3Lmu6VV2eLM',
        title: 'Hamburger MixBacon',
      },
    ],
  },
  {
    id: 2,
    cover:
      'https://media-cdn.tripadvisor.com/media/photo-w/1a/8e/32/f9/capitao-dos-7-mares-e.jpg',
    title: 'Hamburger MixCheddar',
    description:
      'Pão de Parmesão, hambúrguer bovino e secreto, picles, tomate, bacon e cheddar à gosto.',
    url: 'https://www.youtube.com/watch?v=zwY3sSbr8os',
    preco: 'R$ 50,00',
    links: [
      {
        id: 2,
        url: 'https://www.youtube.com/watch?v=zwY3sSbr8os',
        title: 'Hamburger MixCheddar',
      },
    ],
  },
  {
    id: 3,
    cover:
      'https://media-cdn.tripadvisor.com/media/photo-w/1a/8e/32/ae/sanduiche-de-costela.jpg',
    title: 'Hamburger MixCostela',
    description:
      'Costela desfiada, queijo mussarela,  molhos apimentados e tomate dentro do pão de Parmesão.',
    url: 'https://www.youtube.com/watch?v=wcfFkcmmjrI',
    preco: 'R$ 60,00',
    links: [
      {
        id: 3,
        url: 'https://www.youtube.com/watch?v=wcfFkcmmjrI',
        title: 'Hamburger MixCostela',
      },
    ],
  },
];

function Main() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentClasse, setCurrentClasse] = useState({
    id: 0,
    cover: '',
    title: '',
    description: '',
    url: '',
    preco: '',
    links: [{}],
  });

  function openModal(classeId) {
    const item = classeList.find((classe) => classe.id === classeId);
    setCurrentClasse(item);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {classeList.map((classe) => (
            <CardClasse
              key={classe.id}
              classeId={classe.id}
              cover={classe.cover}
              title={classe.title}
              preco={classe.preco} /* editei */
              openModal={openModal}
            />
          ))}
        </main>
        <Footer />
      </div>
      <WatchClasse
        videoUrl={currentClasse.url}
        nameClass={currentClasse.title}
        description={currentClasse.description}
        preco={currentClasse.preco} /* editei */
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        links={currentClasse.links}
      />
    </>
  );
}

export default Main;
