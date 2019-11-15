import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log('props',props);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
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

export default DropdownButton;