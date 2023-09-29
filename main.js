let ranking=new Promise((resolve,reject)=>{
  const total=prompt("enter your  total");
  if(total>300){
    resolve(`Total = ${total} : you are pass `)
  }
  else{
    reject(`Total = ${total} : you are fail `)
  }
})

async function check(){
  
  try{
    let res=await ranking
    document.write(res);
  }
  catch(fail){
    document.write(fail);
  }
}

check()