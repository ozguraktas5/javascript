/* //!1- Bir dizideki pozitif ve çift sayıların toplamını ve adedini bulun.
const arr=[-5,6,3,-5,-7,4,12,-58,72];
let toplam=0;
let adet=0;
for(let i=0; i< arr.length;i++){
    if(arr[i]>0 && arr[i]%2==0){
        toplam+=arr[i]
        adet++;
    }
} 
for(let item of arr){
   if(item>0 && item%2==0){
    toplam+=item;
    adet++
   }
}
console.log(`${adet} sayinin toplami ${toplam}`) */

/* const ulkeler = [
  "Türkiye",
  "Almanya",
  "Fransa",
  "Hollanda",
  "İtalya",
  "İspanya",
  "Portekiz",
];
const baskentler = [
  "Ankara",
  "Berlin",
  "Paris",
  "Amsterdam",
  "Roma",
  "Madrid",
  "Lizbon",
]; */

//! 2- Ülke ve başkentlerin yazılı olduğu dizilerinde eşleşen indis elemanlarını
// birleştirerek ayrı bir diziye atın.

/* let newArr = [];

for(let i in ulkeler){
    newArr.push(ulkeler[i] + "-" + baskentler[i])
}

console.log(newArr) */

//!3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli olarak
// değiştirip alfabetik hale getirip yazdırın.

/* let ulkeler2 = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  let newArr2=[];
  ulkeler2= ulkeler2.sort((a,b)=>a.localeCompare(b))
  for(let item of ulkeler2){
 //newArr2.push(item.substring(0,3).toLocaleUpperCase())
 item=item.substring(0,3).toLocaleUpperCase()
 newArr2.push(item)
  }
console.log(newArr2) */

/* //! 4- Dizideki herbir elemanın 2 katının mutlak değerini alıp
// başka bir diziye atın.
// Yeni dizinin elemanları azalan şekilde sıralansın.
let arr=[-5,6,3,-5,-7,4,12,-58,72];
let newArr=[];
arr.forEach((item,index)=>{
    newArr[index]=Math.abs(item*2)
})
newArr=newArr.sort((a,b)=>b-a)
console.log(newArr)
 */



