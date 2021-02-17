<template>
  <div class="example-two">
    <div class="section">
      <div class="section-search search-form">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item label="审批人">
            <el-input
              v-model="formInline.user"
              placeholder="请输入内容"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-search"
              ></i>
            </el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select
              v-model="formInline.region"
              placeholder="活动区域"
            >
              <el-option
                v-for="option of options1"
                :key="option.key"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="审批人">
            <el-input
              v-model="formInline.region"
              placeholder="请输入内容"
              class="input-with-select"
            >
              <el-select
                slot="prepend"
                v-model="formInline.region"
                placeholder="请选择"
              >
                <el-option
                  label="餐厅名"
                  value="1"
                />
                <el-option
                  label="订单号"
                  value="2"
                />
                <el-option
                  label="用户电话"
                  value="3"
                />
              </el-select>
              <el-button
                slot="append"
                icon="el-icon-search"
              />
            </el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select
              v-model="formInline.region"
              placeholder="活动区域"
            >
              <el-option
                v-for="option of options2"
                :key="option.key"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="审批人">
            <el-input
              v-model="formInline.user"
              placeholder="审批人"
            />
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select
              v-model="formInline.region"
              placeholder="活动区域"
            >
              <el-option
                v-for="option of options3"
                :key="option.key"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="section-content">
        <div class="content-operate operate">
          <div class="operate-push"></div>
          <el-button
            plain
            @click="handleAdd"
          >
            新增
          </el-button>
          <el-button plain>
            编辑
          </el-button>
          <el-button
            type="danger"
            plain
          >
            删除
          </el-button>
          <div class="operate-pull">
            <el-button plain>
              导出
            </el-button>
            <el-button plain>
              导入
            </el-button>
          </div>
        </div>
        <div class="content-data data">
          <div class="data-wrapper">
            <div class="data-table">
              <div class="data-table__view">
                <el-scrollbar wrap-class="table-scrollbar-wrapper">
                  <el-table
                    :data="tableData"
                    style="width: 100%;"
                  >
                    <el-table-column
                      prop="date"
                      label="日期"
                      width="180"
                    />
                    <el-table-column
                      prop="name"
                      label="姓名"
                    />
                    <el-table-column
                      prop="address"
                      label="地址"
                      width="300"
                    />
                    <el-table-column
                      prop="sex"
                      label="性别"
                      width="300"
                    />
                  </el-table>
                </el-scrollbar>
              </div>
              <div class="data-table__pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      v-if="dialog.visible"
      :visible.sync="dialog.visible"
    >
      <el-form v-model="form">
        <el-form-item
          label="用户名"
        >
          <el-input
            v-model="formInline.region"
            placeholder="请输入内容"
            class="input-with-select"
          >
            <el-select
              slot="prepend"
              v-model="formInline.region"
              placeholder="请选择"
            >
              <el-option
                label="餐厅名"
                value="1"
              />
              <el-option
                label="订单号"
                value="2"
              />
              <el-option
                label="用户电话"
                value="3"
              />
            </el-select>
            <el-button
              slot="append"
              icon="el-icon-search"
            />
          </el-input>
        </el-form-item>
        <el-form-item
          label="啦啦啦"
        >
          <el-radio
            v-model="form.lll"
            label="1"
          >
            备选项
          </el-radio>
          <el-radio
            v-model="form.lll"
            label="2"
          >
            备选项
          </el-radio>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-modle="form.sex">
            <el-option value="男" />
            <el-option value="女" />
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ExampleTwo',
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
      form: {
        userName: '',
        sex: '',
        lll: '',
      },
      dialog: {
        visible: false,
      },
      options1: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      options2: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      options3: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      options4: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      options5: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      options6: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      options7: [
        {
          key: 1,
          label: 'option1',
          value: '1',
        },
        {
          key: 2,
          label: 'option2',
          value: '2',
        },
        {
          key: 3,
          label: 'option3',
          value: '3',
        },
        {
          key: 4,
          label: 'option4',
          value: '4',
        },
        {
          key: 5,
          label: 'option5',
          value: '5',
        },
        {
          key: 6,
          label: 'option6',
          value: '6',
        },
        {
          key: 7,
          label: 'option7',
          value: '7',
        },
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          sex: '男',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          sex: '男',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          sex: '男',
        },
      ],
    }
  },
  mounted() {
    const tableWrapper = document.querySelector('.data-table__view .el-table__body-wrapper')

    const tableWrapperClass = tableWrapper.className

    if (/is-scrolling-(\w+)/.test(tableWrapperClass)) {
      console.log(RegExp['$1'])
      switch (RegExp.$1) {
      case 'left' :
        console.log(1)
        break
      }
    }
  },
  methods: {
    onSubmit() {

      // console.log('submit!');
    },
    handleAdd() {
      this.dialog.visible = true
    },
  },

  // methods: {},
}
</script>
<style lang="scss">
.section {
  .section-search {
    @include shadow;

    padding: 2.2rem 3rem 0;
  }

  .section-content {
    @include shadow;

    margin-top: 1rem;
    padding: 1.2rem 3rem;

    .content-operate {
      overflow: hidden;
      padding: 1rem 0;

      .operate-push {
        float: left;
      }

      .operate-pull {
        float: right;
      }
    }

    .content-data {
      .data-wrapper {
        .data-table {
          @at-root {
            .data-table__view {
              padding: 1rem 0;

              .el-scrollbar {
                .table-scrollbar-wrapper.el-scrollbar__wrap {
                  .el-table {
                    overflow: visible;

                    .el-table__header-wrapper {
                      overflow: visible;
                    }

                    .el-table__body-wrapper {
                      overflow: visible;

                      &:not(.is-scrolling-none) {
                        cursor: all-scroll;

                        & ~ .el-table__header-wrapper {
                          cursor: all-scroll;
                        }
                      }
                    }
                  }
                }

                &__bar {
                  opacity: 0.4;
                }
              }
            }
          }

          .data-table__pagination {
            padding: 1rem 0;
          }
        }
      }
    }
  }
}
</style>>
