const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

console.log(btns)

let count = 0;

// btns[0].addEventListener('click', blablabla)
// btns[1].addEventListener('click', blablabla)
// btns[2].addEventListener('click', blablabla)

// btns.forEach(function(btn) {
//   btn.addEventListener('click', function(e){
//     console.log(e.type) //click
//     const kliklediyimYer = e.target

//     if(kliklediyimYer.classList.contains('increase')){
//       // count= count+1
//       count++
//       counter.classList.add('up')

//       setTimeout(function(){
//         counter.classList.remove('up')
//       },500)

//     }

//     else if(kliklediyimYer.classList.contains('decrease')) {
//       count--
//       counter.classList.add('down')
//       setTimeout(function(){
//         counter.classList.remove('down')
//       },500)
//     }

//     else {
//       count=0
//     }

//     counter.innerText = count

//   })
// })

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classlist = e.currentTarget.classList;
    if(classlist.contains('increase')) {
      count++
      counter.classList.add('up')

      setTimeout(() => {
        counter.classList.remove('up')
      }, 500)
    } else if(classlist.contains('decrease')) {
      count--

      counter.classList.add('down')

      setTimeout(() => {
        counter.classList.remove('down')
      }, 500)
    } else {
      count = 0
    }

    if (count > 0) {
      counter.style.color = 'green'
    }

    if (count < 0) {
      counter.style.color = 'red'
    }

    if(count === 0) {
      counter.style.color = 'grey'
    }

    counter.textContent = count
  });
});