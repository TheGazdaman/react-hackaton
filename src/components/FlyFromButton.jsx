import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FlyFromButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log('props',props);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
          Fly from
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Prague</DropdownItem>
        <DropdownItem>Berlin</DropdownItem>
        <DropdownItem>Warsaw</DropdownItem>
        <DropdownItem>Pardubice</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default FlyFromButton;