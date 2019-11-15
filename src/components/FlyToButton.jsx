import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlyToButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log('props',props);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const { changeFlyTo } = props
  const onButtonClick = (e) => {

        changeFlyTo(e.currentTarget.children[0].id)
        
    }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Fly to
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem key={'VLC'} onClick={onButtonClick}><li value="VLC" id="VLC">Valencia</li></DropdownItem>
        <DropdownItem key={'BCN'} onClick={onButtonClick}><li value="BCN" id="BCN">Barcelona</li></DropdownItem>
        <DropdownItem key={'MAD'} onClick={onButtonClick}><li value="MAD" id="MAD">Madrid</li></DropdownItem>
        <DropdownItem key={'ATH'} onClick={onButtonClick}><li value="ATH" id="ATH">Athens</li></DropdownItem>
        <DropdownItem key={'MXP'} onClick={onButtonClick}><li value="MXP" id="MXP">Milano</li></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default FlyToButton;