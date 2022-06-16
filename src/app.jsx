import Header from './components/Header/Header';
import  Post  from './components/Post/Post';
import styles from './App.module.css'
import './global.css';
import SideBar from './components/SideBar/SideBar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <SideBar />
          <main>
            <Post
            author="Walisson Souza"
            content="Oi oi papai" />
             <Post
            author="Walisson Souza"
            content="Oi oi papai" /> 
          </main>
      </div>
    </div>
  )
}
