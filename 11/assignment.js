// 1


// class Course {
//     constructor(title, length, price) {
//     }
// }

// const YogaCourse = new Course ();
// const BachataCourse = new Course ();

// console.log(YogaCourse);
// console.log(BachataCourse);



// 2


// class MathsCourse {
//     constructor(title, length, price) {
//        this.title = title;
//        this.length = length;
//        this.price = price; 
//     }

//     exitPrice() {
//         return this.calcArea();
//     }

//     calcArea() {
//         return (this.price / this.length + `${" - цена минуты контента в данном курсе"}`)
//     }

//     getOutPut() {
//         return this.outArea();
//     }

//     outArea() {
//         return `The coure of ${this.title} with cost ${this.price} duration ${this.length} minutes`
//     }
// }

// const firstTask = new MathsCourse('Maths', 60, 30);


// firstTask.exitPrice();
// console.log(firstTask.exitPrice());
// firstTask.getOutPut();
// console.log(firstTask.getOutPut());




// 3


// class Course {
//     constructor(title, length, price) {
//         this.title = title;
//         this.length = length;
//         this.price = price; 
//      }

//      publish() {
//         console.log(`${this.title} издает звук ${this.length}`)
//      }
// }

// const second = new Course("Tiger", "meow", "");


// class PracticalCourse extends Course {
//     constructor(title, length, price, numOfExercises) {
//         super(title, length, price);
//         this.numOfExercises = numOfExercises;
//     }
// }

// const writer = new PracticalCourse("Tiger", "shsdg", "sdfcvv", "rrrrrr");


// class TheoreticalCourse extends Course {
//     constructor(title, length, price) {
//     super(title, length, price);
//     }

//         publish() {
//             super.publish();
//             return `${this.title} рычит ${this.length}`;
//         }
    
// }


// const writerTwo = new TheoreticalCourse("tiger", "rrrrrrr", "meow");

// console.log(writerTwo.publish());



// 4


// class GetSetCourse {
 
//     constructor(title, length, priceValue) {
//        this.title = title;
//        this.length = length;
//        this.priceValue = priceValue; 
//     }

//     get price() {
//         if (this.priceValue >= 0) {
//             console.log('$' + `${this.priceValue}`);
//             return ('$' + `${this.priceValue}`);
//         } else {
//             console.log("value fieled of price can`t be negative");
//             return ("value fieled of price can`t be negative");
//         }
//     }

//     set price(priceValue) {
        
//         return this.priceValue = priceValue;
//     }

// }

// const courseCost = new GetSetCourse("The price of this course: ", 12, -180);

// console.log(courseCost.price);





//  5



// class PrivateCourse {

//     #priceValue;

//     constructor(title, length, priceValue) {
//        this.title = title;
//        this.length = length;
//        this.#priceValue = priceValue; 
//     }

//     get #price() {
//         if (this.#priceValue >= 0) {
//             console.log('$' + `${this.#priceValue}`);
//             return ('$' + `${this.#priceValue}`);
//         } else {
//             console.log("value fieled of price can`t be negative");
//             return ("value fieled of price can`t be negative");
//         }
//     }

//     set price(priceValue) {
        
//         return this.#priceValue = priceValue;
//     }

// }

// const CourseCost = new PrivateCourse("The price of this course: ", 12, 180);

// console.log(CourseCost.price);







//______________________________FINAL VERSION________________________________________//




class Course {

#priceValue;

    constructor (title, length, priceValue) {
        this.title = title;
        this.length = length;
        this.#priceValue = priceValue;
    }

    cost() {
        return `${this.#priceValue / this.length} цена минуты контента в данном курсе`;
    }

    exitMassage() {
        return `The coure of ${this.title} with cost $${this.#priceValue} duration ${this.length} hours`;
    }

    get #exitPrice() {
        if (this.#priceValue >= 0) {
            return `$${this.#priceValue}`;
        } else {
            return ("value fieled of price can`t be negative");
        }
    }

    set exitPrice(priceValue) {
        return this.#priceValue = priceValue;
    }

};

const InstaCourse = new Course("Instagram", 12, 35);
const FacebookCourse = new Course("Facebook", 12, -15);

console.log(InstaCourse, FacebookCourse);
console.log(InstaCourse.cost());
console.log(InstaCourse.exitMassage());


class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title,length,price);
        this.numOfExercises = numOfExercises;
    }
};

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title,length,price);
    }

    publish() {
        console.log('you do it!');
    }
};

const practicalCourse = new PracticalCourse("Programming", 2, "free", 11);
const theoreticalCourse = new TheoreticalCourse("LearnJava", 24, "free");

console.log(practicalCourse, theoreticalCourse);
theoreticalCourse.publish();


console.log(InstaCourse.exitPrice);
console.log(FacebookCourse.exitPrice);