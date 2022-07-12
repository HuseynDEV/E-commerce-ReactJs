import React from 'react'
import './Main.css'
import { Book, Toys, CarCrash, Home, GifBox, MusicNote, Pets } from '@mui/icons-material'
import ListOptions from '../Header/ListOptions'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
        <ListOptions Icon={Book} title="Book" />
        <ListOptions Icon={Toys} title="Toys" />
        <ListOptions Icon={CarCrash} title="Cars" />
        <ListOptions Icon={Home} title="Home" />
        <ListOptions Icon={Pets} title="Pets" />
        <ListOptions Icon={GifBox} title="Gif" />
        <ListOptions Icon={MusicNote} title="Music" />
        <ListOptions Icon={Pets} title="Pets" />
        <ListOptions Icon={GifBox} title="Gif" />
        </ul>
    </div>
  )
}

export default Sidebar