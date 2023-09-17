
const clientId = process.env.REACT_APP_CLIENT_ID; // Insert client ID her.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;
const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        // find the accessToken and expiration from the url
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        // if they both available
        if (accessTokenMatch && expiresInMatch) {
            // store the access token
            accessToken = accessTokenMatch[1]
            // store the expiration date
            const expiresIn = Number(expiresInMatch[1]);
            // set time out for accessToken to reset
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = authUrl;
        }
    },
    async search(term) {
        const token = Spotify.getAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const data = await response.json();
            return data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        } catch(error) {
            console.log(error);
        }

    },
    async savePlaylist(name,trackUris) {
        if (!name || !trackUris) {
            return;
        }
        try {
            const accessToken = Spotify.getAccessToken();
            let userId,playlistId;
            // get user id
            const userIdResponse = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            const data = await userIdResponse.json();
            userId = data.id;
            // create playlist
            const createPlayList = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name:name})
            })
            const playlistData = await createPlayList.json();
            playlistId = playlistData.id;
            // add track
            const addTrackResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({uris: trackUris})
            });
            // check error 
            if (addTrackResponse.ok) {
                return 'Playlist Create Successfully'
            } else {
                throw new Error('Failed to add track to playlist')
            } 
        } catch(error) {
            console.error('Error saving playlist', error);
            throw error;
        }
    }   

};

export default Spotify
