import React, { useState } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import markstyle from './markstyle'



export default function MarkDown() {
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    const [size, setSize ] = useState(window.screen.width)

    function handleResize() {
      setSize(window.screen.width);
    }

    window.addEventListener('resize', handleResize)



  const content = `
    
class Madu_Chibuzo {
··// I'm ambitious and love new challenges :)
··// My vast variety of skills is continuously expanding.

·· constructor() {

····this.name = 'Madu Chibuzo'
····this.email = 'chibuzo.madu90@gmail.com'
····this.phone = '+234-8140419479'

··}

·· workExperience () {

····return [
······{ '2019-now' : 'Front-end Developer at LunaBase Nigeria.' },
······{ '2018-2019': 'Coding Instructor at TechCreek Nigeria.' },
······{ '2017': 'Internship at Juris Tech Malaysia' }
····]

··}

·· education() {

····return [
······{ '2014-2018': 'Information Technology - Multimedia Uiversity Malaysia' }
····]

··}

·· skills() {

····return [ 'HTML5', 'CSS', 'Javascript' 'React', 'Bootstrap', 
             'npm/yarn/bower', 'GIT/GitHub', 'Firebase', 'PHP',
             'Wordpress'
            ]
        
··}

    `;

    const mobileContent = `
class Madu_Chibuzo {
/* I'm ambitious and love 
   new challenges :) */

/* My vast variety of skills 
   is continuously expanding */

constructor() {

this.name='Madu Chibuzo'
this.email='chibuzo.madu90@gmail.com'
this.phone='+234-8140419479'

}

workExperience () {

return [

·{ 
  '2019-now' : 
    'Front-end Developer 
    at LunaBase Nigeria'
  },

·{ 
  '2018-2019': 
    'Coding Instructor 
    at TechCreek Nigeria.' 
  },

·{ 
  '2017': 
    'Internship at 
     Juris Tech Malaysia' 
  }

·]

··}

education() {

return [

·{ 
  '2014-2018': 
    'Information Technology - 
      Multimedia Uiversity Malaysia' 
  }
·]

··}

skills() {

return [ 

  'HTML5', 'CSS', 'Javascript', 
  'React', 'Bootstrap', 'Firebase',
  'npm/yarn', 'GIT/GitHub', 'PHP', 
  'Wordpress'

  ·]
      
··}

  `;

  return (
    <div>
    <SyntaxHighlighter language="jsx" style={markstyle}>
        {size > 500 ? content : mobileContent}
    </SyntaxHighlighter>
      
    </div>
  );
}
