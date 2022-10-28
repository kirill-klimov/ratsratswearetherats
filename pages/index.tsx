import type { NextPage } from 'next'
import { useEffect } from 'react';
import p5 from 'p5'

interface IProps {
  api?: string
}

const Home: NextPage = (props: IProps) => {

  useEffect(function() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js";
    script.onload = function() {
      console.log('loaded');
    }
    document.body.appendChild(script)

    if (p5) {
      const fft = new p5.FFT();
      console.log(fft);
    }
    
  }, [])


  return (
    <div>
      <img src="rat.jpg" alt="rat" />
      <audio id='music' src="rat_music.mp3" autoPlay loop controls></audio>
    </div>
  )
}

export async function getServerSideProps() {
  const api = process.env.API;
  return {
    props: {
      api
    }, // will be passed to the page component as props
  }
}

export default Home
