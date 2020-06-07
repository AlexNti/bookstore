class Legitity {
  value: any
  error: undefined | string

  constructor(value: any) {
    this.value = value
    this.error = undefined
  }

  trim() {
    this.value = this.value && this.value.trim ? this.value.trim() : this.value
    return this
  }

  max(len: number, msg?: string) {
    if (!this.error && this.value && this.value.length > len) {
      this.error = msg || 'max'
    }
    return this
  }

  min(len: number, msg?: string) {
    if (!this.error && this.value && this.value.length < len) {
      this.error = msg || 'min'
    }
    return this
  }

  required(msg?: string) {
    if (!this.error && !this.value) {
      this.error = msg || 'required'
    }
    return this
  }

  matches(regex: RegExp, msg?: string) {
    if (!this.error && this.value && !regex.test(this.value)) {
      this.error = msg || 'regex'
    }
    return this
  }
  custom(fn: (value: any) => boolean, msg: string) {
    if (!this.error && !fn(this.value)) {
      this.error = msg
    }
    return this
  }
}

export default Legitity
