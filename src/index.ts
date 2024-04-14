interface toOrdinalProps {
    input: number
    gender?: 'a' | 'o'
    uppercase?: boolean
    language?: 'pt' | 'en'
  }
  
  /**
   * Returns the number in its full ordinal form
   * @param {toOrdinalProps} props - The properties for the toOrdinal function.
   * @throws {Error} - Throws an error if the input is not an integer, greater than 999, or negative.
   * @returns {string} - The number in its ordinal form.
   */
  export function toOrdinal({
    gender,
    input,
    uppercase,
    language,
  }: toOrdinalProps): string {
    const l = language || 'en'
    const g = gender || 'o'
    const c = uppercase || false
    let txt = ''
  
    if (!Number.isInteger(input)) {
      throw new Error('Number its not an integer')
    }
    if (input < 0 || input > 999) {
      throw new Error('Invalid Number')
    }
  
    if (l === 'en') {
      const u = [
        '',
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth',
        'seventh',
        'eighth',
        'ninth',
        'tenth',
      ]
      const t = [
        '',
        'eleventh',
        'twelfth',
        'thirteenth',
        'fourteenth',
        'fifteenth',
        'sixteenth',
        'seventeenth',
        'eighteenth',
        'nineteenth',
      ]
      const h = [
        '',
        'twentieth',
        'thirtieth',
        'fortieth',
        'fiftieth',
        'sixtieth',
        'seventieth',
        'eightieth',
        'ninetieth',
      ]
      const th = 'thousandth'
      if (input < 11) {
        txt = u[input]
      } else if (input < 20) {
        txt = t[input - 10]
      } else if (input < 100) {
        txt =
          h[Math.floor(input / 10) - 2] +
          (input % 10 !== 0 ? '-' + u[input % 10] : '')
      } else if (input < 1000) {
        txt =
          u[Math.floor(input / 100)] +
          ' hundredth' +
          (input % 100 !== 0
            ? ' and ' +
              toOrdinal({ input: input % 100, uppercase, language, gender })
            : '')
      } else if (input === 1000) {
        txt = th
      }
    }
    if (l === 'pt') {
      if (input < 1000 && input > 99) {
        const t = [
          '',
          'cent',
          'ducent',
          'trecent',
          'quadrigent',
          'quingent',
          'sexcent',
          'septigent',
          'octigent',
          'nongent',
        ]
        const n100 = Math.floor(input / 100)
        const l = input - n100 * 100
        txt = `${t[n100]}ésim${g} ${toOrdinal({ input: l, gender, uppercase })}`
      }
      if (input < 100 && input > 9) {
        const x = [
          '',
          `décim${g}`,
          'vig',
          'trig',
          'quadrag',
          'quinquag',
          'sexag',
          'septuag',
          'octog',
          'nonag',
        ]
        const n10 = Math.floor(input / 10)
        const l = input - n10 * 10
        txt = `${x[n10] + (n10 > 1 ? `ésim${g}` : '')} ${toOrdinal({ input: l, gender, uppercase })}`
      }
      if (input < 10 && input > 0) {
        const u = [
          '',
          'primeir',
          'segund',
          'terceir',
          'quart',
          'quint',
          'sext',
          'sétim',
          'oitav',
          'non',
        ]
        txt = u[input] + g
      }
    }
  
    return c
      ? txt.replace(/((^|\s)\w)/g, (w) => {
          return w.toUpperCase()
        })
      : txt
  }
  