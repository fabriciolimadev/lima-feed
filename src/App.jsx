
import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO Rocketseat'
      },
      content: [
        {type: 'Fala galeraa 👋'},

        {type:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

        '👉 <a href="#">jane.design/doctorcare</a>',

        '<a href="#">#novoprojeto #nlw #rocketseat</a>'
      ],
    }
]

function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post name="Fabricio Lima" role="Desenvolvedor Web" avatar="https://github.com/fabriciolimadev.png"/>
            <Post name="Fabricio Lima" role="Desenvolvedor Web" avatar="https://github.com/fabriciolimadev.png"/>
            <Post name="Fabricio Lima" role="Desenvolvedor Web" avatar="https://github.com/fabriciolimadev.png"/>
          </main>
      </div>
    </>
  )
}

export default App
