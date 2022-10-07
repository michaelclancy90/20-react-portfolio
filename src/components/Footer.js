import React from 'react';
import github from '../components/assets/footer/github.png';
import slack from '../components/assets/footer/slack-overflow.png';

function Footer() {
  return (
    <footer id='footer'>
      <div className='profileLinks'>
        <a
          href='https://github.com/michaelclancy90'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='github' />
        </a>
        <a
          href='https://stackoverflow.com/users/19812568/michael-clancy'
          target='_blank'
          rel='noreferrer'
        >
          <img src={slack} alt='slack' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
