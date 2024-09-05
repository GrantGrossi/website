import React from 'react';
import debugImage from './tex_DebugUVTiles.png';
import './projects.css';


function Projects() {
  return (
    <div>
      Projects Page
      <div className='Projects'>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
        <div className="Project-Container">
            <img src={debugImage} alt="Debug Texture" />
        </div>
      </div>
    </div>
  );
}


export default Projects;
