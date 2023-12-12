// rules = {
//     username: [
//         {required: true, message: 'Xin vui long nhap username'},
//         {regexp:'username',message: 'Vui long nhap dung username'}

//     ],
//     password : [
//         {required: true, message : 'Xin vui long nhap password'}
//     ]

// }

// forms = {
//     name : 'tucongdanh',
//     password:'123456'
// }
const REGEXP = {
  username: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
}

const REQUIRED = 'please fill in the field'
export const validate = (rules, forms) => {
  const errorObject = {}
  for (let name in rules) {
    for (let rule of rules[name]) {
      if (rule.required && !forms[name]?.trim()) {
        errorObject[name] = REQUIRED
      }
      if (
        forms[name]?.trim() &&
        rule.regexp &&
        !REGEXP[name].test(forms[name])
      ) {
        errorObject[name] = rule.message
      }
    }
  }
  return errorObject
}
