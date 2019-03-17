export const arrayOrderByDateDesc = (data) =>{
  data.sort(function(x, y){
    return y.date.seconds - x.date.seconds;
  });

  return data;
};

