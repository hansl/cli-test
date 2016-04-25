const barrels: string[] = [
  'app',
  'app/shared',
  'app/+my-blue',
  'app/+my-blue/+my-red',
  'app/+my-blue/+my-red/+my-green',
  'app/+my-blue/+my-red/+my-yellow',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};
