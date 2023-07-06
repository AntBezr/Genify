import React, { JSXElementConstructor, useState } from 'react';
import axios from 'axios';


interface Response {
  mGenres: string[],
}
interface tokenResponse {
  access_token: string,
  token_type: string,
  expires_in: number
}


export function GetGenres() {
  const [token, setToken] = useState<string>('')
  const [genres, setData] = useState<Response["mGenres"]>([])

  const getAccessToken = () => {
    const options = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      header: "Content-Type: application/x-www-form-urlencoded",
      body: "grant_type=client_credentials&client_id=e6b0af0df75f4d0d992810607e255322&client_secret=e461d93b6b134d03bf1f944cfffbd1fb"
    };
    axios
      .request(options)
      .then(function ({ data }: { data: tokenResponse }) {
        setToken(data.access_token)
      })
      .then(
        function getQuotes(): Response["mGenres"] {
          const opt = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
            header: `Authorization: Bearer ${token}`
          };
          axios
            .request(opt)
            .then(function ({ data }: { data: Response["mGenres"] }) {
              return setData(data);
            })
            .catch(function (error: any) {
              console.error(error);
            })
          return (genres)

        })
      .catch(function (error: any) {
        console.error(error);
      });
  }
  getAccessToken()
  return (
    <div >

    </div>
  );
};

export default GetGenres;


