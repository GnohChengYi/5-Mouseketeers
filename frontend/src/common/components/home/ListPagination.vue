<template>
  <div class="list-pagination">
    <ul class="pagination">
      <li class="previous" @click="goPrevious"></li>
      <template v-for="(i, idx) in pageNumbers">
        <li v-if="i === '...'" :key="idx" class="ellipsis">{{ i }}</li>
        <li
          v-else
          :key="idx"
          @click="goPage(i)"
          :class="['page', { active: cursor === i }]"
        >
          {{ i }}
        </li>
      </template>
      <li class="next" @click="goNext"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListPagination',

  props: {
    pageSize: { type: Number, default: 3 },
    windowSize: { type: Number, default: 5 },
    numPages: { type: Number, default: 10 },
    prevText: { type: String, default: '◀' },
    nextText: { type: String, default: '▶' },
  },

  computed: {
    pageNumbers() {
      const max = this.windowSize;
      const total = this.numPages;
      if (total <= max) {
        return this.from(1, total);
      }
      if (this.cursor <= Math.ceil(max / 2)) {
        return this.from(1, max - 1).concat(['...', total]);
        // [1]~[max-1], [...], [total]
      }
      if (total - Math.floor(max / 2) <= this.cursor) {
        return [1, '...'].concat(this.from(total - max + 2, max - 1));
        // [1], [...], [total- max + 2]~[total]
      }
      return [1, '...']
        .concat(
          this.from(
            this.cursor - (max - 3) / 2,
            max - 2,
            this.cursor > total / 2,
          ),
        )
        .concat(['...', total]);
      // [1], [...], [cursor ± (max -3 )/2], [...], [total]
    },
  },

  data() {
    return {
      cursor: 1,
    };
  },

  watch: {
    cursor() {
      this.$emit('updateCursor', this.cursor);
    },
  },

  methods: {
    goPrevious() {
      if (this.cursor > 1) {
        this.cursor -= 1;
      }
    },
    goNext() {
      if (this.cursor < this.numPages) {
        this.cursor += 1;
      }
    },
    goPage(i) {
      this.cursor = i;
    },
    from(start, length, floor) {
      const s = floor ? Math.floor(start) : Math.ceil(start);
      return Array(length)
        .fill()
        .map((x, i) => s + i);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  @include flexCenter(row);
  display: inline-flex;
  color: #f3c63c;
  margin-top: 1vw;
  margin-bottom: 3vw;
  list-style: none;
  overflow: hidden;

  .page {
    @include sizeWH(2.3vw, 2.3vw);
    @include textMixin(#f3c63c, 1.7vw, 500);
    padding-top: 0.2vw;
    display: inline-block;
    margin-left: 0.2vw;
    border: 0.1vw solid #f3c63c;
    line-height: 1.7vw;
    cursor: pointer;

    &:hover {
      background-color: rgba(237, 230, 211, 0.5);
    }

    &.active {
      color: #fff;
      pointer-events: none;
      background-color: #f3c63c;
    }

    @include web-lg {
      @include sizeWH(4vw, 4vw);
      font-size: 2.6vw;
      padding-top: 1vw;
    }
    @include web-xs {
      @include sizeWH(5vw, 5vw);
      font-size: 4vw;
      padding-top: 1.4vw;
    }
  }

  .ellipsis {
    margin-left: 0.2vw;
    font-weight: 500;
    color: #f3c63c;
    font-size: 3vw;
  }

  li {
    cursor: pointer;
    width: 2vw;
    &.active {
      font-weight: bold;
      cursor: default;
    }
    &.ellipsis,
    &.disable {
      cursor: default;
    }
  }

  .previous {
    @include imageCDN('btn-next.png', 1.5vw, 1.5vw);
    margin-top: 0.3vw;
    margin-bottom: 0.3vw;
    transform: scaleX(-1);
  }

  .next {
    @include imageCDN('btn-next.png', 1.5vw, 1.5vw);
    margin: 0.3vw;
  }

  @include web-lg {
    .previous,
    .next {
      @include sizeWH(3vw, 3vw);
    }
  }

  @include web-xs {
    .previous,
    .next {
      @include sizeWH(4vw, 4vw);
    }
  }
}
</style>
