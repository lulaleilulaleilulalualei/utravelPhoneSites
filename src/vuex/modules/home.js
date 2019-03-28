import *as types from '../type';

const state = {
	isTopColor: false,
	topHeight: 0,
	scrollTop: 0,
	isAboutBottom: false,
}

const getters = {
	isTopColor: state => state.isTopColor,
	topHeight: state => state.topHeight,
	scrollTop: state => state.scrollTop,
	isAboutBottom: state => state.isAboutBottom
}

const mutations = {
	[types.TELL_BGCOLOR](state, status) {
 		state.isTopColor = status
 	},
 	[types.TOP_BOX_HEIGHT](state, val) {
 		state.topHeight = val
 	},
 	[types.SCROLL_EVENT](state, val) {
 		state.scrollTop = val
 	},
 	[types.TO_ABOUT_BOTTOM](state, status) {
 		state.isAboutBottom = status
 	},
}

const actions = {
	toTellTopBg({commit}, status) {
 		commit(types.TELL_BGCOLOR, status)
 	},
 	getToBoxH({commit}, val) {
 		commit(types.TOP_BOX_HEIGHT, val)
 	},
 	getScrollTop({commit}, val) {
 		commit(types.SCROLL_EVENT, val)
 	},
 	toAboutBottom({commit}, status) {
 		commit(types.TO_ABOUT_BOTTOM, status)
 	},
}

 export default {
	state,
    actions,
    getters,
    mutations
}