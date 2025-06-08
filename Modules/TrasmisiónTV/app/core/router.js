class RouterComponent extends React.Component{
  
  static send_post(forms = "#userinfo", url = "https://example.org/post"){
    const form = document.querySelector(forms);

    async function sendData() {
      // Associate the FormData object with the form element
      const formData = new FormData(form);
    
      try {
        const response = await fetch(url, {
          method: "POST",
          // Set the FormData instance as the request body
          body: formData,
        });
        console.log(await response.json());
      } catch (e) {
        console.error(e);
      }
    }
    
    // Take over form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      sendData();
    });

  }
  
  static send_get(forms = "#userinfo", url = "https://example.org/post"){
    const form = document.querySelector(forms);

    async function sendData() {
      // Associate the FormData object with the form element
      const formData = new FormData(form);
    
      try {
        const response = await fetch(url, {
          method: "GET",
          // Set the FormData instance as the request body
          body: formData,
        });
        console.log(await response.json());
      } catch (e) {
        console.error(e);
      }
    }
    
    // Take over form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      sendData();
    });

  }
    
  static get_ruter(ruta = "", action = ""){
      return Route + ruta + action
  }
  
}