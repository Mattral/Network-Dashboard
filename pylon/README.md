# Pylon
_A small node server that accepts WebSocket connections and periodically sends time-stamped packets to any connected clients._


## Usage 
#### Start the Pylon server locally
In the current directory (/pylon), initialize the server:
```console
npm install
```
Next, start the server:
```console
node server.js
```

## Additional Information
### Endpoint
`ws://localhost:55455`

### Data
_Upon connection, Pylon will begin sending packets to the client. Each message contains a `data` field with a timestamp of when the packet was sent. This timestamp is a large number indicating the time in milliseconds since the epoch (Jan. 1, 1970)._