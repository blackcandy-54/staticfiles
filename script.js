const gettUrl = window.location.href;
const Url = gettUrl.replace("/stream/", "/");

function copyURL() {
navigator.clipboard.writeText(Url)
        .then(function() {
            // Provide feedback when the URL is copied successfully
            const feedback = document.getElementById("feedback");
            feedback.textContent = "URL copied to clipboard!";
            feedback.style.color = "green";

            // Show an alert confirming the URL was copied
            alert("Link copied to clipboard!");
        })
        .catch(function(err) {
            // Handle errors in case copying fails
            const feedback = document.getElementById("feedback");
            feedback.textContent = "Failed to copy URL!";
            feedback.style.color = "red";
            console.error("Error copying text: ", err);
        });
}

function playInVLC() {
    const vlcUrl = `vlc://${Url}`;
    window.location.href = vlcUrl;
}
