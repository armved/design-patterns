export interface Prototype {
  clone(): Prototype;
}

export abstract class AbstractControl<T = any> implements Prototype {
  constructor(protected value: T) {}

  public getValue(): T {
    return this.value;
  }

  public abstract clone(): AbstractControl<T>;
}

export class FormControl<T> extends AbstractControl<T> {
  constructor(value: T) {
    super(value);
  }

  public clone(): FormControl<T> {
    return new FormControl(this.value);
  }
}

export class FormGroup<T> extends AbstractControl<T> {
  constructor(value: T) {
    super(value);
  }

  public clone(): FormGroup<T> {
    return new FormGroup(this.value);
  }
}
