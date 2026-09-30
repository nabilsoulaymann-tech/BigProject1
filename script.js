function load(){
      document.getElementById('preloader').style.display='none'
    }
    window.addEventListener('load',load);


    const section2=document.getElementById('container2');
    const watcher = new IntersectionObserver(function(section){
      section.forEach((element)=>{
        if (element.isIntersecting){
          element.target.classList.add('visible');
         
        }
      })

    },{threshold:0.6});
    watcher.observe(section2);
    const about=document.getElementById('about');
    const observer = new IntersectionObserver(function(section){
section.forEach((element)=>{
        if (element.isIntersecting){
          element.target.classList.add('visible');
     }

    })}
    ,{threshold:0.2});
    observer.observe(about);
  const track = document.getElementById("track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let autoplayTimer;
  const totalSlides = track.children.length;

  function showSlide() {
    track.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
  }
  function nextSlide() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= totalSlides) 
    { currentIndex = 0}
    showSlide()
  }
  function prevSlide() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0){
       currentIndex = totalSlides - 1
      }
    showSlide();
  }
  function startAutoplay(){ 
    autoplayTimer = setInterval(nextSlide, 3000) 
  }
  function resetAutoplay()
   { clearInterval(autoplayTimer); 
    startAutoplay()

   }

  nextBtn.addEventListener("click",function()
  { nextSlide(); resetAutoplay();

   });
  prevBtn.addEventListener("click", function() 
  {prevSlide(); resetAutoplay(); 

  });

  startAutoplay();