const ContactForm = (
  <form
    name="contact-form"
    method="POST"
    action="contact/?success=true"
  >
    <label htmlFor="name">Name *</label>
    <input 
      id="name"
      name="name"
      required
      type="text"
    />
    <label htmlFor="company"> Company *</label>
    <input 
      id="company"
      name="company"
      required
      type="text" />
    <label htmlFor="email">Email Address *</label>
    <input 
      type="text" 
      
    />

  </form>
)