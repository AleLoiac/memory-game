import { useEffect, useState } from "react";
import "../styles/music.css";

export default function Music() {
  const [isPlaying, setisPlaying] = useState(true);
  const [audioClass, setAudioClass] = useState("musicOff");
  const [audio, setAudio] = useState(true);

  useEffect(() => {
    const newAudio = new Audio(
      "src/assets/audio/Pokemon Mystery Dungeon - Friend Area - Pond.mp3"
    );
    setAudio(newAudio);
    newAudio.loop = true;

    return newAudio.pause();
  }, []);

  const toggleSong = () => {
    setisPlaying(!isPlaying);

    if (isPlaying) {
      audio.play();
      setAudioClass("musicOn");
    } else {
      audio.pause();
      setAudioClass("musicOff");
    }
  };

  return <img className={audioClass} onClick={toggleSong} />;
}
