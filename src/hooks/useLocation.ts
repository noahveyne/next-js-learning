"use client";

import { useState, useEffect } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  district: string;
  error?: string;
}

interface DistrictCoordinates {
  name: string;
  lat: number;
  lng: number;
  radius: number; // km
}

// İzmir ilçelerinin koordinatları (yaklaşık merkez noktaları)
const IZMIR_DISTRICTS: DistrictCoordinates[] = [
  { name: "konak", lat: 38.4192, lng: 27.1287, radius: 15 },
  { name: "karşıyaka", lat: 38.4618, lng: 27.1200, radius: 12 },
  { name: "bornova", lat: 38.4618, lng: 27.2200, radius: 15 },
  { name: "buca", lat: 38.3888, lng: 27.1789, radius: 12 },
  { name: "çiğli", lat: 38.5000, lng: 27.0500, radius: 10 },
  { name: "gaziemir", lat: 38.3167, lng: 27.1500, radius: 10 },
  { name: "balçova", lat: 38.3833, lng: 27.0500, radius: 8 },
  { name: "narlıdere", lat: 38.3833, lng: 27.0000, radius: 8 },
  { name: "güzelbahçe", lat: 38.3500, lng: 26.9167, radius: 8 },
  { name: "urla", lat: 38.3167, lng: 26.7667, radius: 12 },
  { name: "çeşme", lat: 38.3167, lng: 26.3167, radius: 15 },
  { name: "karaburun", lat: 38.6333, lng: 26.5167, radius: 12 },
  { name: "foça", lat: 38.6667, lng: 26.7500, radius: 10 },
  { name: "menemen", lat: 38.6000, lng: 27.0667, radius: 12 },
  { name: "aliağa", lat: 38.7833, lng: 27.0167, radius: 10 },
  { name: "bergama", lat: 39.1167, lng: 27.1833, radius: 15 },
  { name: "dikili", lat: 39.0667, lng: 26.8833, radius: 10 },
  { name: "kınık", lat: 39.0833, lng: 27.3667, radius: 8 },
  { name: "tire", lat: 38.0833, lng: 27.7333, radius: 12 },
  { name: "bayındır", lat: 38.2167, lng: 27.6500, radius: 10 },
  { name: "torbalı", lat: 38.1667, lng: 27.3500, radius: 12 },
  { name: "selçuk", lat: 37.9500, lng: 27.3667, radius: 10 },
  { name: "menderes", lat: 38.2500, lng: 27.1333, radius: 10 },
  { name: "seferihisar", lat: 38.2000, lng: 26.8333, radius: 8 },
  { name: "kemalpaşa", lat: 38.4167, lng: 27.4167, radius: 12 },
  { name: "ödemiş", lat: 38.2167, lng: 27.9667, radius: 15 },
  { name: "beydağ", lat: 38.0833, lng: 28.2000, radius: 10 },
  { name: "kiraz", lat: 38.2333, lng: 28.2000, radius: 8 },
  { name: "bayraklı", lat: 38.4667, lng: 27.1667, radius: 10 },
  { name: "karabağlar", lat: 38.3833, lng: 27.1167, radius: 10 }
];

// Haversine formülü ile iki nokta arasındaki mesafeyi hesapla (km)
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Dünya'nın yarıçapı (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Kullanıcının konumuna en yakın ilçeyi bul
function findNearestDistrict(lat: number, lng: number): string {
  let nearestDistrict = "konak"; // varsayılan
  let minDistance = Infinity;

  for (const district of IZMIR_DISTRICTS) {
    const distance = calculateDistance(lat, lng, district.lat, district.lng);
    if (distance < minDistance && distance <= district.radius) {
      minDistance = distance;
      nearestDistrict = district.name;
    }
  }

  return nearestDistrict;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        latitude: 0,
        longitude: 0,
        district: "konak",
        error: "Geolocation is not supported by this browser."
      });
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const district = findNearestDistrict(latitude, longitude);
        
        setLocation({
          latitude,
          longitude,
          district
        });
        setLoading(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocation({
          latitude: 0,
          longitude: 0,
          district: "konak", // varsayılan ilçe
          error: error.message
        });
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 dakika cache
      }
    );
  }, []);

  return { location, loading };
}
