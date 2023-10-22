declare module "*";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare var require: {
  context(directory: string, useSubdirectories: boolean, regExp: RegExp): any;
};
