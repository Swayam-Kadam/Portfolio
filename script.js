const typed = new Typed('.typed-text', {
    strings: ['FrontEnd-Developer.', 'Backend-Developer','FullStack-Developer.'],
    typeSpeed: 100,
    backspeed:50,
    loop:true
  });

  document.querySelector(".Read-more").addEventListener("click", function() {
    const moreText = document.querySelector(".more-text");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        this.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        this.textContent = "Read More";
    }
});

  //hamburger menu toggle

  const Hamburger =  document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  Hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
  })

    // Close menu when any link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
      });
  });

  //animation to my journey section

  function animatTimelineItem(){

    const animatTimelineItem = document.querySelectorAll('.timeline-item');
    animatTimelineItem.forEach((item,index)=>{

      setTimeout(() =>{

        item.classList.add('animate');
      },index * 200);
    });
  }

  //function to check if an element is in viewport
  function isInviewport(element){

    const rect = element.getBoundingClientRect();
    return(

      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)&&
      rect.right <= (window.innerWidth || document.documentElement.clientHeight)
    );
  }

  //function to handle scroll animation
  function handleScrollAnimtion(){
    const timeLineItem = document.querySelectorAll('.timeline-item');
    timeLineItem.forEach((item)=>{

      if(isInviewport(item)){
        item.classList.add('animate');
      }
      else{
        item.classList.remove('animate');
      }
    });
  }

  //add scroll event listener

  window.addEventListener('scroll',handleScrollAnimtion);

  //intial check on page load
  window.addEventListener('load',handleScrollAnimtion);

  //skill-section

  function animateSkills(){

    const skillsBar = document.querySelectorAll('.skill-progress');
    skillsBar.forEach(bar=>{

      if(isInviewport(bar) && !bar.style.width){

        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
        const percentageSpan = bar.parentElement.previousElementSibling.querySelector('.skill-percentage');
        let count =0;

        const interval = setInterval(()=>{

          if(count >= parseInt(percentage)){
            clearInterval(interval);
          }else{
            count++;

            percentageSpan.textContent = count + '%';
          }
        },20);

      }

    });
  }

  // Contact form submission handler
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const submitButton = contactForm.querySelector('#submitButton');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Change button text to "Submitting..."
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
  
      const formData = {
        fullName: contactForm.querySelector('input[name="fullName"]').value,
        emailSubject: contactForm.querySelector('input[name="emailSubject"]').value,
        mobileNumber: contactForm.querySelector('input[name="mobileNumber"]').value,
        emailAddress: contactForm.querySelector('input[name="emailAddress"]').value,
        message: contactForm.querySelector('textarea[name="message"]').value
      };
  
      fetch('https://script.google.com/macros/s/AKfycbziv-fwEMVU3hQAILeZHq2o1Esvn-yq7K2qVWzw0G6d48DidPZCcPfJ1qlZifVQWqE/exec', {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.text())
      .then(data => {
        alert('Form submitted successfully!');
        contactForm.reset();
      })
      .catch(err => {
        alert('Error submitting form. See console for details.');
        console.error(err);
      })
      .finally(() => {
        // Restore the original button text and enable the button
        submitButton.textContent = 'Submit';
        submitButton.disabled = false;
      });
    });
  });
  
  


   //add scroll event listener

   window.addEventListener('scroll',animateSkills);

   //intial check on page load
   window.addEventListener('load',animateSkills);


   