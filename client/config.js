import path from 'path'


export const IS_SERVER = false
export const IS_CLIENT = true

export const output = path.join(process.cwd(), 'static')
export const shared = path.join(process.cwd(), 'shared')
export const assets = path.join(output, 'assets')
export const dll = path.join(assets, 'dll', '[name].json')
export const vendor = path.join(assets, 'dll', 'vendor.json')