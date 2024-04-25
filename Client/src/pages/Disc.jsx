import React, { useState } from 'react';
import { Button } from 'antd';
import { useAuth } from '../contexts/AuthContext';
import './db.css';
import doctor1Image from '../assets/new.png';
import doctor2Image from '../assets/new.png';
import doctor3Image from '../assets/new.png';
import doctor4Image from '../assets/new.png';
import doctor5Image from '../assets/new.png';
import doctor6Image from '../assets/new.png';
import doctor7Image from '../assets/new.png';
import doctor8Image from '../assets/new.png';
import doctor9Image from '../assets/new.png';
import doctor10Image from '../assets/new.png';
import doctor11Image from '../assets/new.png';
import doctor12Image from '../assets/new.png';

const Disc = () => {
  const { logout } = useAuth();
  const [cards] = useState([
    {
      src: doctor1Image,
      title: 'Doctor-1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor2Image,
      title: 'Doctor-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor3Image,
      title: 'Doctor-3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor4Image,
      title: 'Doctor-4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor5Image,
      title: 'Doctor-5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor6Image,
      title: 'Doctor-6',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor7Image,
      title: 'Doctor-7',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor8Image,
      title: 'Doctor-8',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor9Image,
      title: 'Doctor-9',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor10Image,
      title: 'Doctor-10',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor11Image,
      title: 'Doctor-11',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      src: doctor12Image,
      title: 'Doctor-12',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
  ]);

  return (
    <>
      <div className='bodyln'>
        <section>
          <h1>Doctor Portal</h1>
          <div className='containe'>
            <div className='cards'>
              {cards.map((card, i) => (
                <div key={i} className='card'>
                  <img src={card.src} alt={`Doctor ${i + 1}`} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <button className='btnn'>Book</button>
                </div>
              ))}
            </div>
            <div>
              <Button size='large' type='primary' className='profile-btn' onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Disc;
