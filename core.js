const number1 = $('.num1')
const number2 = $('.num2')
const plus = $('.plus')
const minus = $('.minus')
const umn = $('.umn')
const del = $('.del')
const result = $('.res')

plus.on('click', function(){
    let sum = +number1.val() + +number2.val()
    result.text(sum)
})

minus.on('click', function(){
    let sum = +number1.val() - +number2.val()
    result.text(sum)
})
umn.on('click', function(){
    let sum = +number1.val() * +number2.val()
    result.text(sum)
})

del.on('click', function(){
    let sum = +number1.val() / +number2.val()
    result.text(sum)
})