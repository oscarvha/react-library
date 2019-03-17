
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Deciciembre'];

export const dateConvertToMouthAndYear = (date) => {
    let data = new Date(date.seconds * 1000);
    let year = data.getFullYear();
    let month = months[data.getMonth()];
    return year + '-' + month;
}