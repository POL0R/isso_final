import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const logoRef = useRef(null);
  const logoFullRef = useRef(null);
  const bodyMakerLoading = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const tl = gsap.timeline({
        onComplete: () => {
        
            navigate('/homepage'); 
          }
    });
  
    tl.fromTo(logoRef.current, 
      { clipPath: 'inset(100% 0 0 0)' }, 
      { clipPath: 'inset(0% 0 0 0)', duration: 0.8, delay: 0.5, ease: 'ease-in-out' }
    )
    .fromTo(logoFullRef.current, 
        { clipPath: 'inset(100% 0 0 0)' }, 
        { clipPath: 'inset(0% 0 0 0)', duration: 0.8, delay: 0.5, ease: 'ease-in-out' }
    )
    .to(bodyMakerLoading.current, { 
      backgroundColor: "white"
    })
    .to([logoRef.current, logoFullRef.current], 
        {
            scale: 50,
            opacity: 0
        }
    )

    
  },[navigate] );
  
  return (
    <div className='loading_body' ref={bodyMakerLoading}>
      <div id="loader_log" className='disappear' ref={logoRef}><img src='jpiscopy.webp' alt="Logo"></img></div>
      <div id="loader_logger" className='disappear' ref={logoFullRef}><img src='jpis.png' alt="Full Logo"></img></div>

    </div>
  );
}

export default Loading;
