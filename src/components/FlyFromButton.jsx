import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlyFromButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  // const toggle = (code) => {
  //   console.log(code);
    
  // }

  const { changeFlyFrom } = props
  const onButtonClick = (e) => {

        changeFlyFrom(e.currentTarget.children[0].id)
        
    }

  return (
    <Dropdown onChange={(code) => {
      
    }} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
          Fly from
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem key={'PRG'} onClick={onButtonClick}><li value="PRG" id="PRG">Prague</li></DropdownItem>
        <DropdownItem key={'SXF'} onClick={onButtonClick}><li value="SXF" id="SXF">Berlin</li></DropdownItem>
        <DropdownItem key={'WAW'} onClick={onButtonClick}><li value="WAW" id="WAW">Warsaw</li></DropdownItem>
        <DropdownItem key={'PED'} onClick={onButtonClick}><li value="PED" id="PED">Pardubice</li></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    
  );
}

export default FlyFromButton;