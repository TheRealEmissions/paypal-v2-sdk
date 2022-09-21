abstract class Types {
  constructor() {}

  toJson() {
    return JSON.stringify(this.toAttributeObject());
  }

  toAttributeObject<T>() {
    const obj = {};
    for (const entry of Object.keys(this)) {
      obj[entry.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`)] =
        this[entry] instanceof Object
          ? Array.isArray(this[entry])
            ? this[entry].map((x) =>
                x instanceof Object ? x.toAttributeObject() : x
              )
            : this[entry].toAttributeObject()
          : this[entry];
    }
    return obj as T;
  }

  abstract fromObject(obj: object): this;
}

export default Types;
