import logo from './logo.svg';
import ReactHlsPlayer from 'react-hls-player'
import './App.css';

function App() {
  const streamUrl = "https://b-87178fb5.kinesisvideo.ap-northeast-1.amazonaws.com/hls/v1/getHLSMasterPlaylist.m3u8?SessionToken=CiDrLt-Bi3L4kEwSacqu5plzTPVa52H3gCMY6TY_TDYeihIQz7tdAKEcSBP_ULv1CUMRlRoZuq6rmj75UFIyPGs-VKT9MXY5gj0bI2u1JSIgs9f6k6cK0YyK2NVd8jaAyKahohr5xpA5-fLX_W6vZoo~"
    
  return (
    <div className="App">
      <header className="App-header">
        <h2>HLS Stream Player</h2>
        <ReactHlsPlayer
          src={streamUrl}
          autoPlay={true}
          controls={true}
          width="100%"
          height="auto"
        />
      </header>
    </div>
  );
}

export default App;
