# 导航球

下面是一个使用插槽自定义导航球示例。

## 示例

<ClientOnly>
    <Demo />
</ClientOnly>

<script setup>
import { defineAsyncComponent } from 'vue'

const Demo = defineAsyncComponent(() => import('./demo.vue'))

</script>

::: details 查看代码

```vue

<template>
  <vm-viewer :center="center">
    <vm-tdt-layer layer="img_d"/>
    <vm-tdt-layer layer="img_z"/>

    <vm-compass @ready="onReady" class-name="mars3d-compass-custom">
      <!--      支持slot自定义内容-->
      <template #outSvg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" height="120"
             viewBox="0 0 120 120">
          <defs>
            <clipPath id="b">
              <rect width="120" height="120"/>
            </clipPath>
          </defs>
          <g id="a" clip-path="url(#b)">
            <g transform="translate(-216 -938)">
              <path
                  d="M60,120a59.721,59.721,0,0,1-33.547-10.247,60.174,60.174,0,0,1-21.738-26.4,59.921,59.921,0,0,1,5.532-56.9,60.176,60.176,0,0,1,26.4-21.738,59.92,59.92,0,0,1,56.9,5.532,60.175,60.175,0,0,1,21.738,26.4,59.921,59.921,0,0,1-5.532,56.9,60.174,60.174,0,0,1-26.4,21.738A59.625,59.625,0,0,1,60,120ZM60,2a57.73,57.73,0,0,0-32.429,9.906A58.17,58.17,0,0,0,6.558,37.424a57.923,57.923,0,0,0,5.348,55,58.17,58.17,0,0,0,25.519,21.014,57.923,57.923,0,0,0,55-5.348,58.17,58.17,0,0,0,21.014-25.518,57.924,57.924,0,0,0-5.348-55A58.169,58.169,0,0,0,82.576,6.558,57.635,57.635,0,0,0,60,2Z"
                  transform="translate(216 938)" fill="#696e84"/>
              <path
                  d="M42,84A42.011,42.011,0,0,1,25.652,3.3a42.011,42.011,0,0,1,32.7,77.4A41.737,41.737,0,0,1,42,84ZM42,2A40.011,40.011,0,0,0,26.43,78.857,40.01,40.01,0,0,0,57.57,5.143,39.748,39.748,0,0,0,42,2Z"
                  transform="translate(234 956)" opacity="0.899"/>
              <path
                  d="M42-4c.363,0,.731,0,1.094.013L43,.012Q42.578,0,42.153,0H42ZM53.91-2.442c.351.094.706.193,1.055.3L53.84,1.692h0c-.318-.093-.64-.183-.961-.269Zm11.1,4.6c.314.182.631.37.941.56L63.868,6.135l0,0-.005,0-.009-.005,0,0-.009-.006,0,0-.01-.006,0,0L63.807,6.1l0,0-.012-.007h0l-.012-.007h0q-.311-.189-.625-.372h0L63.14,5.7h0l-.011-.006,0,0-.01-.006,0,0L63.1,5.677l-.006,0-.007,0-.007,0-.005,0-.008,0-.005,0-.009-.005,0,0-.011-.006h0l-.012-.007h0l-.013-.008ZM74.534,9.48c.257.257.514.52.765.783l-2.9,2.76-.164-.171,0,0-.008-.008-.006-.006,0,0-.009-.009,0,0c-.1-.1-.2-.208-.3-.312l0,0-.009-.009,0,0-.008-.008,0,0-.007-.007,0,0-.005-.005-.007-.007,0,0-.008-.008,0,0-.01-.01h0l-.126-.127Zm7.314,9.525c.182.315.363.636.537.955l-3.51,1.919q-.11-.2-.221-.4h0l-.015-.027h0l-.007-.013h0l-.007-.012,0,0-.006-.011,0,0-.006-.011,0,0-.006-.011,0,0-.006-.01,0-.005,0-.009,0-.005,0-.008,0-.006,0-.008,0-.007,0-.006,0-.008,0-.006,0-.008,0-.005,0-.009,0,0-.005-.009,0,0-.006-.01,0,0-.006-.011v0l-.006-.011v0l-.007-.012h0l-.117-.2Zm4.6,11.1c.094.351.185.709.27,1.062l-3.888.938c-.037-.152-.074-.3-.113-.455h0l0-.015h0l0-.015h0l0-.014h0l0-.014h0l0-.014h0l0-.014h0l-.017-.067,0-.009v0l0-.011v0l0-.013h0l0-.014h0q-.039-.149-.078-.3ZM84,42.019l4,0c0,.363,0,.731-.013,1.093l-4-.1q.005-.212.008-.425V42.47c0-.024,0-.049,0-.073v-.143Q84,42.137,84,42.019ZM82.573,52.895l3.864,1.035c-.094.351-.194.706-.3,1.055L82.3,53.858q.141-.479.27-.963Zm-4.206,10.13,3.461,2.005c-.182.314-.371.631-.56.941l-3.412-2.087Q78.116,63.458,78.367,63.025Zm-6.688,8.694,2.827,2.83c-.257.257-.521.514-.784.764l-2.759-2.9.088-.084,0,0,.007-.006.005-.005,0,0,.009-.008h0Q71.382,72.014,71.678,71.718Zm-8.7,6.677,2,3.464c-.315.182-.636.362-.955.536L62.1,78.885l.249-.137h0l.012-.006,0,0,.01-.006.005,0,.008,0,.007,0,.007,0,.008,0,.006,0,.008,0,.005,0,.01-.005,0,0,.011-.006h0l.013-.007h0l.013-.007h0l.013-.007h0q.239-.134.475-.27ZM52.84,82.588l1.03,3.865c-.351.094-.709.184-1.062.269l-.937-3.889.213-.052.012,0,.013,0,.014,0,.011,0h0l.013,0h0Q52.5,82.679,52.84,82.588Zm-11.878,1.4c.265.006.528.01.794.012h.206l0,4c-.363,0-.731,0-1.093-.014l.1-4ZM30.124,82.3c.22.065.439.127.661.188h0l.013,0h0l.014,0h0l.012,0,.257.07L30.05,86.432c-.351-.094-.706-.194-1.055-.3ZM20.1,77.845q.317.194.638.383h0l.012.007,0,0,.009.005.005,0,.007,0,.008,0,0,0,.01.006,0,0,.16.093-2.007,3.46c-.314-.182-.631-.371-.941-.561Zm-8.53-6.9.19.2h0l.009.009,0,0,.008.008,0,0,.007.007,0,0,.006.006.005.006,0,0,.007.007,0,0,.007.007,0,0,.008.009h0c.142.146.283.29.427.434L9.437,74.49c-.257-.257-.514-.521-.764-.784ZM5.106,62.087c.06.11.12.219.181.328h0l.007.013h0l.007.012v0l.006.011v0l.006.01,0,0,0,.008,0,.006,0,.007,0,.008,0,.005,0,.009,0,0,.006.01,0,0,.006.011,0,0,.007.012v0l.007.012v0l.007.013h0q.089.159.18.317l0,0,.006.01,0,.007,0,.007.006.01,0,0,.007.013h0l-3.465,2c-.182-.315-.362-.636-.536-.955l3.511-1.916ZM1.162,51.853l.024.1,0,.009v0q.059.244.122.487h0l0,.015v0l0,.012v0l0,.01,0,.006,0,.009,0,.007,0,.008,0,.008,0,.007,0,.009,0,.006,0,.01v0l0,.01v0l0,.012v0l0,.014h0l.056.211L-2.458,53.85c-.093-.351-.184-.709-.269-1.062ZM-3.986,40.845l4,.1v.006h0v.073C0,41.33,0,41.635,0,41.943l-4-.005C-4,41.575-3.995,41.207-3.986,40.845Zm1.857-11.869,3.837,1.131q-.086.291-.167.583h0l0,.015h0l0,.01,0,.007v0c-.032.114-.063.23-.094.345L-2.426,30.03C-2.332,29.679-2.232,29.324-2.129,28.975ZM2.754,17.994l3.41,2.09c-.131.214-.259.426-.386.643v0l-.007.011,0,0-.006.01,0,.006,0,.007-.1.177L2.193,18.934C2.375,18.62,2.564,18.3,2.754,17.994Zm7.555-9.335,2.756,2.9q-.243.231-.481.464l-.006.006-.23.227L9.524,9.422C9.781,9.166,10.045,8.909,10.309,8.658Zm9.706-7.074L21.929,5.1q-.439.239-.872.489l-2-3.466C19.374,1.939,19.7,1.759,20.015,1.585ZM31.232-2.732l.933,3.89-.3.074h0l-.014,0h0l-.014,0-.015,0-.015,0-.015,0-.471.121-.015,0-.015,0-.015,0-.012,0h0l-.013,0h0l-.014,0h0L31.2,1.4,30.17-2.464C30.521-2.557,30.879-2.647,31.232-2.732Z"
                  transform="translate(234 956)" fill="#696e84"/>
              <circle cx="2.5" cy="2.5" r="2.5" transform="translate(274 943.5)" fill="#fcbb40"/>
            </g>
          </g>
        </svg>
      </template>

      <template #innerSvg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" height="120"
             viewBox="0 0 120 120">
          <defs>
            <clipPath id="b">
              <rect width="120" height="120"/>
            </clipPath>
          </defs>
          <g id="a" clip-path="url(#b)">
            <g transform="translate(-216 -938)">
              <g transform="translate(0 0)">
                <circle cx="35" cy="35" r="35" transform="translate(241 963)" opacity="0.901"/>
                <path
                    d="M19-1c.35,0,.7.009,1.051.027L20,.026Q19.612.006,19.22,0H19Zm3.144.246c.345.055.694.119,1.035.192l-.208.978q-.487-.1-.983-.182Zm3.068.738c.332.108.666.227.992.353l-.36.933q-.407-.157-.823-.3l-.007,0-.007,0L25,.967l-.006,0L24.9.934ZM28.125,1.2c.311.16.621.33.923.505l-.5.864-.034-.019-.006,0-.006,0-.006,0-.006,0,0,0h0q-.354-.2-.717-.393l-.1-.05Zm2.684,1.658c.282.206.562.423.832.644l-.632.775-.036-.029h0l-.005,0h0l0,0h0l0,0,0,0q-.359-.291-.733-.565ZM33.2,4.914c.246.248.489.506.721.766l-.746.666q-.224-.25-.456-.493h0l-.009-.01,0,0L32.7,5.832l0,0-.008-.009,0,0-.008-.008,0,0L32.665,5.8l0,0-.006-.006,0,0-.006-.006-.007-.007,0,0-.008-.008,0,0-.009-.009h0l-.126-.128Zm2.039,2.406c.2.283.4.576.593.87l-.841.541v0h0l0-.005h0l0-.005h0l0-.006h0l-.015-.023h0l0-.006h0l0-.005h0l0-.005h0l0,0v0l0,0h0l-.027-.041h0l0-.006h0l0-.006h0L34.9,8.591h0q-.228-.348-.472-.686Zm1.637,2.7c.157.312.308.633.448.953l-.916.4q-.2-.459-.426-.9Zm1.191,2.922c.106.333.2.673.292,1.012l-.968.252c-.032-.121-.064-.242-.1-.362V13.8l0-.006h0l0-.007h0q-.078-.273-.163-.542Zm.713,3.074c.052.345.095.7.128,1.045l-1,.1q-.048-.5-.122-.992ZM38,19.152l1,.008c0,.35-.015.7-.035,1.051l-1-.06Q38,19.655,38,19.152Zm-.257,2.986.986.164c-.057.345-.125.693-.2,1.034l-.976-.216c.025-.111.048-.223.071-.335h0v-.007h0v-.055h0v-.006h0Q37.694,22.426,37.742,22.138Zm-.724,2.908.948.318c-.111.331-.233.664-.361.989l-.93-.368.011-.029h0l0-.006h0l0-.006h0l0-.006v0l0,0v0l0-.006v0l0,0,0,0v0l0-.005h0l0-.006h0l0-.006h0l0-.006h0l0-.006h0l.005-.013h0Q36.88,25.456,37.018,25.046ZM35.842,27.8l.886.464c-.162.309-.335.619-.513.919l-.86-.51Q35.61,28.246,35.842,27.8Zm-1.6,2.537.8.6c-.209.28-.427.558-.651.827l-.77-.639.166-.2,0,0,0-.005,0,0h0l0-.005h0l0-.006h0Q34.037,30.621,34.247,30.339Zm-1.973,2.256.7.715c-.25.244-.51.485-.772.715l-.66-.751q.132-.116.261-.234h0l.009-.009,0,0,.008-.008.006-.005.006-.005.006-.005L31.846,33l.005,0,.006-.005.006-.006,0,0,.008-.007,0,0,.008-.007,0,0,.008-.008,0,0,.009-.008,0,0,.01-.009h0l.01-.009h0l.01-.009h0l.01-.01h0l.034-.032h0l.011-.01h0C32.094,32.768,32.184,32.682,32.274,32.595Zm-2.3,1.919.578.816c-.285.2-.579.4-.874.586l-.534-.845q.286-.181.565-.371h0l.012-.008h0l.034-.023.005,0,.006,0,.006,0,.006,0,.006,0,0,0h0l.006,0h0ZM27.4,36.048l.443.9c-.313.155-.635.3-.956.441l-.395-.919q.229-.1.454-.2h0l.007,0,.007,0,.007,0,.007,0h0l.005,0h0c.14-.065.277-.131.415-.2Zm-2.784,1.109.3.955c-.334.1-.675.2-1.014.284l-.244-.97q.4-.1.8-.219h0l.008,0,.007,0,.008,0,.008,0,.008,0,.008,0h0l.119-.036Zm-2.925.654.14.99c-.345.049-.7.089-1.045.12l-.088-1c.281-.025.561-.056.839-.093h.042Zm-3.991.145q.215.015.43.024h.1l.093,0h0q.188.007.376.01l-.016,1c-.35-.005-.7-.02-1.051-.044Zm-2.965-.437c.132.03.263.059.4.086l.007,0,.007,0h.014l.007,0h.021q.262.053.527.1l-.172.985c-.344-.06-.692-.13-1.032-.208l.224-.975Zm-2.858-.9q.462.187.936.35l-.326.946c-.33-.114-.662-.238-.986-.369Zm-2.68-1.341q.145.088.292.173h0l.006,0h0l.005,0,.006,0,.006,0,.006,0,.007,0,.006,0,.006,0h0l.006,0h0l.006,0h0l.006,0h0l.006,0h0l.006,0h0l.272.153h0l.006,0,.006,0,.006,0,.006,0,.006,0,.006,0,.006,0,.006,0,.169.091-.471.882c-.308-.164-.616-.339-.915-.52ZM6.759,33.532l.192.16h0l.011.009h0l.012.01.006,0,0,0h0l0,0h0l0,0H7l.005,0H7q.265.216.537.422l-.6.8c-.278-.211-.555-.432-.822-.657l.645-.764ZM4.626,31.426l.062.071h0l.031.035h0l.009.011h0l.009.01h0l.009.01h0l.009.011h0l.009.01,0,0,.008.01,0,0,.008.009,0,0,.008.009,0,0,.008.009,0,0,.009.01,0,0,.008.009,0,0,.008.008,0,0,.008.009,0,0,.008.009,0,0,.007.008,0,0,.007.008,0,0,.007.008,0,0,.007.008,0,0,.008.008,0,0,.007.008,0,0,.008.008,0,0,.007.008,0,0,.007.008,0,0,.007.008,0,0,.007.008,0,0,.008.008,0,0L5,31.844l0,0,.007.008,0,0,.008.008,0,0,.008.008,0,0,.008.008,0,0,.007.008,0,0,.008.008,0,0,.008.008,0,0,.008.009,0,0,.009.009,0,0,.008.009,0,0,.008.009,0,0,.008.008,0,0,.008.009,0,0,.009.01,0,0,.008.009,0,0,.008.009,0,0,.008.009,0,0,.009.009,0,0,.009.01,0,0,.009.009,0,0,.008.009,0,0,.009.009,0,0,.009.01h0l.01.01,0,0,.009.009,0,0,.009.009,0,0,.009.009,0,0,.009.009h0l-.721.693c-.242-.252-.481-.513-.709-.777l.756-.654ZM2.849,29.013l.05.079h0l0,.006h0l0,0,0,0,0,0,0,0h0q.235.372.486.733l-.821.572c-.2-.287-.394-.582-.579-.879l.849-.528ZM1.474,26.35q.08.189.163.377h0l0,.006v0l0,0v0l0,0v0l0,0,0,0v0q.113.253.234.5l-.9.435c-.152-.315-.3-.638-.433-.96ZM.537,23.5q.086.354.185.7h0l0,.007h0l0,.005v.01h0q.034.119.07.238l-.958.287c-.1-.335-.193-.677-.276-1.016L.537,23.5ZM.062,20.544q.012.143.025.286h0v.007h0v.05c.013.132.027.264.043.4h0v.007h0V21.3h0v.024h0q.013.108.027.215l-.991.132c-.046-.346-.084-.7-.112-1.046Zm-1-3.073,1,.075q-.038.5-.049,1l-1-.023C-.986,18.173-.969,17.819-.942,17.472Zm.485-3.118.973.231q-.077.323-.143.65h0l-.009.045v.006h0v.006h0V15.3h0v.007h0v.007h0c-.016.082-.032.164-.047.246l-.984-.18C-.611,15.041-.538,14.694-.457,14.354Zm.972-3,.924.383q-.11.265-.212.535h0l0,.005v0l0,0v0l0,.005v0l0,0v0l0,0v0l0,0v0l0,.005v0l0,0v0l0,.005h0l-.009.025v0l0,.005h0l0,.005h0l0,.005h0l0,.005v0l0,.005h0l0,.006h0l0,.006h0l0,.006h0q-.047.127-.092.255l-.943-.333C.254,12.006.381,11.675.515,11.352Zm1.434-2.81.852.524-.08.131h0l0,.006h0l0,.005h0l0,.005h0l0,0v0l0,0v0l0,0v0l0,0,0,0,0,0,0,0,0,0,0,0v0l0,0,0,0,0,0v0l0,0,0,0,0,0v0l0,.005h0l0,.006h0l0,.006h0q-.184.309-.356.625l-.878-.478C1.589,9.146,1.766,8.839,1.949,8.542ZM3.807,5.993l.759.651-.041.047h0l-.01.011h0l-.009.011h0l-.009.01h0l-.009.011h0l-.009.011h0l-.009.01,0,0-.008.01,0,0-.008.01,0,0-.008.01,0,0-.009.01,0,0-.008.01,0,0-.008.01,0,0-.008.01v0l-.009.01h0l-.01.011h0l-.01.012h0l-.009.011h0l-.009.011h0q-.159.192-.313.389h0l-.009.012h0l-.009.011,0,0L4,7.332l0,0-.007.008,0,0-.006.007,0,.006,0,0-.008.01h0l-.033.043-.792-.61C3.357,6.533,3.58,6.258,3.807,5.993ZM6.041,3.766l.648.761-.2.176-.006.005-.006,0-.006.006,0,0-.008.007,0,0-.009.008,0,0-.01.009h0l-.011.009h0q-.24.212-.472.432l-.687-.726C5.511,4.229,5.775,3.993,6.041,3.766ZM8.6,1.916l.521.854-.236.146h0l-.006,0h0l-.005,0h0l-.005,0-.006,0h0l-.02.013-.006,0-.006,0-.006,0-.006,0-.006,0-.006,0-.006,0-.006,0h0q-.257.164-.508.336l-.565-.825C8,2.291,8.3,2.1,8.6,1.916ZM11.41.491l.38.925q-.186.077-.371.157h0l-.006,0h0l-.007,0-.007,0-.007,0-.007,0-.009,0h0l-.014.006-.007,0-.007,0-.007,0-.007,0-.007,0h0q-.207.092-.412.188h0l-.006,0-.007,0-.006,0-.006,0-.006,0,0,0-.428-.9C10.763.767,11.087.623,11.41.491Zm3.005-.963L14.644.5q-.489.115-.967.254L13.4-.2C13.733-.3,14.075-.392,14.415-.472Zm3.119-.475.072,1q-.5.036-1,.1l-.124-.992C16.833-.887,17.186-.922,17.534-.947Z"
                    transform="translate(257 979)" fill="#696e84"/>
                <text transform="translate(276 975)" fill="#fcbb40" font-size="12" font-family="">
                  <tspan x="-4.506" y="0">N</tspan>
                </text>
                <text transform="translate(276 1021) rotate(180)" fill="#fff" font-size="12" font-family="">
                  <tspan x="-3.444" y="0">S</tspan>
                </text>
                <text transform="translate(299 998) rotate(90)" fill="#fff" font-size="12" font-family="">
                  <tspan x="-3.36" y="0">E</tspan>
                </text>
                <text transform="translate(253 998) rotate(-90)" fill="#fff" font-size="12" font-family="">
                  <tspan x="-5.592" y="0">W</tspan>
                </text>
                <path d="M3.5,0,7,28,3.5,23.818,0,28Z" transform="translate(273 984)" fill="#fcbb40"/>
                <g transform="translate(701.825 11.94) rotate(45)">
                  <text transform="translate(396.5 973.5)" fill="#696e84" font-size="8" font-family="">
                    <tspan x="-5.172" y="0">NE</tspan>
                  </text>
                  <text transform="translate(396.5 1022.5) rotate(180)" fill="#696e84" font-size="8" font-family="">
                    <tspan x="-5.816" y="0">SW</tspan>
                  </text>
                  <text transform="translate(421 998) rotate(90)" fill="#696e84" font-size="8" font-family="">
                    <tspan x="-4.488" y="0">SE</tspan>
                  </text>
                  <text transform="translate(372 998) rotate(-90)" fill="#696e84" font-size="8" font-family="">
                    <tspan x="-6.54" y="0">NW</tspan>
                  </text>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </template>
    </vm-compass>
  </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmTdtLayer, VmCompass } from 'vue3-mars3d
import { reactive } from 'vue'
import { control } from 'mars3d'

const center = reactive({
  lat: 31.667339,
  lng: 117.301893,
  alt: 40357,
  heading: 2,
  pitch: -68
})

const onReady = (compass: control.Compass) => {
  console.log(compass)
}

</script>

<style scoped>
:deep(.mars3d-compass-custom) {
  position: absolute;
  top: 10px;
  right: 10px;
  user-select: none;
  width: 120px;
  height: 120px;
}


:deep(.mars3d-compass-custom .mars3d-compass-outer) {
  position: absolute;
  top: 0;
  left: 0;
  height: 120px;
  width: 120px;
  background: rgb(62 65 65 / 40%);
  border-radius: 50%;
}

:deep(.mars3d-compass-custom .mars3d-compass-inner) {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 120px;
  width: 120px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: contain;
}

:deep(.mars3d-compass-custom .mars3d-compass-rotation-arc) {
  position: absolute;
  top: 0;
  left: 0;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>


```

