// React
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// Components
import View from '../../components/HtmlComponents/View/View'
import Label from '../../components/HtmlComponents/Label/Label'
import Form from '../../components/HtmlComponents/Form/Form'
import Button from '../../components/Buttons/Button/Button'
import InputData from '../../components/InputData/InputData'
import DropDown from '../../components/DropDown/DropDown'
import Multiline from '../../components/Multiline/Multiline'
// Icons 
import HomeIcon from '../../assets/icons/home.svg'
// Lang
import i18n from '../../configs/i18n.config'

// Styles
import './RequestForm.style.css'

/**
@file RequestForm page component
*/
const RequestForm = () => {

  const navigate = useNavigate()

  const [selectedCampus, setSelectedCampus] = useState()
  const [selectedCareer, setSelectedCareer] = useState()
  const [selectedCourse, setSelectedCourse] = useState()
  const [listCampus, setListCampus] = useState(['San José', 'Cartago'])
  const [listCareers, setListCareers] = useState(['Computación', 'Producción Industrial'])
  const [listCourses, setListCourses] = useState(['Bases de Datos I', 'Análisis de Algoritmos'])
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const onClickBackToHome = () => {
    navigate('/')
  }

  return (
    <View 
      className='request-form-container'
    >
      <Button 
        className='back-to-home-button'
        icon={HomeIcon}
        onClick={onClickBackToHome}
      >
        <Label 
          className='body5'
        >
          {i18n.t('BACK_TO_HOME')}
        </Label>
      </Button>
      <Label
        className='h4'
      >
        {i18n.t('REQUEST_FORM')}
      </Label>
      <Form 
        onSubmit={handleSubmit(onSubmit)}
        className='request-form'
      >
        <View>
          <Label 
            htmlFor='idCard'
            className='body5' 
          >
            {i18n.t('ID_CARD')}
          </Label>
          <InputData
            id='idCard'
            tpye='numeric'
            className='body2'
            {...register('idCard', { required: i18n.t('ID_CARD_IS_REQUIRED') })}
            placeholder={i18n.t('WRITE_YOUR_ID_CARD')}
          />
          {errors.idCard && 
            <Label
              className='body4'
            >
               * {errors.idCard.message}
            </Label>
          }
        </View>

        <View>
          <Label 
            htmlFor='completeName'
            className='body5'
          >
            {i18n.t('COMPLETE_NAME')}
          </Label>
          <InputData
            id='completeName'
            className='body2'
            {...register('completeName', { required: i18n.t('COMPLETE_NAME_IS_REQUIRED') })}
            placeholder={i18n.t('WRITE_YOUR_COMPLETE_NAME')}
          />
          {errors.completeName && 
            <Label
              className='body4'
            >
               * {errors.completeName.message}
            </Label>
          }
        </View>

        <View>
          <Label 
            htmlFor='institutionalEmail'
            className='body5'
          >
            {i18n.t('EMAIL')}
          </Label>
          <InputData
            id='institutionalEmail'
            type='email'
            className='body2'
            {...register('institutionalEmail', { required: i18n.t('EMAIL_IS_REQUIRED') })}
            placeholder={i18n.t('WRITE_YOUR_EMAIL')}
          />
          {errors.institutionalEmail && 
            <Label
              className='body4'
            >
               * {errors.institutionalEmail.message}
            </Label>
          }
        </View>

        <View
          className='element'
        >
          <Label 
            htmlFor='campus'
            className='body5'
          >
            {i18n.t('CAMPUS')}
          </Label>
          <DropDown 
            id='campus'
            title={i18n.t('SELECT_CAMPUS')}
            options={listCampus}
            selectedOption={selectedCampus}
            setSelectedOption={(index) => {
              setSelectedCampus(index)
              setValue('campus', listCampus[index])
            }}
            {...register('campus', { required: i18n.t('CAMPUS_IS_REQUIRED') })}
          />
          {errors.campus && 
            <Label
              className='body4'
            >
               * {errors.campus.message}
            </Label>
          }
        </View>

        <View
          className='element'
        >
          <Label 
            htmlFor='career'
            className='body5'
          >
            {i18n.t('CAREER')}
          </Label>
          <DropDown 
            id='career'
            title={i18n.t('SELECT_CAREER')}
            options={listCareers}
            selectedOption={selectedCareer}
            setSelectedOption={(index) => {
              setSelectedCareer(index)
              setValue('career', listCareers[index])
            }}
            {...register('career', { required: i18n.t('CAREER_IS_REQUIRED') })}
          />
          {errors.career && 
            <Label
              className='body4'
            >
               * {errors.career.message}
            </Label>
          }
        </View> 

        <View
          className='element'
        >
          <Label 
            htmlFor='course'
            className='body5'
          >
            {i18n.t('COURSE')}
          </Label>
          <DropDown 
            id='course'
            title={i18n.t('SELECT_COURSE')}
            options={listCourses}
            selectedOption={selectedCourse}
            setSelectedOption={(index) => {
              setSelectedCourse(index)
              setValue('course', listCourses[index])
            }}
            {...register('course', { required: i18n.t('COURSE_IS_REQUIRED') })}
          />
          {errors.course && 
            <Label
              className='body4'
            >
               * {errors.course.message}
            </Label>
          }
        </View> 

        <View
          className='element'
        >
          <Label 
            htmlFor='comment'
            className='body5'
          >
            {i18n.t('COMMENT')}
          </Label>
          <Multiline 
            id='comment'
            placeholder={i18n.t('WRITE_THE_COMMENT')}
            rows={5}
            {...register('comment')}
          />
        </View> 

        <Button 
          type='submit'
        >
          <Label 
            className='body5'
          >
            {i18n.t('SUBMIT')}
          </Label>
        </Button>
      </Form>
    </View>
  )
}

export default RequestForm
