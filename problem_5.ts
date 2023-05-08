type stringType = string;
const checkStringType = (param:stringType): void => {
    if(typeof param === 'string'){
        console.log(`${param} is string`);
    }
    else{
        console.error(`${param} is not string`);
    }
}

checkStringType('45')