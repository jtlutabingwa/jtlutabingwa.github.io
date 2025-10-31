function validateForm() {
    let requiredFields = ["name", "mascot", "image", "caption", "personal", "professional", "academic", "webDev", "platform"];
    for (let field of requiredFields) {
        if (document.getElementById(field).value.trim() === "") {
            alert("Please fill out all required fields.");
            return false;
        }
    }
    
    let fileInput = document.getElementById("image");
    if (fileInput.files.length === 0) {
        alert("Please upload an image.");
        return false;
    }
    
    let fileType = fileInput.files[0].type;
    if (fileType !== "image/png" && fileType !== "image/jpeg") {
        alert("Only PNG and JPG images are allowed.");
        return false;
    }
    
    if (!document.getElementById("agree").checked) {
        alert("You must agree to the terms before submitting.");
        return false;
    }
    return true;
}

function displayResults() {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Your Introduction Page</h2>";
    
    let fields = ["name", "mascot", "caption", "personal", "professional", "academic", "webDev", "platform", "funny", "extra"];
    fields.forEach((field) => {
        let value = document.getElementById(field).value.trim();
        if (value) {
            resultDiv.innerHTML += `<p><strong>${field.replace(/([A-Z])/g, ' $1')}:</strong> ${value}</p>`;
        }
    });

    let fileInput = document.getElementById("image");
    let imageUrl = URL.createObjectURL(fileInput.files[0]);
    resultDiv.innerHTML += `<img src="${imageUrl}" alt="User Uploaded Image" style="max-width: 300px; display: block; margin-top: 10px;">`;

    let courses = document.querySelectorAll(".course-entry input");
    if (courses.length > 0) {
        resultDiv.innerHTML += "<p><strong>Courses Currently Taking:</strong></p><ul>";
        courses.forEach((course) => {
            if (course.value.trim()) {
                resultDiv.innerHTML += `<li>${course.value.trim()}</li>`;
            }
        });
        resultDiv.innerHTML += "</ul>";
    }

    resultDiv.innerHTML += '<br><button onclick="resetForm()">Reset Form</button>';
}

function addCourse() {
    let courseDiv = document.getElementById("courses");
    let newCourse = document.createElement("div");
    newCourse.classList.add("course-entry");
    
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Course Name";
    newCourse.appendChild(input);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        courseDiv.removeChild(newCourse);
    };
    newCourse.appendChild(deleteBtn);
    
    courseDiv.appendChild(newCourse);
}

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("result").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("introForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        if (validateForm()) {
            displayResults();
        }
    });

    document.getElementById("introForm").addEventListener("reset", function () {
        document.getElementById("result").innerHTML = "";
    });
});
