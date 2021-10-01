import { userService } from '../_services';

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        userService.getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        // adicione a propriedade 'deleting: true' ao usuário que está sendo excluído
        state.all.items = state.all.items.map(user =>
            user.id === id ?
            {...user, deleting: true } :
            user
        )
    },
    deleteSuccess(state, id) {
        // remover usuário excluído do estado
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remova a propriedade 'deleting: true' e adicione a propriedade 'deleteError: [erro]' ao usuário
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // fazer uma cópia do usuário sem a propriedade 'deletar: true'
                const { deleting, ...userCopy } = user;
                // retornar cópia do usuário com a propriedade 'deleteError: [erro]'
                return {...userCopy, deleteError: error };
            }

            return user;
        })
    }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};