
const person = { name: 'jankar', age : 18, job: 'faceBOOK-alltime' , address : "Kochu Khet",phone : '019214495997', 
               friends: ['tom' , 'babi' , 'margan', 'dibuni', 'mayisa'], GfNaqme :'labiba'}

const phone = person.phone;
const age = person.age;
const { job } = person;

console.log(person.GfNaqme , age);
console.log(phone , job);

const friends = ['tom' , 'babi' , 'margan', 'dibuni', 'mayisa'];
const [ chotoFriend , ...olderFriend] = friends; 
console.log( chotoFriend , olderFriend);



// ???????????????????????????????????????????????
const Babafriend = {
     
    address : 'kotl nabag',
    
    info : {

        nmae: "babagi",
        job: "tax manager"

    }

}

const { job } = Babafriend.info;
console.log( job ,name);