import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import './Resume.css';

const Resume = () => {

  return (

    <div className='resumeContainer'>

      <iframe 
        className='resumeContainer'
        src="https://docs.google.com/document/d/e/2PACX-1vQBeu6tw2FtC9XZ1rJ93BlD2uVs4JKD1nEBOrgnQHDkddyKPfO-GGuqbj53EsTNKT7jy6jqqiBSZTwa/pub?embedded=true"
      ></iframe>

    </div>
       
  )
}

export default Resume
