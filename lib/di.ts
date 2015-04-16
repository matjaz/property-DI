import 'reflect-metadata';

export class Container {
  static types = new Map();
  
  static get(Type):any {
    var obj = this.types.get(Type);
    if (obj) {
      return obj;
    }
    obj = new Type();
    this.types.set(Type, obj);
    return obj;
  }
}

export function inject(Type?) {
  return function(target, key) {
    if (!Type) {
      Type = Reflect.getMetadata('design:type', target, key);
    }
    Object.defineProperty(target, key, {
      enumerable: true,
      writeable: true,
      configurable: true,
      value: Container.get(Type)
    });
  }
}
