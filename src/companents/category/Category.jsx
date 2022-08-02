import React, {useState} from 'react'
import './_category.scss'
import uniqid from 'uniqid';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Python',
  'Csharp',
  'Coding',
  'Cricket',
  'Marvel',
  'DC',
  'Gatsby',
 
]

function Category() {
  const [active, setActive]=useState("All")

  const handleClick=(value)=>{

    setActive(value)
  }

  return (
    <div className="categories">
      {keywords.map((keyword)=>{
        return <span key={uniqid()} onClick={()=>handleClick(keyword)} className={active===keyword? "active" : null}>{keyword}</span>
      })}
    </div>
  )
}

export default Category