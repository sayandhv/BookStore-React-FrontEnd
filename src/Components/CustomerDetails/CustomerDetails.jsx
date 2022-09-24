import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import UserService from '../../Services/UserService';
import './CustomerDetails.css';

const userservice = new UserService();


function CustomerDetails(props) {

    const [address, setAddress] = useState({
        FullName:"",
        MobileNumber:"",
        Address:"",
        City:"",
        Landmark:"",
        State:"",
        PinCode:"",
        AddressType:"",
    });

    const next = () => {
        let data = {
            'FullName': address.FullName,
            'MobileNumber':address.MobileNumber,
            'address':address.Address,
            'city':address.City,
            'state':address.State,
            'landmark':address.Landmark,
            'pincode':address.PinCode,
            'address_type':address.address_type
        }

        console.log('Cutomer adding Address',data);
        userservice.address(data)
        .then((response) => {
            console.log(response);


        }).catch((error) => {
            console.log(error);
        })
    }

 const changeState = (event) => {
        setAddress(previousValue => {
            return { ...previousValue, [event.target.name]: event.target.value }

        })
    }
    return (
        
        <div className='adress'>
                    <div className='addressbuttons'>
                        <span>Customer Details</span>
                        <button className='addaddressbutton'>Add New Address</button>
                    </div>

                    
                    <div className='inputaddress'>
                        <div className='fullnameAndMobile'>
                            <TextField className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                id="outlined-basic" label="Full Name" name='FullName' size='small' variant="outlined"
                                onChange={(e) => changeState(e)} />

                            <TextField className='textfields' id="outlined-basic" label="Mobile"
                             name='MobileNumber' size='small' variant="outlined"
                             onChange={(e) => changeState(e)} />
                        </div>
                        <div className='field'>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                name='Address'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '475px' }}
                                onChange={(e) => changeState(e)}
                                size='small'
                                variant="outlined"
                            />

                        </div>
                        <TextField
                            id="outlined-basic"
                            label="City"
                            name='City'
                            className='textfields'
                            style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                            onChange={(e) => changeState(e)}
                            size='small'
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Landmark"
                            name='Landmark'
                            className='textfields'
                            size='small'
                            variant="outlined"
                            onChange={(e) => changeState(e)}
                        />
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="State"
                                name='State'
                                className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                size='small'
                                variant="outlined"
                                onChange={(e) => changeState(e)}
                            />

                            <TextField
                                id="outlined-basic"
                                label="PinCode"
                                name='PinCode'
                                className='textfields'
                                size='small'
                                variant="outlined"
                                onChange={(e) => changeState(e)}
                            />
                        </div>
                        </div>
                        <div className='addresstypefield'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">AddressType</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"

                                >
                                    <FormControlLabel onChange={(e) => changeState(e)} className='radiofont' name='address_type' value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel onChange={(e) => changeState(e)} className='radiofont' name='address_type' value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel onChange={(e) => changeState(e)} className='radiofont' name='address_type' value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="continuebutton" >
                            <Button  
                                onClick={next}
                                style={{
                                width: '150px',
                                height: '35px',
                                backgroundColor: '#3371B5',
                                color: '#FFFFFF',
                                fontSize: '13px',
                                textTransform: 'none'
                             }}
                             >CONTINUE</Button>
                        </div>

                    </div>
                </div>
                
                               
                
                );
            }
export default CustomerDetails;