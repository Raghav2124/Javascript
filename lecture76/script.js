// class RailwayForm {
//     submit() {
//       alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//     }
//     cancel() {
//       alert(this.name + ": This form is cancelled for train number: " + this.trainno)
//     }
//     fill(givenname, trainno) {
//       this.name = givenname
//       this.trainno = trainno
//     }
//   }
  
//   // Create a form for Harry
//   let harryForm = new RailwayForm()
//   // Fill the form with Harry's details
//   harryForm.fill("Harry", 145316)
  
//   // Create a forms for Rohan
//   let rohanForm1 = new RailwayForm()
//   let rohanForm2 = new RailwayForm()
//   // Fill the forms with Rohan's details
//   rohanForm1.fill("Rohan", 222420)
//   rohanForm2.fill("Rohan", 2229211)
  
//   harryForm.submit()
//   rohanForm1.submit()
//   rohanForm2.submit()
//   rohanForm1.cancel()
class RailwayForm {
    constructor(givenname, trainno, address) {
      console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
      this.name = givenname
      this.trainno = trainno
      this.address = address
    }
  
    preview() {
      alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
    }
  
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
  
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
      this.trainno = 0
    }
  }
  
  let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
  harryForm.preview()
  harryForm.submit()
  harryForm.cancel()
  harryForm.preview()
  class Animal {
    constructor(name, color) {
      this.name = name
      this.color = color
    }
    run() {
      console.log(this.name + " is running!")
    }
    shout() {
      console.log(this.name + " is barking!")
    }
  }
  
  class Monkey extends Animal {
    eatBanana() {
      console.log(this.name + " is eating banana")
    }
    hide() {
      console.log(`${this.name} is hiding`)
    }
  }
  
  let ani = new Animal("Bruno", "white")
  let m = new Monkey("Chimpu", "orange")
  
  ani.shout()
  m.eatBanana()
  m.hide()
  // ani.hide() //This will throw an error
  class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`This is a newly written constructor`)
    }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  
    }
  }
  
  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)