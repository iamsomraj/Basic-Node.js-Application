// Using node js to write a new file
// Using node js to read from the file

const fs = require('fs');

fs.writeFile('user-data.txt', 'username = Somraj', error => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Success ! A new file is created ! ');
});

fs.readFile('user-data.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('The content of the file is displayed : ');
  console.log(data.toString());
});
