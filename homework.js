console.log("exercise1") 
function maxNumber (m,n){if (m>n) 
    {return m;}
    else if (n>m) 
        {return n;}
        else {return 0;}}
        console.log(maxNumber(24, 67))

        console.log("exercise2")
        function add(m,n){
            let result=m+n;
            console.log (result);}
            add(78, 15)

            console.log("exercise3")
            function printName()
            {console.log("Nino Natchkebia")}
            printName()

            console.log("exercise4")
            function printName (firstName,lastName)
            {return firstName +" "+ lastName;}
            let fullname=printName("Nino", "Natchkebia")
            console.log(fullname)

            console.log("exercise5")
            function multiplyUpTo(n){let number=1;
                for(let i=1; i<=8; i++) {number*=i} return number;}
                console.log(multiplyUpTo(8))
                
                console.log("exercise6")
                let student={
                    firstName:"Nino", lastName:"Natchkebia",age:34, 
                    scores:[4,7,5,3,2],
                   fullName:function ()
                    {return this.firstName +" "+ this.lastName}};
console.log(student.fullName());

console.log("exercise7")
let scores = [4, 7, 5, 3, 2];
let sum=0;
for(let i=0;i<scores.length;i++)
{sum+=scores[i]};
console.log(sum)

console.log("exercise8")
console.log(student.firstName +" " + student.age)