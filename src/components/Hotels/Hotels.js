import React, {Component} from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component{

    render(){
        return(
            <div className={styles.container}>
               <h2 className={styles.title}>Oferty:</h2>
               <img src={process.env.PUBLIC_URL + '/logo192.png'} />
               <Hotel />
               <Hotel />
               
            </div>
        );
    }
}

export default Hotels;