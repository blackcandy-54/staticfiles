const gettUrl = window.location.href;
const Url = gettUrl.replace("/stream/", "/");


function copyURL() {
  navigator.clipboard.writeText(Url)
    .then(() => {
      // Success
      const feedback = document.getElementById("feedback");
      feedback.textContent = "URL copied to clipboard!";
      feedback.style.color = "green";
      alert("Link copied to clipboard!");
    })
    .catch(err => {
      // Fallback for older browsers
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        const textArea = document.createElement("textarea");
        textArea.value = Url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');   

        textArea.remove();
        const feedback = document.getElementById("feedback");
        feedback.textContent = "URL (hopefully) copied to clipboard!";
        feedback.style.color = "green";
      } else {
        // Log error for non-compatibility issues
        console.error("Error copying text:", err);
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Failed to copy URL!";
        feedback.style.color = "red";
      }
    });
}

function playInVLC() {
    const vlcUrl = `vlc://${Url}`;
    window.location.href = vlcUrl;
}
