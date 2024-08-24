

// masala Sharti
// 1. son tub yoki tubmasligini aniqlash
//  2. users nomli arrey bor shuni ichidagi userlarni id si tub bo'lgan objectlarni yangi arreyga qo'shish
//  3. user larni maoshlarini hissoblab 1 ta user ga biriktirish
//  4. arrey ichidagi unic sonarni qoldirish 
// 5 arrey ichidagi user nomli objetlarni idlari takrorlanganlarini chiqarib yuborish


// 1
// function isPrime(num: number): boolean {
//     if (num <= 1) return false;
//     if (num === 2) return true;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// 2
// type User = {
//     id: number;
//     name: string;
//     salary: number;
// };

// const users: User[] = [
//     { id: 1, name: 'John', salary: 1000 },
//     { id: 2, name: 'Jane', salary: 1500 },
//     { id: 3, name: 'Bob', salary: 2000 },
//     // ... ko'proq userlar
// ];

// const primeUsers = users.filter(user => isPrime(user.id));

// console.log(primeUsers); // id si tub bo'lgan userlar

// 3
// const totalSalaryUser: User = {
//     id: 0,
//     name: 'Total Salary',
//     salary: users.reduce((acc, user) => acc + user.salary, 0),
// };

// console.log(totalSalaryUser); // jami maosh biriktirilgan user


// 4
// const numbers: number[] = [1, 2, 3, 2, 4, 3, 5];

// const uniqueNumbers = Array.from(new Set(numbers));

// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 5
// const uniqueUsers = users.filter((user, index, self) =>
//     index === self.findIndex((u) => u.id === user.id)
// );

// console.log(uniqueUsers); // id si takrorlanmagan userlar
