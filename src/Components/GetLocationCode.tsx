import React from "react"
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function GetLocationCode()  {
  const [isAvailable, setAvailable] = useState
    <boolean>
    (false);

  const [position, setPosition] = useState
    <{ 
      latitude: number | null,
      longitude: number | null 
    }>
    ({
      latitude: null,
      longitude: null 
    });

  const [watchStatus, setWatchStatus] = useState
    <{
      watchId: number,
      isWatching: boolean
    }>
    ({
      isWatching: false,
      watchId: 0
    });

  useEffect(() => {
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = (): void => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  /*
   * 監視を開始します
   */
  const startWatchPosition = (): void => {
    const watchId = navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });

    setWatchStatus({ watchId: watchId, isWatching: true });
  };

  /*
   * 監視を停止します
   */
  const stopWatchPosition = (): void => {
    navigator.geolocation.clearWatch(watchId);
    setWatchStatus({ isWatching: false, watchId });
  };

  const { isWatching, watchId } = watchStatus;

  return (
    <div className="App">
      <h2>Geolocation API Sample</h2>
      {isAvailable && (
        <div>
          <button onClick={getCurrentPosition}>Get Current Position</button>
          {isWatching ? (
            <button onClick={() => stopWatchPosition()}>
              Stop Watch Position
            </button>
          ) : (
            <button onClick={startWatchPosition}>Start Watch Position</button>
          )}
          <div>
            <h3>Position</h3>
            <div>
              latitude: {position.latitude}
              <br />
              longitude: {position.longitude}
            </div>
          </div>
          <div>
            <h3>Watch Mode</h3>
            <p>Watch Status: {isWatching ? 'Watching' : 'Not Watching'}</p>
            <p>Watch ID: {watchId}</p>
          </div>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={getCurrentPosition}>現在地を取得する</Button>
              {isWatching ? (
                <Button onClick={() => stopWatchPosition()}>追跡を止める</Button>
                ) : (
                <Button onClick={startWatchPosition}>Start Watch Position</Button>
              )}
              <Button>Three</Button>
            </ButtonGroup>
        </div>
      )}
    </div>
  );
};