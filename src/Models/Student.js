export class Student {
    constructor ( city, company, email, grades, firstName, lastName, id, skill, pic, average, tags = [] ) {
        this.city = city;
        this.company = company;
        this.email = email;
        this.grades = grades;
        this.firstName = firstName; 
        this.lastName = lastName;
        this.id = id;
        this.skill = skill;
        this.pic = pic;
        this.average = average; 
        this.tags = tags;
    }   
} 
