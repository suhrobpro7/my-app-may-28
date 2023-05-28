import {useState} from 'react'

function AddProduct() {

    let [text, setText] = useState('Suhrob');
    


    let changeText = () => {
     console.log('Cliked');
     setText("Edureka");

    };

  return (
    <div>
       <h1 className='text-red'>
        
        Hi my name is: {text}
        
        </h1>

        <button onClick={changeText}>Click me now</button>
      
    </div>
  )
}

export default  AddProduct;