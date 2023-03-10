import { create } from 'ipfs-http-client';

const projectId = '2DYzChhhws3aPPBVYUlXPnOfQWD'
const projectSecret = 'd96738505c59450822b3e27f9a0083f6'

const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    timeout: 8000,
    headers: {
        authorization: auth
    }
})

export default ipfs;