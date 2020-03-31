<template>
  <div>
    <VueHeader></VueHeader>
    <main>
    </main>
    <VueFooter></VueFooter>
  </div>
</template>

<script>
import VueHeader from "./shared/header";
import VueFooter from "./shared/footer";

export default {
  components: {
    VueHeader,
    VueFooter
  },
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  }
};
</script>