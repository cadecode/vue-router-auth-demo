module.exports = [
    {
        id: 1,
        pid: 0,
        path: '/personal_center',
        name: 'PersonalCenter',
        title: '个人中心'
    },
    {
        id: 2,
        pid: 0,
        path: '/user_setting',
        name: 'UserSetting',
        title: '用户设置'
    },
    {
        id: 3,
        pid: 1,
        path: 'pwd_management',
        name: 'PwdManagement',
        link: '/personal_center/pwd_management',
        title: '密码管理'
        
    },
    {
        id: 4,
        pid: 1,
        path: 'my_info',
        name: 'MyInfo',
        link: '/personal_center/my_info',
        title: '我的信息'
    },
    {
        id: 5,
        pid: 2,
        path: 'msg_notice',
        name: 'MsgNotice',
        link: '/user_setting/msg_notice',
        title: '消息通知'
    },
    {
        id: 6,
        path: 2,
        pid: 'privacy_setting',
        name: 'PrivacySetting',
        link: '/user_setting/privacy_setting',
        title: '隐私设置'
    }
]
