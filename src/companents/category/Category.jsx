import React, {useState} from 'react'
import './_category.scss'

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

function Category() {
  const [active, setActive]=useState("All")

  const handleClick=(value)=>{

    setActive(value)
  }

  return (
    <div className="categories">
      {keywords.map((keyword,index)=>{
        return <span key={index} onClick={()=>handleClick(keyword)} ClassName={active===keyword? "active" : null}>{keyword}</span>
      })}
    </div>
  )
}

export default Category