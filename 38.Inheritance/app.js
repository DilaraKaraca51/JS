//ınheritance(miras alma)
class person {
    firstname = "dilara";
    write() {
        console.log("person write", this.firstname);
    }
}

class student extends person {
    write() {
        console.log("student write", this.firstname)
        super.write();//persona gitti
    }
}

const student1 = new student();
student1.write();


//THIS-SUPER-SUPER()
