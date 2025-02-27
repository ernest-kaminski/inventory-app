declare global {
    namespace NodeJS {
      interface Global {
        mongoose: {
          conn: any;
          promise: Promise<any> | null;
        };
      }
    }
  }
<<<<<<< HEAD
  
export {};
  
=======

  export {};
>>>>>>> 3410cdcc51737dbba69a79e2b5d0b19454463695
