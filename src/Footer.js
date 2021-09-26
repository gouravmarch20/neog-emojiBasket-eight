import React from 'react'

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='footer-header'>Around the web</div>
      <ul class='social-links list-non-bullet'>
        <li class='list-item-inline link'>
          <a target='_blank' href='https://github.com/gouravmarch20'>
            <i class='fab fa-github fa-2x'></i>
          </a>
        </li>
        <li class='list-item-inline link'>
          <a target='_blank' href='https://twitter.com/gouravmarch20'>
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        </li>
        <li class='list-item-inline link'>
          <a target='_blank' href='https://www.linkedin.com/in/gouravmarch20/'>
            <i class='fab fa-linkedin-in fa-2x'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
