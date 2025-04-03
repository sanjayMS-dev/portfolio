/*SKILLS*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemclass = this.parentNode.className

    for ( i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemclass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

/*QUALIFICATION*/

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')

        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("TrGGdV4vTdHlshhgX"); 

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs
        .send("service_r0t52jk","template_4bkyukn",  {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          project: document.getElementById("project").value,
          message: document.getElementById("message").value,
        })
        .then(
          function (response) {
            alert("Message sent successfully! ✅");
            document.getElementById("contact-form").reset(); 
          },
          function (error) {
            alert("Failed to send message. ❌ Please try again.");
            console.log("Error:", error);
          }
        );
    });
});


