import { mapGetters } from 'vuex';

export default {
  name: 'Loading',
  computed: {
    ...mapGetters('loading', {
      loadingStatus: 'loadingStatus'
    })
  }
};
