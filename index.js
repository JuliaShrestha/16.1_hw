/*
Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, 
це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, 
коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
Масив – це властивість, present та absent – методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.
- ЗАДЕПЛОЇТИ
*/

function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25);
}

Student.prototype.getAge = function() {
    
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

Student.prototype.getAverageGrade = function() {

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.present = function() {
    for(i = 0; i < this.attendance.length; i++) {
        if(this.attendance[i] === undefined) {
            this.attendance[i] = true;
            break;
        }
    }
};

Student.prototype.absent = function() {
    for(i = 0; i < this.attendance.length; i++) {
        if(this.attendance[i] === undefined) {
            this.attendance[i] = false;
            break;
        }
    }
};

Student.prototype.summary = function() {
    const averageGrade = this.getAverageGrade();
    const presentDays = this.attendance.filter(day => day === true).length;

    const attendanceRate = presentDays / this.attendance.filter(day => day !== undefined).length;

    if(averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще!";
    } else {
        return "Редиска!";
    }
};

const student1 = new Student("Марія", "Москаленко", "1992");
const student2 = new Student("Роджер", "Нільсон", "1989");

student1.grades.push(95, 94, 100);
student2.grades.push(86, 91, 99);

student1.present();
student1.present();
student1.present();
student2.absent();
student2.absent();
student2.present();

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary());

console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.summary());