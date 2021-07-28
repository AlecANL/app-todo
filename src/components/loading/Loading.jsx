import './loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-layer"></div>
      <div className="loading-content is-active">
        <p>Loading...</p>
        <span>Please wait...</span>
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  );
}

export default Loading;
