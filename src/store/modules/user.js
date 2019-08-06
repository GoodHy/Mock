import * as StoreService from "../../api/user";

const store = {
    namespaced: true,
    state: {
        userList: []
    },
    getters: {
        //处理列表项
        // detail: state => param => {
        //     return state.detail.filter(() => param.done)
        // }
    },
    mutations: {
        getUserList(state, action) {
            state.userList = action;
        }
    },
    actions: {
        // 编辑地面店
        getUserList: (context, data) => {
            return StoreService.getUserList(data)
                .then(result => {
                    context.commit('getUserList', result.data.data);
                    // if (result.status === 200) {
                    //      context.commit('getUserList', result.data.data);
                    // } else {
                    //     throw new Error('获取失败!');
                    // }
                })
                .catch(err => {
                    throw err;
                });
        }
    }
};

export default store;
