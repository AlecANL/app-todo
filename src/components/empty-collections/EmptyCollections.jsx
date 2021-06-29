import './empty-screen.css';

function EmptyCollections({ message, image }) {
  return (
    <div className="empty-screen">
      <img src={image} alt="empty screen" width={375} height={240} />
      <div className="message">
        <p>{message?.title}</p>
        <p>{message?.subTitle}</p>
      </div>
    </div>
  );
}

export default EmptyCollections;
