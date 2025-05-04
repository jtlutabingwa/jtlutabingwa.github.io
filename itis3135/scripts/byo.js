document.getElementById("introForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").files[0];
    const caption = document.getElementById("caption").value;
    const mascot = document.getElementById("mascot").value;
    const personal = document.getElementById("personal").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const webDev = document.getElementById("webDev").value;
    const platform = document.getElementById("platform").value;
    const funny = document.getElementById("funny").value;
    const extra = document.getElementById("extra").value;

    const courseElements = document.querySelectorAll("#courses input");
    const courses = Array.from(courseElements).map((input) => input.value.trim()).filter((val) => val !== "");

    let imageHTML = '';
    if (image) {
        const imageURL = URL.createObjectURL(image);
        imageHTML = `
            <img src="${imageURL}" alt="Uploaded Image">
            <p><em>${caption}</em></p>
        `;
    }

        const html = `
    <h2>Your Introduction Page</h2>
    <ul>
        <li><strong>name:</strong> ${name}</li>
        <li>
            <img src="${URL.createObjectURL(image)}" alt="Uploaded Image">
            <p><em>${caption}</em></p>
        </li>
        <li><strong>mascot:</strong> ${mascot}</li>
        <li><strong>personal:</strong> ${personal}</li>
        <li><strong>professional:</strong> ${professional}</li>
        <li><strong>academic:</strong> ${academic}</li>
        <li><strong>web Dev:</strong> ${webDev}</li>
        <li><strong>platform:</strong> ${platform}</li>
        <li><strong>funny:</strong> ${funny}</li>
        <li><strong>extra:</strong> ${extra}</li>
    </ul>
`;


    document.getElementById("result").innerHTML = html;
});
