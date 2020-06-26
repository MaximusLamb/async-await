const http = require('http');


const requestPromise = url => {
  return new Promise((resolve, reject) => {
    const req = http.request(url, {
      
      method
    });  
  }, res => {
    let body = '';
    res.on('data', chunk => {
      body += chunk;
    });

    res.on('error', err => reject(err));

    res.on('end', () => {
      resolve(JSON.parse(body));
    });
  });

  if(data) {
    req.write(JSON.stringify(data));
  }
    
};


const get = url => request(url, 'GET');
