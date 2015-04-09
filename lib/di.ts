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

export function inject(Type = null) {
  return function(target, key) {
    if (Type === null) {
      Type = target.constructor.__types[key];
    }
    Object.defineProperty(target, key, {
      enumerable: true,
      writeable: true,
      configurable: true,
      value: Container.get(Type)
    });
  }
}
