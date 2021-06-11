<template>
  <div id="app">
    <a-row :gutter="16">
      <a-col :xs="24" :sm="12">
        <div class="title">Configuración</div>
        <a-form layout="vertical">

          <!-- Logo -->
          <a-form-item label="Logo del espacio">
            <upload-image></upload-image>
            <span slot="help">
              <slot-help :paragrafhs="helpMembers"></slot-help>
            </span>
          </a-form-item>

          <!-- First input Name -->
          <a-form-item label="Nombre del espacio">
            <input-text placeholder="Ep: Mi espacio de trabajo" />
          </a-form-item>

          <!-- Second input URL-->
          <a-form-item label="URL del espacio (dirección web)">
            <span slot="help">
              <slot-help :paragrafhs="helpUrl"></slot-help>
            </span>
            <input-text placeholder="Ep: mi.dominio" />
          </a-form-item>

          <!-- RadioButton Cant Persons-->
          <a-form-item label="¿Cuántas personas trabajarán contigo, incluyéndote a ti?">
            <radio-button :radioButtonOptions="radioButtonValues" v-model="member"></radio-button>
            <span slot="help" class="help">
              <slot-help :paragrafhs="helpMembers"></slot-help>
            </span>
          </a-form-item>

          <!-- Color Theme -->          
          <a-form-item label="Color del tema">
            <radio-color :colors="radioColors"></radio-color>
          </a-form-item>

          <!-- Radio Privacidad del espacio -->
          <a-form-item label="Privacidad del espacio">
            <radio-group :radioGroupOptions="radioGroupOptions"></radio-group>
          </a-form-item>

          <!-- Button -->
          <a-space :size="15">
            <button-custom type="primary" size="large" @click="submit">Guardar cambios</button-custom>
            <button-custom type="default" size="large">Descartar</button-custom>
          </a-space>
        </a-form>
      </a-col>
      <!-- Previous View -->
      <a-col :xs="24" :sm="12">
        <previous-view></previous-view>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import RadioButton from '../src/components/RadioButton'
import InputText from '../src/components/InputText'
import RadioGroup from '../src/components/RadioGroup'
import RadioColor from '../src/components/RadioColor'
import ButtonCustom from '../src/components/ButtonCustom'
import SlotHelp from '../src/components/SlotHelp'
import PreviousView from '../src/components/PreviousView'
import UploadImage from '../src/components/UploadImage'

const helpUrl = [
  'Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)',
  'Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro.'
]
const helpMembers = [
  'Este logo identificará tu espacio entre el resto.',
  'Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente.'
]
const radioButtonValues = [
  {
    text: 'Solo yo',
    value: 'a'
  },
  {
    text: '2 - 10',
    value: 'b'
  },
  {
    text: '11 - 25',
    value: 'c'
  },
  {
    text: '26 - 50',
    value: 'd'
  },
  {
    text: '51 - 100',
    value: 'e'
  },
  {
    text: '500 +',
    value: 'f'
  }
]
const radioGroupOptions = [
  {
    label: 'Privado',
    help: 'El contenido será visible solo para ti y los miembros de tu Organización.',
    value: 1
  },
  {
    label: 'Publico',
    help: 'Cualquiera con el vínculo podrá ver la actividad de tu Organización.',
    value: 2
  }
]
const radioColors = [
  {
    color: '#39B0FF',
    shadowColor: '#a3daff',
    value: 1
  },
  {
    color: '#04B58B',
    shadowColor: '#81dac5',
    value: 2
  },
  {
    color: '#3E9C4B',
    shadowColor: '#9ecda5',
    value: 3
  },
  {
    color: '#B6BC00',
    shadowColor: '#dadd7f',
    value: 4
  },
  {
    color: '#E59100',
    shadowColor: '#f2c87f',
    value: 5
  },
  {
    color: '#E55C00',
    shadowColor: '#f2ad7f',
    value: 6
  },
  {
    color: '#EE1F50',
    shadowColor: '#f68fa7',
    value: 7
  },
  {
    color: '#D6198A',
    shadowColor: '#ea8cc4',
    value: 8
  },
  {
    color: '#B321F1',
    shadowColor: '#d990f8',
    value: 9
  },
  {
    color: '#48B5FE',
    shadowColor: '#a3daff',
    value: 10
  },
]

export default {
  components: {
    RadioButton,
    InputText,
    RadioGroup,
    RadioColor,
    ButtonCustom,
    SlotHelp,
    PreviousView,
    UploadImage
  },
  data() {
    return {
      member: '',
      loading: false,
      imageUrl: '',
      radioButtonValues,
      radioGroupOptions,
      radioColors,
      helpUrl,
      helpMembers
    };
  },
  methods: {
    submit() {
      console.log(`checked = ${this.member}`);
    },
  }
};
</script>

<style lang="less">
#app {
  padding: 42px 0 42px 110px;
  @media (max-width: 768px) {
    padding: 42px 0 42px 20px;
  }
  .title {
    font-size: 18px;
    padding-bottom: 20px;
    color: black;
  }
  label:not(.ant-radio-button-wrapper) {
    color: rgba(0,0,0,1);
    &:after {
      content: ''
    }
  }
  .ant-form-item {
    margin-bottom: 30px;
    padding-bottom: 0;
  }
  .ant-form-item-label {
    line-height: 17px;
    margin-bottom: 10px;
    padding-bottom: 0;
  }
  .ant-form-explain {
    margin-top: 16.14px;
  }
}
</style>
