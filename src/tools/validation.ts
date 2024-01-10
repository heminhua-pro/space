// 校验数据
interface validatable{
  value: string | number,
  required?: boolean,
  min?: number,
  max?: number,
  minLength?: number,
  maxLength?: number,
}

export function ValidateData(obj: validatable):boolean{
  const {value,required,min,max,minLength,maxLength} = obj
  var isValid = true;

  if(required){
    isValid = isValid && !!value
  }
  if(min && typeof value === 'number'){
    isValid = isValid && value >= min
  }
  if(max && typeof value === 'number'){
    isValid = isValid && value <= max
  }
  if(minLength && typeof value === 'string'){
    isValid = isValid && value.length >= minLength
  }
  if(maxLength && typeof value === 'string'){
    isValid = isValid && value.length <= maxLength
  }
  return isValid
}