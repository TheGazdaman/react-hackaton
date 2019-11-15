import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlyToButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log('props',props);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Fly to
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Valencia</DropdownItem>
        <DropdownItem>Barcelona</DropdownItem>
        <DropdownItem>Madrid</DropdownItem>
        <DropdownItem>Athens</DropdownItem>
        <DropdownItem>Milano</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default FlyToButton;