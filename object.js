/* Construct an object which contains a school’s details like cohort
     name, learners, and address, using a constructor function or a class.
     Example of object:
    {
       name: "name of the school",
       learners: ["Learner 1", "Learner 2", "Learner 3"],
       address: "Mumbai";
    }
    Create a method inside the constructor function or class which prints
    the name of the school */

    class School{
        constructor(cohort,learners,address){
            this.cohort=cohort;
            this.learners=learners;
            this.address=address;
        }print(){
            console.log("name of the school is"+" "+this.cohort)
        }
    }
    let school = new School("delephinus",["Learner 1", "Learner 2", "Learner 3"],"mumbai")
    school.print()