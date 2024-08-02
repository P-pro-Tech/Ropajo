// import React, { useEffect } from 'react'

// const Slide = () => {

//   useEffect(() => {
//         const observer = new IntersectionObserver((entries)=> {
//         entries.forEach((entry)=>{
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }else {
//             entry.target.classList.remove('show');
//         }
//         });
//     });

//     const navElement = document.querySelectorAll('.hidden');
//     navElement.forEach((el) => {
//         observer.observe(el);
//     });
//       }, []);

//   return (
//     <div className='hidden'>Slide</div>
//   )
// }

// export default Slide;