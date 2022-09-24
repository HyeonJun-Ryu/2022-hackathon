import React from 'react'
import { List, Avatar } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'

function Message(props) {

    const AvatarSrc = props.who ==='bot' ? <SmileTwoTone type="robot" /> : <SmileTwoTone type="smile" />  

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar SmileTwoTone={AvatarSrc} />}
                title={props.who}
                description={props.text}
            />
        </List.Item>
    )
}

export default Message
