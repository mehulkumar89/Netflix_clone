let poster_container_0 = document.getElementsByClassName('poster-container')[0];
let poster_container_1 = document.getElementsByClassName('poster-container')[1];
let poster_container_2 = document.getElementsByClassName('poster-container')[2];
let json_url = "movie.json";
fetch(json_url).then(Response => Response.json())
.then((data)=> {
  data.forEach((ele, i ) => {
      let{sposter} = ele;
      let poster= document.createElement('class');
      poster.classList.add('poster');
    //   card.href = url;
     poster.innerHTML = `
          <img src = "${sposter}" height ="240px">
    `
   poster_container_0.appendChild(poster);
   
    

})
})

fetch(json_url).then(Response => Response.json())
.then((data)=> {
  data.forEach((ele, i ) => {
      let{sposter} = ele;
      let poster= document.createElement('class');
      poster.classList.add('poster');
    //   card.href = url;
     poster.innerHTML = `
          <img src = "${sposter}" height ="240px">
    `
   poster_container_1.appendChild(poster);
   
    

})
})

// fetch(json_url).then(Response => Response.json())
// .then((data)=> {
//   data.forEach((ele, i ) => {
//       let{sposter} = ele;
//       let poster= document.createElement('class');
//       poster.classList.add('poster');
//     //   card.href = url;
//      poster.innerHTML = `
//           <img src = "${sposter}" height ="240px">
//     `
//    poster_container_2.appendChild(poster);
   
    

// })
// })