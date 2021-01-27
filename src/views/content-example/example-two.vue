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
              placeholder="审批人"
            />
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
                v-for="option of options4"
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
                v-for="option of options5"
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
                v-for="option of options6"
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
                v-for="option of options7"
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
          <el-button plain>
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
                    width="180"
                  />
                  <el-table-column
                    prop="address"
                    label="地址"
                  />
                </el-table>
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
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        }, 
      ],
    }
  },
  methods: {
    onSubmit() {

      // console.log('submit!');
    },
  },

  // methods: {},
}
</script>
<style lang="scss">
.section {
  .section-search {
    @include shadow;

    margin-bottom: 2rem;
  }

  .section-content {
    @include shadow;

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
      // padding: 1rem 0;

      .data-wrapper {
        .data-table {}

        .data-table__view {
          padding: 1rem 0;
        }

        .data-table__pagination {
          padding: 1rem 0;
        }
      }
    }
  }
}
</style>>
