let library = [

    { author: 'Gates', title: 'The Road Ahead', id: 1, type: 'drama'},
 
    { author: 'Steve', title: 'Walter Isaacson', id: 2, type: 'action'},
 
    { author: 'Collins', title: 'The Final Book of The Hunger Games', id: 3, type: 'action'},
 
    { author: 'Hii', title: 'The Hunger Games', id: 4, type: 'drama'},
 
     { author: 'Collins', title: 'The Final Book of The Hunger Games', id: 3, type: 'action'},
 
     { author: 'Steve', title: 'Walter Isaacson', id: 2, type: 'action'},
 
    ];
 
 //sort array based on author
 
 library.sort((a, b) => {
   if (a.author < b.author) {
     return -1;
   } else if (a.author > b.author) {
     return 1;
   } else return 0;
 });
 
 console.log(library);
 
 
 //array to string
 let arrayToString = JSON.stringify(library);
 console.log(arrayToString);
 
 
 //Grouping
 let result = {};
 library.forEach(item => {
   var key = item.type;
   if (!result[key]) {
     result[key] = [];
   }
 
   result[key].push({
     author: item.author,
     title: item.title,
     id: item.id,
     type: item.id,
   });
 });
 console.log(result);
 
 
 //unique by ids
 let uniqueIds = [];
 let result = library.filter(item => {
   let isDuplicate = uniqueIds.includes(item.id);
 //   console.log(isDuplicate)
   uniqueIds.push(item.id);
   if (!isDuplicate) return true;
   else return false;
 })
 console.log(result);
 