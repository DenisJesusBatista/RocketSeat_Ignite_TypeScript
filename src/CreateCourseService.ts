/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration?: number; /**Atributo opcional na interface, usa-se o ? */
    educator: string;

}

class CreateCourseService {
    execute({ duratio = 8, educator, name }: Course) {
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();