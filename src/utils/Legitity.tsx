class Legitity {
  value: any
  error: undefined | string

  constructor(value: string) {
    this.value = value
    this.error = undefined
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
}

export default Legitity
