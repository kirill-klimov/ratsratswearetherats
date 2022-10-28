import type { NextPage } from 'next'

interface IProps {
  api?: string
}

const Home: NextPage = (props: IProps) => {
  return (
    <div>
      <img src="rat.jpg" alt="rat" />
      <audio src="rat_music.mp3" autoPlay loop controls></audio>
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
