import { ChangeEvent } from 'react';

import './search-box.styles.css';

interface SearchBoxProps {
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className='search-box'
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;