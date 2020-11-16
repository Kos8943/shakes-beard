import React,{useState} from 'react'
import { ButtonToolbar,ButtonGroup,Button,Dropdown } from 'react-bootstrap'

function Cates(props) {
  console.log('Cates', props)
  const[currentCate, setCurrentCate]=useState('所有商家')

  return (
    <>
    <div className="container">
    <div className="sorting row">
      <div className="col pl-1">
        <ButtonToolbar
          className="justify-content-between"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="First group" size="sm" className="py-1 cate-btns">
            <Button 
              variant="secondary" 
              className={`${currentCate==='所有商家'?'active':''}`}
              onClick={()=>setCurrentCate('所有商家')}>所有商家</Button>{' '}
            {/* <Button 
              variant="secondary"
              className={`${currentCate==='特價優惠'?'active':''}`}
              onClick={()=>setCurrentCate('特價優惠')}>特價優惠</Button>{' '} */}
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
          <option value="價格高低">價格高低</option>
          <option value="近期活動">近期活動</option>
          <option value="熱門排行">熱門排行</option>
        </select>
      </div>
    </div>

    </div>
    </>
  )
}

// export default withRouter(Cates)
export default Cates
