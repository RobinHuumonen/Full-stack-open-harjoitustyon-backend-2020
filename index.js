require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

const recipes = [
  {
    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe1',
    thumbnailCaption: 'Recipe1'
  },
  {
    src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe2',
    thumbnailCaption: 'Recipe2'
  },
  {
    src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe2',
    thumbnailCaption: 'Recipe2'
  },
  {
    src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe3',
    thumbnailCaption: 'Recipe3'
  },
  {
    src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Big Ben (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'Big Ben'
  },
  {
    src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'rd'
  },
  {
    src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'Wood Glass'
  },
  {
    src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
    thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'Flower Interior Macro'
  },
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
    thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg',
    thumbnail: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg',
    thumbnail: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg',
    thumbnail: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe1',
    thumbnailCaption: 'Recipe1'
  },
  {
    src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe2',
    thumbnailCaption: 'Recipe2'
  },
  {
    src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe2',
    thumbnailCaption: 'Recipe2'
  },
  {
    src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Recipe3',
    thumbnailCaption: 'Recipe3'
  },
  {
    src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Big Ben (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'Big Ben'
  },
  {
    src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'rd'
  },
  {
    src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'Wood Glass'
  },
  {
    src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
    thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
    thumbnailCaption: 'Flower Interior Macro'
  },
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
    thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg',
    thumbnail: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg',
    thumbnail: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg',
    thumbnail: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg',
    thumbnail: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg',
    thumbnail: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  },
  {
    src: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg',
    thumbnail: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_n.jpg',
    thumbnailWidth: 258,
    thumbnailHeight: 258,
    caption: '8H (gratisography.com)',
    thumbnailCaption: '8H'
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/recipes', (req, res) => {
  res.json(recipes)
})

app.get('/api/recipes/:id', (req, res) => {
  const id = Number(req.params.id)
  const recipe = recipes.find(recipe => recipe.id === id)
  res.json(recipe)

  if (recipe) {
    res.json(recipe)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/recipes/:id', (req, res) => {
  const id = Number(req.params.id)
  recipes = recipes.filter(recipe => recipe.id !== id)

  res.status(204).end()
})

app.post('/api/recipes', (req, res) => {
  const recipe = req.body

  res.json(recipe)
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})