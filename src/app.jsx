import Header from './components/Header/Header';
import  Post  from './components/Post/Post';
import styles from './App.module.css'
import './global.css';
import SideBar from './components/SideBar/SideBar';


// author: { avatar_url: "", name: "", role: "",}
// publishedAt: Date 
// content: string

const posts = [ 
  {
    id: 1,
    author:{
      avatar_url: 'https://github.com/walissonsou.png',
      name: 'Walisson Souza' ,
      role: "Dev Front GCT ",
 },
 content: [
  {type: 'paragraph', content: "oi oi papai"}
 ],
 publishedAt: new Date('2022-06-18 22:00:00')
  },
  {
    id: 2,
    author:{
      avatar_url: 'https://github.com/walissonsou.png',
      name: 'Walisson Souza' ,
      role: "Dev Front GCT ",
 },
 content: [
  {type: 'paragraph', content: "oi oi papai"}
 ],
 publishedAt: new Date('2022-06-18 22:00:00')
  },
 
];

export function App(props) {
  console.log(props);
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <SideBar />
          <main>
          {posts.map(post => {
            return (
              <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
            
          })}
          </main>
      </div>
    </div>
  )
}
