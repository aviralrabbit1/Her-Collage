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
    duration: 5000,
    fill: "forwards",
    easing: "ease",
  })
}

function App() {
  return (
    <div className="App">
      <div id="gallery">
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/HxB214GC/me-shubhangi-tent.jpg&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div class="tile">
          <img alt='' src="  https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQ2Yzg4OWY4Mzg4ZGQ2YzY5ZGU1MDQxMWJlM2U3NzZiYTA0MjU0ZiZjdD1n/xbrqrnKzqCbJv3eI7H/giphy.gif" />
        </div>
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/TY8PKf7q/baby-whitecap.jpg&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/SRGZhZ2X/specstop-affrontfield1.jpg&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/D0HY5xNR/smilecreative1.jpg&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/pLXPgTcC/child-with-family.jpg&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/W4Dfk6KK/pinkfrilledneckdress2.jpg&auto=format&fit=crop&w=800&q=70" />
        </div>
        <div class="tile">
          <img alt='' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzIyYmZkMjRjYzk0ZDJjN2E4MDZiMzI5MTE1MTVlMzM1NDE3MTYzYiZjdD1n/4FjjPxM5kAruCjz9Lr/giphy.gif" />
        </div>
        <div class="tile">
          <img alt='' src="https://i.postimg.cc/d3cXvk5f/black-striped2.jpg&auto=format&fit=crop&w=800&q=70" />
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
