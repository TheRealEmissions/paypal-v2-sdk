abstract class Types {
  constructor() {}

  toJson() {
    return JSON.stringify(this.toAttributeObject());
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

  abstract fromObject(obj: object): this;
}

export default Types;
