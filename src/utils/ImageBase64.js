export default function convertBase64(e) {


    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
        console.log(reader.result);
    };
    reader.onerror = error => {
        console.log("Error: ", error);
    };
}