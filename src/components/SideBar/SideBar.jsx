import React from 'react';
import styles from './SideBar.module.css';
import { Phone } from "phosphor-react"
import Avatar from '../Avatar';
export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
      src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      alt="wallpapper"

      />
      <div className={styles.profile}> 
        <Avatar src="https://avatars.githubusercontent.com/u/88872797?v=40" alt="oioi" />
        <strong> Walisson Souza </strong>
        <span> Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <Phone size={20}/>
          Contate-me
        </a>
      </footer>
    </aside>
  )
}
