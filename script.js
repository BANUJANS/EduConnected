const teachers = [
    {
        name: "Teacher A",
        language: "tamil",
        grade: "o/l",
        fees: "1000 LKR",
        time: "10:00 AM - 12:00 PM",
        video: "https://www.example.com/teacherA",
        contact: "0123456789",
        whatsapp: "0123456789",
        photo: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
        name: "Teacher B",
        language: "english",
        grade: "a/l",
        fees: "2000 LKR",
        time: "2:00 PM - 4:00 PM",
        video: "https://www.example.com/teacherB",
        contact: "0987654321",
        whatsapp: "0987654321",
        photo: "https://via.placeholder.com/150" // Placeholder image URL
    },
    // Add more teacher objects as needed
];


function displayTeachers(teachers) {
    const teachersSection = document.getElementById("teachers");
    teachersSection.innerHTML = ""; // Clear previous content
    teachers.forEach(teacher => {
        const teacherCard = document.createElement("div");
        teacherCard.className = "teacher-card";
        teacherCard.innerHTML = `
            <img src="${teacher.photo}" alt="Profile Photo">
            <h3>${teacher.name}</h3>
            <p><strong>Language:</strong> ${teacher.language}</p>
            <p><strong>Grade:</strong> ${teacher.grade}</p>
            <p><strong>Fees:</strong> ${teacher.fees}</p>
            <p><strong>Teaching Time:</strong> ${teacher.time}</p>
            <p><strong>Contact:</strong> ${teacher.contact}</p>
            <p><strong>WhatsApp:</strong> ${teacher.whatsapp}</p>
            <a href="${teacher.video}" target="_blank">Watch Teaching Video</a>
        `;
        teachersSection.appendChild(teacherCard);
    });
}

function filterTeachers() {
    const language = document.getElementById("language").value;
    const grade = document.getElementById("grade").value;
    const filteredTeachers = teachers.filter(teacher => {
        return (language === "all" || teacher.language === language) &&
               (grade === "all" || teacher.grade === grade);
    });
    displayTeachers(filteredTeachers);
}

function openPopup() {
    document.getElementById("teacher-form-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("teacher-form-popup").style.display = "none";
}

function addTeacher() {
    const name = document.getElementById("name").value;
    const language = document.getElementById("teacher-language").value;
    const grade = document.getElementById("teacher-grade").value;
    const fees = document.getElementById("fees").value;
    const time = document.getElementById("time").value;
    const video = document.getElementById("video").value;
    const contact = document.getElementById("contact").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const photoInput = document.getElementById("photo");
    const photo = URL.createObjectURL(photoInput.files[0]);

    const newTeacher = {
        name,
        language,
        grade,
        fees,
        time,
        video,
        contact,
        whatsapp,
        photo
    };

    teachers.push(newTeacher);
    displayTeachers(teachers);

    // Clear the form and close the popup
    document.getElementById("teacher-form").reset();
    closePopup();
}

document.getElementById("add-teacher-btn").addEventListener("click", openPopup);

// Initial display of all teachers
displayTeachers(teachers);
