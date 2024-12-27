import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

export default function OrganizationSignup() {
  const [formData, setFormData] = useState({
    orgName: '',
    address: '',
    latitude: '',
    longitude: '',
    phoneNumber: '',
    email: '',
    password: ''
  })
  const [locationError, setLocationError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Organization signup submitted', formData)
  }

  const getLocation = () => {
    setLocationError('')
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          })
        },
        (error) => {
          console.error("Error getting location:", error)
          setLocationError("Failed to get location. Please enter manually.")
        }
      )
    } else {
      setLocationError("Geolocation is not supported by your browser. Please enter location manually.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Organization Signup</CardTitle>
          <CardDescription>Join our blood donation network!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input 
                  id="orgName" 
                  name="orgName"
                  placeholder="Enter organization name"
                  value={formData.orgName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  name="address"
                  placeholder="Enter organization address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Location</Label>
                <div className="flex space-x-4">
                  <div className="flex flex-col space-y-1.5 flex-1">
                    <Input 
                      id="latitude" 
                      name="latitude"
                      type="number"
                      step="any"
                      placeholder="Latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 flex-1">
                    <Input 
                      id="longitude" 
                      name="longitude"
                      type="number"
                      step="any"
                      placeholder="Longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <Button type="button" onClick={getLocation} className="mt-2">
                  Get Current Location
                </Button>
                {locationError && (
                  <div className="flex items-center text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {locationError}
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input 
                  id="phoneNumber" 
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  placeholder="Enter organization email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

