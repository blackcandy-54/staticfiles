
const gettUrl = window.location.href;
const Url = gettUrl.replace("/stream/", "/");

function playInVLC() {
    const vlcUrl = `vlc://${Url}`;
    window.location.href = vlcUrl;
}
