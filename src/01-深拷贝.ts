// 深拷贝，兼容各种数据类型

// 1. 使用泛型，对输入类型自动判断并返回对应输出类型

export const deepCp = (
  function () {
    // 使用 Map 记录，避免循环引用
    let cp_rec = new Map();
    return function <T extends unknown>(root: T): T {
      // 首先判断对象类型: 直接返回基本类型
      if(cp_rec.has(root)) return cp_rec.get(root);
      if(typeof root !== 'object' || root === null) return root;
      if(Array.isArray(root)) {
        return root.map(item => deepCp(item)) as T;
      }
      const obj: T = {} as T;
      for(let key in root) {
        obj[key] = deepCp(root[key]);
      }
      cp_rec.set(root, obj);
      return obj;
    }
  }
)();
