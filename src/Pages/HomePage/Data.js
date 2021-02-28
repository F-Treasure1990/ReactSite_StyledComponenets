import Svg1 from '../../Images/svg-1.svg'
import Svg2 from '../../Images/svg-2.svg'
import Svg3 from '../../Images/svg-3.svg'
import ProfileImg from '../../Images/profile.jpg'

export const homeObjOne = {
  lightBg : false,
  primary: true,
  imgStart: '',
  lightTopLine: true,
  lightTextDesc:true,
  buttonLabel:'Get Started', 
  description:'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.', 
  headline: 'Lead Generation Specialist for Online Businesses', 
  lightText: true, 
  topLine: 'Marketing Agency',
  img: Svg1,
  alt: 'Image',
  start: ''
}

export const homeObjTwo = {
  lightBg : true,
  primary: false,
  imgStart: 'start',
  lightTopLine: false,
  lightTextDesc:false,
  buttonLabel:'Get Started', 
  description:'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.', 
  headline: 'Lead Generation Specialist for Online Businesses', 
  lightText: false, 
  topLine: 'Marketing Agency',
  img: ProfileImg,
  alt: 'Image',
  start: 'true',
}

export const homeObjThree = {
  lightBg : false,
  primary: true,
  imgStart: '',
  lightTopLine: true,
  lightTextDesc:true,
  buttonLabel:'Get Started', 
  description:'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.', 
  headline: 'Lead Generation Specialist for Online Businesses', 
  lightText: true, 
  topLine: 'Marketing Agency',
  img: Svg2,
  alt: 'Image',
  start: ''
}

export const homeObjFour = {
  lightBg : false,
  primary: true,
  imgStart: 'start',
  lightTopLine: true,
  lightTextDesc:true,
  buttonLabel:'Get Started', 
  description:'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.', 
  headline: 'Lead Generation Specialist for Online Businesses', 
  lightText: true, 
  topLine: 'Marketing Agency',
  img: Svg3,
  alt: 'Image',
  start: 'true'
}

console.log(homeObjOne.img)