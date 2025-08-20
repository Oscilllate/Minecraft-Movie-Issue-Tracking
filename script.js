function downloadFile() {
    const version = document.getElementById('version').value;
    const fileType = document.getElementById('fileType').value;
    var fileVersion = document.getElementById('fileVersion').value;
    const loader = document.getElementById('loader').value;
    if (fileType !== " ") {


        fileVersion = '1.0.1' // Change this when updating


        window.location.href = `Versions/minecraft_movie-${fileVersion}-${loader}-${version}-${fileType}.jar`;
    } else {
        window.location.href = `Versions/minecraft_movie-${fileVersion}-${loader}-${version}.jar`;
    }
}