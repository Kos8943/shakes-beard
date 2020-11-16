import React, { useState } from 'react'
import { countries, townships, postcodes } from './data.js'

function TWZipCode(props) {
  // 記錄陣列的索引值
  // const [country, setCountry] = useState(-1)
  // const [township, setTownship] = useState(-1)
  // 下面這行是備用的，如果需要設定郵遞區號時
  //const [postcode, setPostcode] = useState(-1)
  const {
    country, setCountry, township, setTownship
  } =props

  return (
    <>
      <select className="addressSelect"
        value={country}
        onChange={(e) => {
          // 將字串轉成數字
          setCountry(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
      >
        <option value={-1}>選擇縣市</option>

        {countries.map((v, i) => (
          <option key={i} value={i}>
            {v}
          </option>
        ))}
      </select>

      <select className="addressSelect"
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
      >
        <option value={-1}>選擇區域</option>
        {country > -1 &&
          townships[country].map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
      </select>

      {/* <span> */}
        {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
        {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
        {/* {country > -1 && township > -1 && postcodes[country][township]}
      </span> */}
    </>
  )
}

export default TWZipCode