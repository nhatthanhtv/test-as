
const btnSeach = document.querySelector('#search-btn')
const input = document.querySelector('#search')

const content = document.querySelector('.text__content')
const data = document.querySelector('.data')
const warning = document.querySelector('.warning')
const keywordNumber = document.querySelector('.keyword__number')

input.oninput = (e) => {
    keywordNumber.innerText = ''
    warning.innerText = ''

}

btnSeach.onclick = () =>{
    let value = input.value.toLowerCase().trim()
    let numberKeySearch = 0
    const lengthValue = value.length

    const a = content.innerText.toLowerCase().indexOf(value)
    const text = content.innerText.slice(a, a + lengthValue)
    if(a === -1 || value === ''){
        warning.innerText = 'Không có nội dung tìm kiếm'
    }else{
        let re = new RegExp(`${value}`, 'ig')
        const newContent = content.innerText.replaceAll(re,(item)=>{
            numberKeySearch++
            return `<span>${text}</span>`
        })
        keywordNumber.innerText = `Số lượng từ khóa: ${numberKeySearch}`
    
    
       data.innerHTML = `<p>${newContent}</p>`

    }

}