
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
        {type: 'paragraph', content: 'Fala galeraa 👋'},

        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        {type: 'link', content: '👉 jane.design/doctorcare'},


      ],
      publishedAt: new Date('2024-09-05 15:08:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/carlos.png',
        name: 'Carlos Antonio',
        role: 'Developer'
      },
      content: [
        {type: 'paragraph', content: 'Fala Pessoal 👋'},

        {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
        {type: 'paragraph', content: 'Acesse e deixe seu feedback 👉 ' },
        {type: 'link', content: 'devonlane.design'}


      ],
      publishedAt: new Date('2024-09-10 12:08:00'),
    },

]

function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
          {posts.map(post => {
            return(
              <Post key={post.id} name={post.author.name} role={post.author.role}  avatar={post.author.avatarUrl} content={post.content} publishedAt={post.publishedAt}/>
            )
          })}
          </main>
      </div>
    </>
  )
}

export default App
