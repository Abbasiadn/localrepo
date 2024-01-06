//function
 function sayhello(){
     console.log(" hello");
 }
 
  sayhello();
   function add( a, b){  // arguments
     console.log(a+b);
   }
    function mult(a ,b){
        return a*b;
    }
   let a = mult(4,4);  
  add(3,7); // parameters 
  console.log( " result are ="+a);

  function addNumbers(){
     //console.log(arguments)
     let ans =0;
     for(let i=0; i< arguments.length; i=i+1){
         ans =ans+arguments[i];
     }
     return ans
  }

  const num = addNumbers( 1,3,5 ,8,9,100)
   console.log(num)

   // Arrow function
    const heelo =()=>{
         console.log("Adnan Abbasi")
    }
    heelo();
    const addtwo =(a,b)=> a+b;
      console.log(addtwo(3,7));