import { Button, FormControl, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import firebasedata from './firebase';
import { WhatsappShareButton } from 'react-share'
import { WhatsappIcon } from 'react-share'

const Form = () => {
    const [name, setName] = useState('');
    const handleSubmit = () => {
        const nameRef = firebasedata.database().ref('name');
        nameRef.push(name);
    }

    return (
        <>

            <div className='form-header'>
                <h2>{name} wishing to you april fool</h2>
            </div>
            <div className='form-div'>
                <h3>Share april fool wish with your name</h3>

                <FormControl>
                    <TextField
                        variant='outlined'
                        label='Enter Your Name'
                        color='secondary'
                        className='inp'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </TextField>


                    <WhatsappShareButton
                        url={`https://deep-0301.github.io/aprilfull`}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            className='btn'
                            onClick={handleSubmit}
                        >
                            Share with Friends
                             <WhatsappIcon
                                lightingColor='white'
                                round={true}

                            ></WhatsappIcon>
                        </Button>
                    </WhatsappShareButton>

                </FormControl>
            </div>
            <div className='footer'>
                <h6>(Disclaimer: not intending to hurt anyone’s feelings and/or appear racist in any way. This is just for fun)</h6>
            </div>



        </>
    );
}

export default Form