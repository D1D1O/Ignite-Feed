import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <>

      <Header />
      <div className={styles.wrapper}>
       
        <Sidebar/>
        
        <main>
          <Post
            author="Giovanny"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In minus labore ullam, accusantium sed ipsam! Quaerat, consectetur culpa magni deleniti asperiores laborum, necessitatibus quod, fugiat provident ullam quos minus delectus?"
          />

          <Post
            author="Bia"
            content="Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet"
          />
        </main>
      </div>



    </>
  )
}

