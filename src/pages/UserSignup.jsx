import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from 'react-router-dom';


export default function UserSignup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    bloodGroup: '',
    diseases: '',
    address: '',
    phoneNumber: '',
    isAdult: false
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBloodGroupChange = (value) => {
    setFormData({ ...formData, bloodGroup: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.isAdult) {
      setError('You must be 18 or older to sign up.')
      return
    }
    // Handle signup logic here
    console.log('Signup submitted', formData)
  }

  return (
    <div className="flex items-center pt-[6%] pb-16 justify-center min-h-screen bg-gradient-to-r from-red-100 to-red-200">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>User Signup</CardTitle>
          <CardDescription>Join our blood donation community!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  name="username"
                  placeholder="Choose a username"
                  value={formData.username}
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Select onValueChange={handleBloodGroupChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="diseases">Diseases (if any)</Label>
                <Input 
                  id="diseases" 
                  name="diseases"
                  placeholder="List any diseases"
                  value={formData.diseases}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input 
                  id="phoneNumber" 
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="isAdult" 
                  checked={formData.isAdult}
                  onCheckedChange={(checked) => setFormData({ ...formData, isAdult: checked })}
                />
                <label
                  htmlFor="isAdult"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I confirm that I am 18 years or older
                </label>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/">
          <Button variant="outline">Cancel</Button>
          </Link>
          <Button type="submit">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

