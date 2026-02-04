"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function UITestPage() {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-deep-teal">UI Components Test</h1>
        
        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>All button variants with loading states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="default">Default</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" loading={loading} onClick={handleLoadingClick}>
                {loading ? "Loading..." : "Click to Load"}
              </Button>
              <Button variant="secondary" disabled>Disabled Button</Button>
            </div>
          </CardContent>
        </Card>

        {/* Card with Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Regular Card</CardTitle>
              <CardDescription>No hover effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-stone-600">This card has no hover effect.</p>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
              <CardDescription>With hover effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-stone-600">Hover over this card to see the effect!</p>
            </CardContent>
          </Card>
        </div>

        {/* Input Component */}
        <Card>
          <CardHeader>
            <CardTitle>Input Component</CardTitle>
            <CardDescription>Input with validation states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              id="default-input"
              placeholder="Default input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            
            <Input
              id="error-input"
              placeholder="Input with error"
              error={true}
              helperText="This field is required"
            />
            
            <Input
              id="success-input"
              placeholder="Input with success"
              success={true}
              helperText="Looks good!"
            />
            
            <Input
              id="disabled-input"
              placeholder="Disabled input"
              disabled
            />
          </CardContent>
        </Card>

        {/* Select Component */}
        <Card>
          <CardHeader>
            <CardTitle>Select Component</CardTitle>
            <CardDescription>Dropdown with validation states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select
              id="default-select"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            
            <Select
              id="error-select"
              error={true}
              helperText="Please select an option"
            >
              <option value="">Select with error</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            
            <Select
              id="success-select"
              success={true}
              helperText="Great choice!"
            >
              <option value="selected">Selected option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            
            <Select
              id="disabled-select"
              disabled
            >
              <option value="">Disabled select</option>
              <option value="option1">Option 1</option>
            </Select>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Form Demo</CardTitle>
            <CardDescription>Test validation states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              id="demo-input"
              placeholder="Enter your name"
              error={showError}
              success={showSuccess}
              helperText={
                showError 
                  ? "Name is required" 
                  : showSuccess 
                  ? "Valid name!" 
                  : "Enter at least 3 characters"
              }
              onChange={(e) => {
                const value = e.target.value
                if (value.length === 0) {
                  setShowError(true)
                  setShowSuccess(false)
                } else if (value.length < 3) {
                  setShowError(false)
                  setShowSuccess(false)
                } else {
                  setShowError(false)
                  setShowSuccess(true)
                }
              }}
            />
            
            <Select
              id="demo-select"
              onChange={(e) => {
                console.log("Selected:", e.target.value)
              }}
            >
              <option value="">Choose a region</option>
              <option value="middle-east">Middle East</option>
              <option value="india">India</option>
              <option value="se-asia">Southeast Asia</option>
              <option value="other">Other</option>
            </Select>
            
            <div className="flex gap-4">
              <Button variant="primary">Submit</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
