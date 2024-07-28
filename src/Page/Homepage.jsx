import { useEffect, useRef } from 'react';
import Hero from '../Components/hero';
import Project from '../Components/project';

const Homepage = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    const colors = ['#000000', '#000000', '#000000', '#000000', '#000000'];

    const coords = { x: 0, y: 0 };
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      for (let i = circles.length - 1; i >= 0; i--) {
        const circle = circles[i];

        circle.style.left = circle.x - 12 + 'px';
        circle.style.top = circle.y - 12 + 'px';
        circle.style.transform = `scale(${
          (circles.length - i) / circles.length
        })`;

        const nextCircle = circles[i - 1] || { x: coords.x, y: coords.y };
        circle.x += (nextCircle.x - circle.x) * 0.6; // Increase this value to make the circles follow faster
        circle.y += (nextCircle.y - circle.y) * 0.6; // Increase this value to make the circles follow faster
      }

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    const textElements = document.querySelectorAll(
      'p, h1, h2, h3, h4, h5, h6, a'
    ); // Add any other selectors for text elements

    textElements.forEach((el) => {
      el.addEventListener('mouseover', () => {
        circles.forEach((circle) => {
          circle.style.opacity = 0; // Make the circle transparent
          // Or invert the color
          // circle.style.filter = 'invert(1)';
        });
      });

      el.addEventListener('mouseout', () => {
        circles.forEach((circle) => {
          circle.style.opacity = 1; // Make the circle opaque again
          // Or remove the invert filter
          // circle.style.filter = 'invert(0)';
        });
      });
    });
  }, []);

  return (
    <div>
      <Hero />
      <Project />
      {/* Other components */}
      {Array(20)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            ref={(el) => (circlesRef.current[i] = el)}
            // className="circle"
            style={{
              height: '24px',
              width: '24px',
              borderRadius: '24px',
              backgroundColor: 'black',
              position: 'fixed',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 99999999,
            }}
          />
        ))}
    </div>
  );
};

export default Homepage;
