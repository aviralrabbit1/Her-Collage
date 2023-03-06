import './App.css';

const gallery = document.getElementById("gallery");


// gallery in pannable by mouse movement
// convert x and y from pixel to decimal value so to 
// shift the position of gallery by that percentage

window.onmousemove = e => {
  // grab current x,y position
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  // determining corresponding decimal values
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

  // cutting out height/width of window from calculation
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease",
  })
}

function App() {
  return (
    <div className="App">
          <div id="gallery">
            {/* Putting n number of images on the board */}
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1520338258525-606b90f95b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div className="tile">
          <img alt='' src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" />
        </div>
      </div>
      
      <a id="profile-link" class="meta-link" href="https://www.linkedin.com/in/aviral-verma-iiita/" 
      rel='noreferrer' target="_blank">
        <i class="fa-solid fa-link"></i>
        <span>Source</span>
      </a>
      
      <a id="yt-link" class="meta-link" href="https://www.linkedin.com/in/aviral-verma-iiita/" 
      rel='noreferrer' target="_blank">
        <i class="fa-brands fa-youtube"></i>
        <span>Linkedin</span>
      </a>
    </div>
  );
}

export default App;
