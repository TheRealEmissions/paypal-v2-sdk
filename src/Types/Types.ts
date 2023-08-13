abstract class Types {
  toJson<T>() {
    return JSON.stringify(this.toAttributeObject<T>());
  }

  toAttributeObject<T>() {
    const obj = {};
    for (const entry of Object.keys(this)) {
      Object.assign(obj, {
        [entry.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`)]:
          this[entry as keyof this] instanceof Object
            ? Array.isArray(this[entry as keyof this])
              ? (this[entry as keyof this] as Types[]).map((x) => (x instanceof Object ? x.toAttributeObject() : x))
              : (this[entry as keyof typeof this] as Types).toAttributeObject()
            : this[entry as keyof this],
      });
    }
    return obj as T;
  }
}

export type Static<I extends new (...args: any[]) => any, _C extends I> = InstanceType<I>;
export interface ITypes {
  new (...args: any[]): Types;
  fromObject(obj: object): Types;
}

export type Integer<N extends number> = number extends N ? N : `${N}` extends `${bigint}` ? N : never;

// export type EnumLambda<T extends { [key: string]: number | string }> = (x: T) => T[keyof T];
// export type VoidLambda<T> = (x: T) => void;

export default Types;
