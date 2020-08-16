import React from 'react';
 const Pagination = ({postsPerPage, totalposts}) =>{
     const pageNumbers = [];

     for(let i=1;i<=Math.ceil(totalposts/postsPerPage); i++){
         pageNumbers.push(i);

     }
     return(
         <div>
             <ul className="Pagination">
                 {pageNumbers.map(number=>(
                     <li key={number} className="page-item">
                         <a href="!#" className="page-link">
                             {number}
                         </a>
                     </li>
                 ))}
             </ul>
         </div>
     )
 }
 export default Pagination;