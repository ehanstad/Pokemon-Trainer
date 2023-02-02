export class StorageUtil {

  // this method saves the value to the session storage
  public static storageSave<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // this method reads the value from the session storage
  public static storageRead<T>(key: string): T | undefined {
    const storedValue = sessionStorage.getItem(key);
    try {
      if (storedValue) {
        return JSON.parse(storedValue) as T;
      }
      return undefined;

    } catch (e) {
      sessionStorage.removeItem(key);
      return undefined;
    }
  }


}
