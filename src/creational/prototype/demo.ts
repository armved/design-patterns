import { AbstractControl, FormControl, FormGroup } from '.';

const controls: AbstractControl[] = [
  new FormControl<string>('Avetik'),
  new FormGroup<{ age: number }>({ age: 22 }),
];

controls.forEach((control: AbstractControl) => {
  console.log(control);
  const cloned = control.clone();
  console.log('CLONED: ', cloned);
  console.log('---------------------');
});
