import React from 'react';

const Documentation = () => {
  return (
    <div id='documentation'>
      <h1>API Documentation</h1>
      <p>
        You’ll find documentation to help you start working as quickly as possible, as well as support you if you get stuck. You can use the free version to test and then change into a required plan as required.
      </p>
      <h2>Introduction</h2>
      <p>
        Overview: "Harness the power of precise geospatial data with our comprehensive suite of APIs. Ideal for developers, our APIs offer easy access to a wealth of pincode and location-based information."
      </p>
      <div>
        This document provides detailed information about the endpoints related to picknpin services, enabling clients to retrieve detailed information about pincodes, calculate distances, and find nearby pincodes.

        <h2>Base URL</h2>
        <p>https://api.picknpin.com</p>

        <h2>Authentication</h2>
        <p>
          Requests to these endpoints require a valid API key. Include your API key in the request header:
        </p>
        <p>
          Authorization: Bearer {'{your_api_key}'}
        </p>

        <h2>Endpoints</h2>

        <ol>
          <li>
            <h3>Get Pincode Details</h3>
            <p><strong>Endpoint:</strong> /PincodeDetails/{'{pincode}'}</p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Retrieves details for a specified pincode.</p>
            <p><strong>Parameters:</strong> pincode: The pincode to get details for.</p>
            <p><strong>Example Request:</strong> GET /PincodeDetails/110001</p>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "pincode": "110001",
                  "details": {
                    "Districtname": "Central Delhi",
                    "statename": "Delhi"
                  }
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>Calculate Distance Between Two Pincodes</h3>
            <p><strong>Endpoint:</strong> /DistanceBetweenTwoPincodes</p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Calculates the straight-line distance between two pincodes.</p>
            <p><strong>Request Body:</strong> json</p>
            <pre>
              <code>
                {`
                {
                  "pincode1": "110001",
                  "pincode2": "600001"
                }
                `}
              </code>
            </pre>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "source_pincode": "110001",
                  "destination_pincode": "600001",
                  "distance_km": 1753.5
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>Find Nearby Pincodes</h3>
            <p><strong>Endpoint:</strong> /FindNearbyPincodes</p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Finds pincodes within a specified radius of a given pincode.</p>
            <p><strong>Request Body:</strong> json</p>
            <pre>
              <code>
                {`
                {
                  "pincode": "110001",
                  "radius": 10, // in kilometers
                  "includeCoords": false
                }
                `}
              </code>
            </pre>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "source_pincode": "110001",
                  "nearby_pincodes": ["110002", "110003", "110005"] // distance // city // state
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>Validate Pincode</h3>
            <p><strong>Endpoint:</strong> /ValidatePincode/{'{pincode}'}</p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Validates if the specified pincode exists in the database.</p>
            <p><strong>Parameters:</strong> pincode: The pincode to validate.</p>
            <p><strong>Example Request:</strong> GET /ValidatePincode/110001</p>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "pincode": "110001",
                  "is_valid": true
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>Get Districts</h3>
            <p><strong>Endpoint:</strong> /GetDistricts</p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Retrieves a list of all unique districts from the database.</p>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "districts": ["Central Delhi", "South Delhi", "West Delhi"]
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>District of Pincode</h3>
            <p><strong>Endpoint:</strong> /DistrictOfPincode/{'{pincode}'}</p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Gets the district name for the specified pincode.</p>
            <p><strong>Parameters:</strong> pincode: The pincode to get the district for.</p>
            <p><strong>Example Request:</strong> GET /DistrictOfPincode/110001</p>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "pincode": "110001",
                  "district": "Central Delhi"
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>Distance Between Two Lat/Long Coordinates</h3>
            <p><strong>Endpoint:</strong> /DistanceBetweenTwoLatLng</p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Calculates the distance between two sets of latitude and longitude coordinates.</p>
            <p><strong>Request Body:</strong> json</p>
            <pre>
              <code>
                {`
                {
                  "lat1": 28.6139,
                  "lng1": 77.2090,
                  "lat2": 13.0827,
                  "lng2": 80.2707
                }
                `}
              </code>
            </pre>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "distance_km": 1754.2,
                  "road_distance_km": "Unavailable" // if road distance can't be calculated
                }
                `}
              </code>
            </pre>
          </li>

          {/* Additional list items for other endpoints */}
          <li>
            <h3>Nearby Pincodes By Latitude/Longitude</h3>
            <p><strong>Endpoint:</strong> /NearbyPincodesByLatLng</p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Finds nearby pincodes within a specified radius based on latitude and longitude coordinates.</p>
            <p><strong>Request Body:</strong> json</p>
            <pre>
              <code>
                {`
                {
                  "latitude": 28.6139,
                  "longitude": 77.2090,
                  "radius": 5 // Radius in kilometers
                }
                `}
              </code>
            </pre>
            <pre>
              <code>
                {`
                Example Success Response:
                {
                  "nearby_pincodes": [
                    "110001",
                    "110002",
                    "110003",
                    "110005"
                  ]
                }
                `}
              </code>
            </pre>
          </li>
        </ol>
      </div>
      <h2>Error Handling</h2>
      <p>
        Responses for errors will follow the standard HTTP status codes, such as:
      </p>
      <ul>
        <li>400 Bad Request: Missing or invalid parameters in the request.</li>
        <li>401 Unauthorized: Missing or invalid API key.</li>
        <li>404 Not Found: Requested resource not found.</li>
        <li>429 Too Many Requests: Rate limit exceeded.</li>
        <li>500 Internal Server Error: Server encountered an error.</li>
      </ul>

      <h2>Support</h2>
      <p>For further assistance, please contact <a href="mailto:support@picknpin.com">support@picknpin.com</a>.</p>
    </div>
  );
}

export default Documentation;
