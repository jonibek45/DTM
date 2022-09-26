alert ("Assalomu aleykum hurmatli talaba! \n O'qishga qabul bo'ldingizmi yoki yo'q bilmoqchimisiz? \n Unda OK ni bosing!")

const info = prompt ("Ism va familiyangizni kiriting!")

const mark = prompt(`${info} Imtihonda nechi ball olganingizdi kiriting!`)


if (mark < 80 ){
    alert (`${info} Afsuski siz o'qishga qabul bo'lmadingiz!`)
} 
if (mark >= 80 && mark < 100){
    alert (`${info}  Super kontrakt asosida o'qishga tavsia qilindingiz! \n Kontrakt miqdori yiliga 3000$`)
    alert (`${info}  Super kontrakt to'lashga rozi bo'lsangiz OK ni bosing!`)

}

if (mark > 100 && mark <= 150){
    alert (`${info}  Kontrakt asosida o'qishga qabul qlindingiz! \n Kontrakt yiliga 2000$ ni tashkil etadi!`)
    alert (`${info}  Kontrakt to'lashga rozi bo'lsangiz OK ni bosing!`)
}
if (mark > 150 && mark <= 180){
    alert (`${info} Tabriklaymiz siz grant asosida o'qishga qabul qilindingiz!`)
}
    








