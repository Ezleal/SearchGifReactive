    
    
    export const getGif = async(category)=>{
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=20&api_key=XdV2OXrO5KxQJiFcJAFriDTK99IDJYfs`;
        const resp = await fetch( url );
        const {data} = await resp.json();
        const dataMap = data.map (img => {
              return {
                 id: img.id,
                 url: img.images?.downsized.url,
                 title: img.title
              };    
        })
        return dataMap;
    }