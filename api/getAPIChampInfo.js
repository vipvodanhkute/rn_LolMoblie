export async function getAPIChampInfo(name){
    const api =await fetch(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/vn_VN/champion/${name}.json`);
    const apiJson=await api.json();
    const apiData=await apiJson.data;
    const apiArr=await Object.values(apiData);
            //.then(resJSON=>resJSON.data)
            //.then(resArr=>Object.values(resArr))
    return {
       apiArr
     }
  }
  