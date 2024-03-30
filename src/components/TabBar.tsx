interface TabBarProps {
  onPressNowPlaying: () => void;
  onPressTopRated: () => void;
}

const TabBar = ({ onPressNowPlaying, onPressTopRated }: TabBarProps) => {
  return (
    <div className="tab-bar">
      <button onClick={onPressNowPlaying}>Now Playing</button>
      <button onClick={onPressTopRated}>Top Rated</button>
    </div>
  );
};

export default TabBar;
