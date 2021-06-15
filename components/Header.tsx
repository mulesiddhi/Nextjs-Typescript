import React,{FC} from 'react'

import styles from '../styles/Home.module.css'

export type AppHeaderProps = {
    title: string;
    description?: string;
   
  };
  
  
  const Header: FC<AppHeaderProps> = (
    ({ title, description }) => {
      return (
        <header className={styles.appheader}>
          
            <h1  className={styles.title}>{title}</h1>
            <small className={styles.description}>{description}</small>
          
          
          
        </header>
      );
    }
  );
  
  export default Header;