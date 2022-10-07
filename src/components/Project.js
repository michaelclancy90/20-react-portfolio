import React from 'react';
import './styles/project.css';
import github from '../components/assets/footer/github.png';

function Project(props) {
  return (
    <div>
      <p className='projectName'>{props.name}</p>
      <img src={props.img} alt='' width='500px' />
      <a href={props.github} target='_blank' rel='noreferrer'>
        <img className='iconLinks' src={github} alt='github' />
      </a>
      <a href={props.demo}>Demo</a>
    </div>
  );
}

export default Project;
