import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider } from '@mui/material';

function ExpirationDateInput() {
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2024');

  const handleMonthChange = (event:any) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event:any) => {
    setSelectedYear(event.target.value);
  };

  return (
    <FormControl variant="outlined" className='formInput'>
      <TextField
        id="expiration-date"
        label="Expiration Date"
        variant="outlined"
        className='expiration-date122'
        fullWidth
        InputProps={{
          endAdornment: (
            <div className='dropdown' >
              <Select
                value={selectedMonth}
                onChange={handleMonthChange}
                style={{ minWidth: '70px' , border:'unset' }}
              >
                <MenuItem value="">Month</MenuItem>
                <MenuItem value="01">01</MenuItem>
                <MenuItem value="02">02</MenuItem>
                <MenuItem value="03">03</MenuItem>
                <MenuItem value="04">04</MenuItem>
                <MenuItem value="05">05</MenuItem>
                <MenuItem value="06">06</MenuItem>
                <MenuItem value="07">07</MenuItem>
                <MenuItem value="08">08</MenuItem>

                {/* Add all months */}
              </Select>
              <Divider sx={{width:"2px", backgroundColor:'#DFDFDF' , marginTop:'17px'}}/>
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                style={{ minWidth: '60px' }}
              >
                <MenuItem value="">Year</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
                <MenuItem value="2024">2025</MenuItem>
                <MenuItem value="2024">2026</MenuItem>
                <MenuItem value="2024">2027</MenuItem>
                <MenuItem value="2024">2028</MenuItem>
              </Select>
            </div>
          ),
        }}
      />
    </FormControl>
  );
}

export default ExpirationDateInput;