:::

## 静态属性

| 属性名 | 类型               |     默认值      | 是否必填 | 描述      |
|:----|:-----------------|:------------:|:----:|:--------|
| id  | string \| number | createGuid() |  否   | 对象的id标识 |            |

## Slot插槽

| 属性名            | 类型     | 默认值 | 是否必填 | 描述                                               |
|:---------------|:-------|:---:|:----:|:-------------------------------------------------|
| outerSvg       | string |     |  否   | 外部圆环区域的SVG图片                                     |            |
| innerSvg       | string |     |  否   | 中心球区域的SVG图片                                      |            |
| rotationArcSvg | string |     |  否   | rotation为true时，按中间区域往四周拖拽时，调整俯仰角的对外部圆环的半弧遮盖SVG图片 |            |

## 响应式属性

| 属性名             | 类型          |      默认值       | 是否必填 | 描述                                                                            |
|:----------------|:------------|:--------------:|:----:|:------------------------------------------------------------------------------|
| show            | boolean     |      true      |  否   | 是否显示                                                                          |            |
| rotation        | string      | mars3d-compass |  否   | 否启用调整俯仰角（按中间区域往四周拖拽）                                                          |            |
| className       | string      |                |  否   | 样式名称，可以外部自定义样式。                                                               |            |
| top             | string      |                |  否   | css定位top位置, 如 top: '10px'                                                     |            |
| bottom          | string      |                |  否   | css定位bottom位置，支持配置'toolbar'自动跟随cesium-viewer-toolbar                          |            |
| left            | string      |                |  否   | css定位left位置                                                                   |            |
| right           | string      |                |  否   | css定位right位置                                                                  |            |
| outerSvg        | string      |                |  否   | 外部圆环区域的SVG图片<br/> **建议使用示例所示slot插槽进行自定义**                                     |            |
| innerSvg        | string      |                |  否   | 中心球区域的SVG图片<br/> **建议使用示例所示slot插槽进行自定义**                                      |            |
| rotationArcSvg  | string      |                |  否   | rotation为true时，按中间区域往四周拖拽时，调整俯仰角的对外部圆环的半弧遮盖SVG图片<br/> **建议使用示例所示slot插槽进行自定义** |            |
| enabled         | boolean     |      true      |  否   | 对象的启用状态                                                                       |            |
| parentContainer | HTMLElement |                |  否   | 控件加入的父容器，默认为map所在的DOM map.container                                           |            |
| insertIndex     | number      |                |  否   | 可以自定义插入到父容器中的index顺序，默认是插入到最后面                                                |            |
| insertBefore    | HTMLElement |                |  否   | 可以自定义插入到指定兄弟容器的前面，与insertIndex二选一                                             |            |

## 事件

:::tip
参照 [快速开始](/viewer/quick-start/#事件) 中的事件说明
:::

| 事件名   | 参数  | 类型              | 描述             |
|:------|:----|:----------------|:---------------|
| ready | map | control.Compass | 控件加载完成后返回的控件实例 |
