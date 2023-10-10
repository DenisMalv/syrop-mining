export const normalisePaymentMethod = (data)=>{
    return data.length > 16 ?
             `${data.slice(0,7)}...${data.slice(data.length-9,data.length)}`:
             data
}
export const ucFirst= (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
