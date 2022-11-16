import ReactPlayer from 'react-player';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function WatchClasse({
  videoUrl,
  nameClass,
  description,
  links,
  modalIsOpen,
  closeModal,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ReactPlayer url={videoUrl} controls />
        <h3>{nameClass}</h3>
        <span>{description}</span><br />
        {links &&
          links.map((link) => (
            <a key={link.url} href={link.url}>
              {link.title}
            </a>
          ))}
      </Modal>
    </div>
  );
}
