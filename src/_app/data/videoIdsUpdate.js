const fs = require('fs')
const path = require('path')

const newCourseFilePath = path.join(__dirname, './newCourseWithVideoIds.json')
const courseFilePath = path.join(__dirname, './Course.json')
const courses = JSON.parse(fs.readFileSync(courseFilePath, 'utf8'))

const perfectpath = [
  'zUl4ewfjWL4',
  'gob4tduiT5E',
  '5iQjj6fvOvw',
  'FQqmcL5wMbc',
  'NiIANbTIOtg',
  '77H3hSKtK4M',
  '3brn7vV6lko',
]

const js2 = [
  'tTPyKo3tFb8',
  'pP5cQAPR6cY',
  'M2m9ptZuL8M',
  'CSUmgEC2RZA',
  'FpD4fFE8yF4',
  'tF0rQQ37C_Q',
  'J7ajC1hSuhg',
  'TI9TXsNnq6c',
  '-fdcUifPgPE',
  'H-1cTVr8n30',
  'FBoPicXrRDs',
  'ukB6qdk_ClA',
  'EgYIhIksuck',
  '5fL1o9qyCog',
  'B0VgsSfaaAo',
  'FVWdq4uCgbM',
  'd0ikhXFbuhQ',
  '8FcgPmKpeV0',
  'PAYf3OQRLYw',
  'eEB53HZxl4o',
  'RSPEUzrshh4',
  'g7x3t7qSay8',
  '7VTGoCAwHHE',
  '0ySbpi0cNrA',
  'fQbqUhznWZQ',
  'Ts9o3lvU6JE',
  'IPmPIxSx_u0',
  'A8Tg-aB0u4E',
  '_jL1J2r-22c',
  'bdELuGfS6Mw',
  'O_NA7aHZi2k',
  'tl7blY6eB1k',
  'w4PzYj4Pk3k',
  'AxA0eHBuS1k',
  'czqD8lRIVQU',
  'i0NpENtMj04',
  'LUFNB0zTQuA',
  '-6ug4usF070',
  'jMmiXrYaxto',
  'pV6wBcSzhmI',
  'Ou-a5ICkgu4',
  'UxTBJgaWgLw',
  'wLyZLhCgkWc',
  'VFt8Zhy1f9A',
  'fdzmbFVU53Y',
  'XODhesqd9j4',
  'cmfB1p5-2RA',
  'yIoMRWpDdeA',
  'Fy0lPFzUGlY',
  'Nr7EcLo-zwU',
  'MBGZXUoXykQ',
  'w06gb_Z_oWU',
  'EqyWImggpD8',
  'k6dedVmlTLk',
  'mdld34y4hw4',
  'YLhNaA4JNdA',
  '_HcYDacqe7c',
  'RARSuEyyiWs',
  'GCDu7TCCUg4',
  'Qy6e4EoXurA',
  'tZUSvFClY6I',
  'q2WlFyf0VBY',
  '5Ing-RO29D4',
  'iaep20edH2w',
  'IpiQCnN-tXE',
  'gixxJCJZtFI',
  'fAX6Yhcj1j0',
  'zoal5sI69U4',
  'R83O8LRMNV0',
  'Ss3Pu4wBQ2Q',
  'tnA0r4EPHys',
  'Uo3LpFpStXo',
  'NL4bYqgIb0o',
  'J05ij2n4vC4',
  'lrS3MeolE6Q',
  '7yZhO7zxlAU',
  'unhqBJWL-GQ',
  '9ZRueefvoKU',
  'skq6ATZkm4U',
  'EJtK8quCK4Q',
  'YUaBf5GwbhA',
  'sv8R3gWuUXw',
  'sJlCQS0ozzI',
  'sJJYf8y6NxA',
  'LrDldAAPpgQ',
  'ZtuY1MlNlAA',
  'C-khRkmB2Ks',
  'Ap4ne-JRbg0',
  'y_rQ2_dDpVI',
  'E8XsHgU-o6g',
  'nNTV12VzVZc',
  'sY3-T_N8OS8',
  'qo61pSxBYsw',
  '0QbMAtdpSSk',
  'KRK8dZPxwbU',
  '7BZvcvwOE78',
  'puwZ3Mka-Q8',
  'bXb3EkJbRpI',
  '_c1cRikSVdw',
  'xp1aeoaoQP8',
  '1XMrb--d9L0',
  'nGquwt8AgNE',
  'qkIyRx4Rjio',
  'FlI-5Px-A9o',
  'kXrR-QFe188',
  'V8y5gjIeu0g',
  'MggKDTze6iQ',
  'WBQMkM995pY',
  'qYWOJNdbv2Q',
  'EQdEBk92FDA',
  'Z8GR25TlPrg',
  'JzyYrZjMogE',
  'Cm4NPwZVdHY',
  '8i_jao28m4Y',
  '84nbrzX-jAM',
  'ALI3_eQQwwg',
  'N_JrLt9kuX0',
  '1qsOC_M0eik',
  'StMfuOG4AKI',
  'Di2XQd65Fzc',
  'jOZkBix2IQ0',
  'vqs-tkaz7dI',
  'YAsC6yxOF5k',
  'Nil1CHFCwuo',
  'rcDv6gNAdes',
  'bPu_rknNuoA',
  'nD1w_wOThfU',
  'bLQwtMTNsJg',
  'XlDPXvWDz8A',
  '8sR2UcFwIuY',
  'gAwJZHIUXA4',
  'kY3KWD5C0I0',
]

