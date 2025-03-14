import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';
import { toast } from '../components/ui/use-toast';
import { Button } from '../components/ui/button';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (datePickerRef.current) {
      flatpickr(datePickerRef.current, {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        minDate: 'today',
        time_24hr: true,
        onChange: (selectedDates, dateStr) => {
          setDate(dateStr);
        }
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!location.trim()) {
      toast({
        title: "Location Required",
        description: "Please enter a destination to find parking spots.",
        variant: "destructive"
      });
      return;
    }
    
    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a date and time for your parking.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Searching for parking spots",
      description: `Looking for available spots at ${location} on ${date}`,
    });
    
    // Here you would typically navigate to search results or fetch data
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="location"
            type="text"
            placeholder="Enter your destination"
            className="form-input pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex-1">
        <label htmlFor="datePicker" className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="datePicker"
            ref={datePickerRef}
            type="text" 
            placeholder="Select date and time"
            className="form-input pl-10"
            readOnly
          />
        </div>
      </div>
      
      <div className="flex items-end">
        <Button type="submit" size="lg" className="w-full md:w-auto gradient-btn">
          <Search className="h-5 w-5 mr-2" />
          Find Parking
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;