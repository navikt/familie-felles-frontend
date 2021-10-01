const elevenDigits = new RegExp('^\\d{11}$')

export const idnr = (digits: string, acceptSynthNr = false) => {
   const isDnr = + digits.substr(0, 1) >= 4
   return validate(digits, isDnr, acceptSynthNr)
}

const fixSynthNr = (digits: string) =>
    +digits.substr(2,1) >= 8? digits.substr(0, 2) + (+digits.substr(2, 1) - 8) + digits.substr(3)
     : +digits.substr(2,1) >= 4? digits.substr(0, 2) + (+digits.substr(2, 1) - 4) + digits.substr(3): digits

const validate = (digits: string, isDnr: boolean, acceptSynthNr: boolean) => {
   if (!elevenDigits.test(digits)) {
      return {
         status: "invalid",
         reasons: ["fnr or dnr must consist of 11 digits"]
      }
   }

   const fixedDigits = acceptSynthNr ? fixSynthNr(digits) : digits;

   const errMsgs = [...checksums(digits), ...birthdate(fixedDigits, isDnr)]

   return errMsgs.length == 0 ? {status: "valid", type: isDnr ? 'dnr' : 'fnr'} :
      {
         status: "invalid",
         reasons: errMsgs
      }
}

const checksums = (digitsString: string) => {
   const digits = Array.from(digitsString).map(v => +v);
   let k1 = 11 - ((3 * digits[0] + 7 * digits[1] + 6 * digits[2] + 1 * digits[3] + 8 * digits[4] +
      9 * digits[5] + 4 * digits[6] + 5 * digits[7] + 2 * digits[8]) % 11)
   let k2 = 11 - ((5 * digits[0] + 4 * digits[1] + 3 * digits[2] + 2 * digits[3] + 7 *
      digits[4] + 6 * digits[5] + 5 * digits[6] + 4 * digits[7] + 3 * digits[8] + 2 * k1) % 11)

   if (k1 === 11) k1 = 0
   if (k2 === 11) k2 = 0

   return k1 < 10 && k2 < 10 && k1 == digits[9] && k2 == digits[10] ?
      [] : ["checksums don't match"]
}

// copied from https://stackoverflow.com/questions/5812220/how-to-validate-a-date
const birthdate = (digits: string, isDnr: boolean) => {
   if (isDnr) {
      digits = (+ digits.substr(0, 1) - 4) + digits.substring(1)
   }

   const day = + digits.substr(0, 2)
   const month = + digits.substr(2, 4)
   const year = digits.substr(4, 6)

   // set year 00 default to 2000 instead of 1900
   const date = new Date(year === '00' ? 2000 : + year, month - 1, day)

   return (date && (date.getMonth() + 1) === month && date.getDate() === day) ?
      [] : ["invalid date"]
 }