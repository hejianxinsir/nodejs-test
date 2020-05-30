let fs = require('fs')

fs.readFile('./1.txt', (err, data)=>{
  if(err){
    throw err
  }else{
    console.log('ok')
    console.log(data.toString())
  }
})

const data = Buffer.from('Node.js')
fs.writeFile('./1.txt', data, (err)=>{
  if(err) throw err;
  console.log('文件已被保存')
})