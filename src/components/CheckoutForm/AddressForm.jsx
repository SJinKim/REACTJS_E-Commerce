import React, { useState, useEffect } from 'react'
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from './CustomTextField'
import { commerce } from '../../lib/commerce'

const AddressForm = ({ checkoutToken }) => {
  const methods = useForm()

  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setshippingSubdivisions] = useState([])
  const [shippingSubdivision, setshippingSubdivision] = useState('')
  const [shippingOptions, setshippingOptions] = useState([])
  const [shippingOption, setshippingOption] = useState('')

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }))

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    )
    //Object.keys(countries) => [AL, GR, ...]
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <CustomTextField required name='firstName' label='First name' />
            <CustomTextField required name='lastName' label='Last name' />
            <CustomTextField required name='address1' label='Address' />
            <CustomTextField required name='email' label='Email' />
            <CustomTextField required name='city' label='City' />
            <CustomTextField required name='postalCode' label='Postal code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem value={country.id} key={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
             <InputLabel>Shipping Subdivision</InputLabel>
             <Select value={} fullWidth onChange={}>
               <MenuItem value={} key={}>
                 Select Me
               </MenuItem>
             </Select> 
            </Grid>
            <Grid item xs={12} sm={6}>
             <InputLabel>Shipping Options</InputLabel>
             <Select value={} fullWidth onChange={}>
               <MenuItem value={} key={}>
                 Select Me
               </MenuItem>
             </Select> 
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
