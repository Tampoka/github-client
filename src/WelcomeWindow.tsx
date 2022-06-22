import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

type UserInfoData = {
    viewer: {
        name: string
        bio: string
    }
}

const GET_USER_INFO = gql`
query getUserInfo {
viewer {
name
bio
}
}
`
export const WelcomeWindow = () => {
    // @ts-ignore
    const {loading, data} = useQuery<UserInfoData>(GET_USER_INFO, {
        notifyOnNetworkStatusChange: true,
        pollInterval: 0,
        fetchPolicy: "no-cache"
    })
    if (loading) {
        return null
    }
    return JSON.stringify(data)
}