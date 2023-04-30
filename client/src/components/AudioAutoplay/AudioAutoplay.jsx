import React from 'react'

const AudioAutoplay = ({ audio }) => {
  const language = localStorage.getItem('i18nextLng')

  const audioLanguage = () => {
    if (language === 'en') {
      return `${audio}-english.mp3`
    } else if (language === 'hi') {
      return `${audio}-hindi.mp3`
    } else {
      return `${audio}-english.mp3`
    }
  }

  return (
    <iframe
      src={audioLanguage()}
      allow="autoplay"
      style={{ display: 'none' }}
      id="iframeAudio"
    />
  )
}

export default AudioAutoplay
