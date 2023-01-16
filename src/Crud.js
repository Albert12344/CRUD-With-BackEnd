import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios';

export default function Crud() {
    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const inputReset = useRef(null);
    const [arr, setArr] = useState([]); 
    const [worked, setWorked] = useState();

    const submitValue = () => {
        axios.post('http://localhost:4000/crud', JSON.stringify(arr))
        .then((res) => console.log(res))
        const person = {
            firstName: value,
            lastName: value1,
            worked: worked
        };
        setArr((prevArr) => [...prevArr, person]);
        inputReset.current.value = ""; // resets input field
        inputReset.current.value1 = ""; // resets input field
      };
    
        useEffect(() => {
        axios.get('http://localhost:4000/crud')
        .then(res => {
        console.log(res)
        setPosts(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }, []);
      
      const post = posts.map(post => {
            return [post.name, " ", post.lastname]
      })

      const handleClick = () => {
        setCount(count + 1)
      }

  return (  
        <div>
            {!!posts.length && <h1>{post[count]}</h1>}
            <button onClick={handleClick}>Scroll</button>
            <div>
                <input type="text" placeholder='Firstname' ref={inputReset} onChange={(e) => setValue(e.target.value)} />
                <input type="text" placeholder='Lastname' ref={inputReset} onChange={(e) => setValue1(e.target.value)} />
                <button onClick={submitValue}>Create</button>
                <div>
                    <div>{JSON.stringify(arr)}</div>
                </div>
            </div>
        </div>
      )
}
