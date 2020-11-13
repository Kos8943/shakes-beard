import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Cates from '../components/Cates'
import CardsCateIsHair from '../components/CardsCateIsHair'
import CardsCateIsBeard from '../components/CardsCateIsBeard'
import '../styles/shops.scss' 
import { ButtonToolbar,ButtonGroup,Button,Dropdown } from 'react-bootstrap'

function ShopList(props) {
  console.log('Shoplist', props)
  const[currentCate, setCurrentCate]=useState('所有商家')
  
  return (
    <>
    <div className="shops container">
      <div className="row">
        <Breadcrumb />
      </div>
      <div className="row">
        {/* <Cates /> 開始*/}
        {/* <Cates currentCate='所有商家'/> */}
        <div className="container">
          <div className="sorting row">
            <div className="col pl-1">
              <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="First group" size="sm" className="py-1 cate-btns">
                  <Button 
                    variant="secondary" 
                    className={`${currentCate==='所有商家'?'active':''}`}
                    onClick={()=>setCurrentCate('所有商家')}>所有商家</Button>{' '}
                  <Button 
                    variant="secondary"
                    className={`${currentCate==='特價優惠'?'active':''}`}
                    onClick={()=>setCurrentCate('特價優惠')}>特價優惠</Button>{' '}
                  <Button 
                    variant="secondary"
                    className={`${currentCate==='男士理髮'?'active':''}`}
                    onClick={()=>setCurrentCate('男士理髮')}>男士理髮</Button>{' '}
                  <Button 
                    variant="secondary"
                    className={`${currentCate==='男士修容'?'active':''}`}
                    onClick={()=>setCurrentCate('男士修容')}>男士修容</Button>
                </ButtonGroup>
                {/* <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon2"
                  />
                </InputGroup> */}
              </ButtonToolbar>
            </div>
            <div className="sorts col justify-content-end">
              <select className="sort m-1">
                <option value="熱門排行">熱門排行</option>
                <option value="近期活動">近期活動</option>
                {/* <option value="價格高低">價格高低</option> */}
              </select>
            </div>
          </div>
        </div>
        {/* <Cates /> 結束*/}

        <div className="cardGroup">
        {/* <Cards /> */}
        {currentCate === '所有商家' ? <Cards title='所有商家' /> : ''}
        {currentCate === '特價優惠' ? <Cards title='特價優惠' /> : ''}
        {currentCate === '男士理髮' ? <CardsCateIsHair title='男士理髮' /> : ''}
        {currentCate === '男士修容' ? <CardsCateIsBeard title='男士修容' /> : ''}
        </div>
    </div>
      <Pagination  className="justify-contents-center"/>
    </div>
    </>
  )
}

export default ShopList
