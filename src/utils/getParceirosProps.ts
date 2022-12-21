export async function getParceirosProps(){
    const response = await fetch("../../public/parceiros.json");

    const data = await response.json();

    console.log(data);
    return data;
}