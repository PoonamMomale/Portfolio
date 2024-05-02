import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {

  return (
    <>
        <div className='cards'>
            <h1>Check out my skills!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'> 
                        <CardItem
                            src="https://austingil.com/wp-content/uploads/HTML-Blog-Cover.png"
                            text="HTML is the standard markup language for Web pages. With HTML you can create your own Website."
                            label="HTML"
                            path="/"
                        />
                         <CardItem
                            src="https://kinsta.com/wp-content/uploads/2023/06/css-image-styling.jpg"
                            text="CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
                            label="CSS"
                            path="/"
                        />
                         <CardItem
                            src="https://blog.talent500.co/wp-content/uploads/2023/01/Skills-you-need-to-get-a-job-as-a-JavaScript-developer-1.png"
                            text="JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions."
                            label="JS"
                            path="/"
                        />
                    </ul>
                    <ul className='cards__items'> 
                         <CardItem
                            src="https://ecodesoft.com/wp-content/uploads/2022/10/react.jpg"
                            text="React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
                            label="ReactJs"
                            path="/"
                        />
                         <CardItem
                            src="https://www.popwebdesign.net/images/tutorial/php/tutorijali-php-banner.png"
                            text="PHP is a popular general-purpose scripting language that powers everything from your blog to the most popular websites in the world."
                            label="Php"
                            path="/"
                        />
                         <CardItem
                            src="https://miro.medium.com/v2/resize:fit:1200/1*ZPhUvWao_4pp-XzaUcJArw.png"
                            text="Laravel is a PHP web application framework with expressive, elegant syntax.."
                            label="Laravel"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards;
