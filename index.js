// 1 Satrni teskari qilish:

// let str = 'salom'

// let str1 = str.split('').reverse().join('')

// console.log(str1);

// 2 So‘zlarni joyini almashtirish:

// let str = 'salom bolalar';

// let str1 = str.split(' ').reverse().join(' ');

// console.log(str1);



// 4 Bosh harfni katta qilish:

// let str = 'bosh hariflarni katta qilish'

// let str1 = str.split(' ');
 

// str1 = str1.map(function(v){
//     return v[0].toUpperCase() + v.slice(1);
// })


// console.log(str1.join(' '));


// 5 Belgini almashtirish:

// let str = 'salom xayr'

// let str1 = str.replace('xayr', 'bola')

// console.log(str1);


// 6 So‘zlarni hisoblash:

// let str = 'So‘zlarni hisoblash'

// let str1 = str.split(' ')
// let count = 0;
// for (let i = 0; i < str1.length; i++) {
//   count++
// }

// console.log(count);


// 8 So‘zlarni teskari qilish:

// let str = 'So‘zlarni teskari qilish';

// let reverse = str.split('').reverse() .join(''); 

// console.log(reverse); 


// 10 Belgi indeksini topish: 
// let str = 'kim salom xayr salom'

// let str1 = str.indexOf('salom')

// console.log(str1);


// 15 Unli va undoshlarni sanash:

// let str = 'Unli va undoshlarni sanash';
// let consonants = ['b', 'd', 'j', 'z', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'f', 'x', 'c', 'ch', 'sh', 'ng', 'y', 'v'];
// let vowels = ['a', 'o', 'e', 'i', 'u', 'o‘'];

// let unli = 0;
// let undosh = 0;

// for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLocaleLowerCase()

//     if (vowels.includes(char)) {
//         unli++;
//     }else if (consonants.includes(char)) {
//         undosh++;
//     }
// }

// console.log([unli, undosh]); 

// 16 So‘zlarni birlashtirish: 
// let str = 'So‘zlarni birlashtirish uchun belgini belgilash';

// let result = str.split(' ').join('-');

// console.log(result); 


//  17 Satrni katta harfga o‘tkazish:

// let str = 'Satrni katta harfga o‘tkazish'

// let str1 = str.toUpperCase()

// console.log(str1);


// 18 Raqamlarni ajratib olish:
// let str = 'Raqa5mlar3ni aj1ratib oli6sh'
// let str1 = str.split('')
// let arr = [];
// for (let i = 0; i < str1.length; i++) {
//     if (str1[i] >= '0' && str1[i] <= '9') {
//         arr.push(str1[i])
//     }
// }

// console.log(arr);


// 19 Satrni sozlash:

// let str = '                                                     Satrni sozlash                                                   '

// let str1 = str.trim()
// console.log(str1);




// Massivga oid


// 8 Ma'lum obyektni o‘chirish

// let arr = [
//     { name: 'John', age: 25 },
//     { name: 'tom', age: 30 },
//     { name: 'Name', age: 35 }
//   ];
  
//   let nameToRemove = 'John';
  
//   let updatedArr = arr.filter(item => item.name !== nameToRemove);
  
//   console.log(updatedArr);
  