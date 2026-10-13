/* =====================================
   PET CARE MANAGEMENT SYSTEM
===================================== */


/* =====================================
   PET REGISTRATION
===================================== */

const petForm = document.getElementById("petForm");

petForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const petName =
        document.getElementById("petName").value;

    const petType =
        document.getElementById("petType").value;

    const breed =
        document.getElementById("breed").value;

    const age =
        document.getElementById("age").value;

    const ownerName =
        document.getElementById("ownerName").value;

    const phone =
        document.getElementById("phone").value;


    const pet = {

        name: petName,

        type: petType,

        breed: breed,

        age: age,

        owner: ownerName,

        phone: phone

    };


    let pets =
        JSON.parse(
            localStorage.getItem("pets")
        ) || [];


    pets.push(pet);


    localStorage.setItem(
        "pets",
        JSON.stringify(pets)
    );


    alert(
        "🐾 Pet registered successfully!"
    );


    petForm.reset();


    displayPets();

});


/* =====================================
   DISPLAY PETS
===================================== */

function displayPets() {

    const petList =
        document.getElementById("petList");

    const petCount =
        document.getElementById("petCount");


    let pets =
        JSON.parse(
            localStorage.getItem("pets")
        ) || [];


    petCount.textContent =
        pets.length;


    if (pets.length === 0) {

        petList.innerHTML =
            `<p class="empty">
                No pets registered yet.
            </p>`;

        return;
    }


    petList.innerHTML = "";


    pets.forEach(function(pet, index) {

        const div =
            document.createElement("div");


        div.className =
            "record-item";


        div.innerHTML = `

            <strong>
                🐾 ${pet.name}
            </strong>

            <br>

            Type:
            ${pet.type}

            <br>

            Breed:
            ${pet.breed}

            <br>

            Age:
            ${pet.age}

            <br>

            Owner:
            ${pet.owner}

            <br>

            Phone:
            ${pet.phone}

        `;


        petList.appendChild(div);

    });

}


/* =====================================
   APPOINTMENT BOOKING
===================================== */

const appointmentForm =
    document.getElementById(
        "appointmentForm"
    );


appointmentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const pet =
            document.getElementById(
                "appointmentPet"
            ).value;


        const owner =
            document.getElementById(
                "appointmentOwner"
            ).value;


        const doctor =
            document.getElementById(
                "doctor"
            ).value;


        const date =
            document.getElementById(
                "appointmentDate"
            ).value;


        const time =
            document.getElementById(
                "appointmentTime"
            ).value;


        const reason =
            document.getElementById(
                "reason"
            ).value;


        const appointment = {

            pet: pet,

            owner: owner,

            doctor: doctor,

            date: date,

            time: time,

            reason: reason

        };


        let appointments =
            JSON.parse(
                localStorage.getItem(
                    "appointments"
                )
            ) || [];


        appointments.push(
            appointment
        );


        localStorage.setItem(
            "appointments",
            JSON.stringify(
                appointments
            )
        );


        alert(
            "📅 Appointment booked successfully!"
        );


        appointmentForm.reset();


        displayAppointments();

    }
);


/* =====================================
   DISPLAY APPOINTMENTS
===================================== */

function displayAppointments() {

    const appointmentList =
        document.getElementById(
            "appointmentList"
        );


    const appointmentCount =
        document.getElementById(
            "appointmentCount"
        );


    let appointments =
        JSON.parse(
            localStorage.getItem(
                "appointments"
            )
        ) || [];


    appointmentCount.textContent =
        appointments.length;


    if (appointments.length === 0) {

        appointmentList.innerHTML =
            `<p class="empty">
                No appointments booked yet.
            </p>`;

        return;
    }


    appointmentList.innerHTML = "";


    appointments.forEach(
        function(appointment) {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "record-item";


            div.innerHTML = `

                <strong>
                    📅 ${appointment.pet}
                </strong>

                <br>

                Owner:
                ${appointment.owner}

                <br>

                Veterinarian:
                ${appointment.doctor}

                <br>

                Date:
                ${appointment.date}

                <br>

                Time:
                ${appointment.time}

                <br>

                Reason:
                ${appointment.reason}

            `;


            appointmentList.appendChild(
                div
            );

        }
    );

}


/* =====================================
   CLAIM OFFER
===================================== */

function claimOffer(offerName) {

    alert(
        "🎉 Offer Claimed Successfully!\n\n" +
        "Selected Offer: " +
        offerName +
        "\n\n" +
        "Please book an appointment to use this offer."
    );


    document
        .getElementById("appointment")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   SET MINIMUM APPOINTMENT DATE
===================================== */

const dateInput =
    document.getElementById(
        "appointmentDate"
    );


const today =
    new Date()
        .toISOString()
        .split("T")[0];


dateInput.min = today;


/* =====================================
   LOAD SAVED DATA WHEN PAGE OPENS
===================================== */

displayPets();

displayAppointments();