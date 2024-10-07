function write(firstName, lastName) {
    console.log("İsim: " + firstName + " " + " Soyisim: " + lastName)
    console.log(`İsim: $(firstName) Soyisim: $(lastName)`)
}

write("dilara", "karaca")

function getUserById(userId) {

    console.log(`http://localhost:8080/users/${userId}`)
}

getUserById(8)