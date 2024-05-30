import { getAge } from '../plugins/get-age.plugin';

//const { getId } = require('../plugins/get-id.plugin')
//const { getAge } = require('../plugins/get-age.plugin');
//const {getAge, getId} = require('../plugins');
interface BuildMakePersonOptions {
    getId: () => string,
    getAge: (birthdate: string) => number,
}

interface PersonOptions{
    name: string,
    birthdate: string,
}


export const buildMakePerson = ({getId, getAge}: BuildMakePersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {
        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

// const obj = { name: 'John', birthdate: '1985-10-21'};

// const john = buildPerson(obj);
// console.log(john);