const htmlcss2 = [
  'i9q3rgeBp3I',
  'HjyzHKYQf_E',
  'AsQmtk4jzdU',
  'R7DXSTvXZuw',
  'B0leMtD3NFc',
  'roxjIAkRGy8',
  'Pvu8pHkqigc',
  'eEWrgWzYNOY',
  'p54VbpB4ZBY',
  'otXmlwJFfzU',
  'k6hAjC7VtS4',
  'FWGM_UlqWPw',
  '_7kg8olL7V0',
  'dcGhHGThpOs',
  'uJjKgnesGFQ',
  '8IDddOaeTyk',
  'IMw8pbh1yIg',
  '7f6bH5q0uXk',
  '4Gb_3FzwfeI',
  '7wheOze_Eho',
  'njvaew5L2y4',
  'XSrxIgZzcZI',
  'm2Ux7eIrdIM',
  'NqDkyl_6LYw',
  '_osNt6Tn338',
  'aXQ8Db2CClw',
  'W87ckj8azXI',
  '2NJ46gYRknQ',
  'Wjb-TLZbOOo',
  'TH-yHJjxBck',
  'ymdTiN3KHfQ',
  'jLRkLzrMu54',
  'Ot0m-BnFllI',
  'MoyMojEyXyI',
  'bSgU7Ra-M6A',
  'Ld9zNjz7t4s',
  'b-8MO98e_lY',
  'KtPVOLo2vWg',
  'wwygfTPPzps',
  'Cp8NzMs_fGs',
  'AkMfrA1BPMc',
  'Fgat1db3io8',
  'o011UoeMvw4',
  'K6MXFQdFp8U',
  '4Cp1NDOZKw8',
  'wQ8df52tXug',
  'Vv9HNrhc6J4',
  'X8Dbgc7ZyVk',
  'h0JEQzHzl2w',
  'kR_VDKCFQZU',
  'H3FsqeF_ZG0',
  '_1DiakPWmvU',
  'f_avqXSK4D0',
  'r2iZbAme-Yk',
  'dvldbts1NEo',
  'jpQj_5Xbbf0',
  '5WFdmpKm530',
  'Vz0CdgRkbDs',
  'B8YGNNxFeMo',
  'QQXYWm8ReGg',
  'wWmQ4SdU_rg',
  'SusbZwn9kzs',
  'Lw5JGdfupq4',
  '7f6WdKLJ2b4',
  'OgFn3DxaKFA',
  '2H4uAKxI9Rs',
  'lPm58ySx_ss',
  'L5ev7c2vTBY',
  'FGJZlZUahpY',
  '0R_PwppeUzY',
  '-zeieoiWO0M',
  'Aaq6pzd4OZk',
]

courses.forEach((course) => {
  if (course.slug === 'htmlcss2') {
    course.videoSource = htmlcss2.shift()
    if (Array.isArray(course.lesson)) {
      course.lesson = course.lesson.map(lesson => ({
        ...lesson,
        videoSource: htmlcss2.shift(),
      }))
    }
  }
})

fs.writeFileSync(newCourseFilePath, JSON.stringify(courses, null, 2), 'utf8')
