//? HERE AM GONNA CREATE THE HTML elements INSIDE THE JS BY USING DOM also this is what does 


 const heading =document.createElement('h1'); //* here am creating the element inside my js file ie h1

 heading.innerHTML="NAMASTE REACT"; //-here am creating the innerHTML inside my h1 element 

 

 

document.querySelector('#root').appendChild(heading); //-selecting the div by id and putting the element (h1) inside it , by using .appendChild api



document.body.style.background="pink"   //- this is for changing the background colour of html to pink



/**
 * //* THESE ARE THE COMMENTS THAT CAN BE WRITTEN IN VARIOUS COLOURS  
 * 
 * //-  my first comment   --> PINK
 * //*  my second comment  --> YELLOW
 * //Todo  my third comment --> ORANGE
 * //! my forth comment --> RED
 * //? my fifth comment  -->GREEN
 */
