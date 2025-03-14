import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Skeleton } from '../components/ui/skeleton';
import { MapPin } from 'lucide-react';

const markers = [
  { position: [11.2588, 75.7804], title: 'Downtown Parking', price: '$5/hr', available: 10, type: 'Open Air' },
  { position: [11.2600, 75.7820], title: 'Mall Parking', price: '$7/hr', available: 5, type: 'Covered' },
  { position: [11.2550, 75.7850], title: 'Beachside Parking', price: '$10/day', available: 3, type: 'Attended' },
  { position: [11.2580, 75.7750], title: 'Central Parking', price: '$4/hr', available: 15, type: 'Self-Park' },
  { position: [11.2620, 75.7780], title: 'Office Complex', price: '$6/hr', available: 8, type: 'Garage' }
];

const Map = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    
    if (!loading) {
      const map = L.map('map').setView([11.2588, 75.7804], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Create custom icon for markers
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #3b82f6; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 50%; box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });

      markers.forEach(marker => {
        const availability = marker.available <= 3 ? 'Low' : marker.available <= 8 ? 'Medium' : 'High';
        const availabilityColor = marker.available <= 3 ? '#ef4444' : marker.available <= 8 ? '#f59e0b' : '#10b981';
        
        L.marker(marker.position, { icon: customIcon }).addTo(map)
          .bindPopup(`
            <div style="font-family: 'Inter', sans-serif; padding: 4px;">
              <div style="font-weight: 600; font-size: 16px; color: #1e293b; margin-bottom: 8px;">${marker.title}</div>
              <div style="display: flex; margin-bottom: 4px;">
                <span style="color: #64748b; width: 100px;">Price:</span>
                <span style="font-weight: 500;">${marker.price}</span>
              </div>
              <div style="display: flex; margin-bottom: 4px;">
                <span style="color: #64748b; width: 100px;">Type:</span>
                <span>${marker.type}</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span style="color: #64748b; width: 100px;">Availability:</span>
                <span style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${availabilityColor}; margin-right: 6px;"></span>
                  ${availability} (${marker.available} spots)
                </span>
              </div>
              <button style="width: 100%; margin-top: 12px; padding: 6px 0; background-color: #3b82f6; color: white; border: none; border-radius: 4px; font-weight: 500; cursor: pointer;">Book Now</button>
            </div>
          `);
      });
    }
    
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nearby Parking Spots</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Explore available parking locations around the city with real-time availability and pricing information.
        </p>
        
        {loading ? (
          <div className="rounded-lg overflow-hidden">
            <Skeleton className="h-[500px] w-full" />
          </div>
        ) : (
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div id="map" className="map h-[500px]" />
          </div>
        )}
        
        <div className="flex justify-center mt-8 space-x-6">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            <span className="text-sm text-gray-600">Low Availability</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
            <span className="text-sm text-gray-600">Medium Availability</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
            <span className="text-sm text-gray-600">High Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;