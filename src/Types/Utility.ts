import { Invoice } from "./Invoicing/Objects/Invoice";

export interface IUtility {
  new (...args: any[]): Utility;
  fromObject(obj: object): Utility;
}
export abstract class Utility {
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
              ? (this[entry as keyof this] as Utility[]).map((x) => (x instanceof Object ? x.toAttributeObject() : x))
              : (this[entry as keyof typeof this] as Utility).toAttributeObject()
            : this[entry as keyof this],
      });
    }
    return obj as T;
  }

  protected getFields<T extends object>() {
    const obj = {};
    for (const entry of Object.getOwnPropertyNames(this)) {
      if (typeof this[entry as keyof this] === "function") continue;
      Object.defineProperty(
        obj,
        entry.replaceAll(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
        {
          value: this[entry as keyof this],
          writable: false,
          configurable: false,
        }
      );
    }

    return obj as T;
  }

  protected isValid(regex: RegExp, value: string) {
    return regex.test(value);
  }
}

export type Static<I extends new (...args: any[]) => any, _C extends I> = InstanceType<I>;

export type Integer<N extends number> = number extends N ? N : `${N}` extends `${bigint}` ? N : never;

// export type EnumLambda<T extends { [key: string]: number | string }> = (x: T) => T[keyof T];
// export type VoidLambda<T> = (x: T) => void;

export type OnlySetters<T> = {
  [K in keyof T as K extends `set${infer R}` ? K : never]: T[K];
};
