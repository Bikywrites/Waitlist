'use server';


export async function createWaitlist(formData) {
  
  try {
    const response = await fetch('https://bikywrites.up.railway.app/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return ('form submission successful');
    // Handle success (e.g., show success message to user)
  } catch (error) {
    return error;
  }
}
