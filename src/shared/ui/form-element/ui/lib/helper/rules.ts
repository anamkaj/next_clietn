export const rules: {
  [key: string]: {
    [key: string]: string
  }
} = {
  phone: {
    required: 'Это обязательное поле заполнения',
    pattern: 'Проверьте правильность ввода номера',
  },
  name: {
    pattern: 'Используйте только буквы, без пробелов',
    maxLength: 'Превышена максимальная длина',
    minLength: 'Слишком коротко',
  },
  password: {
    pattern: 'Проверьте правильность ввода пароля',
    too_small: 'Пароль должен содержать 8 знаков',
    too_big: 'Пароль должен содержать 8 знаков',
  },
  email:{
    invalid_string:"Проверьте правильность ввода Email"
  }
}
