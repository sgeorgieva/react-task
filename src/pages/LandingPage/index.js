import React from 'react';

//components
import BackgroundBlob from '../../components/BackgroundBlob';
import MultilineText from '../../components/MultilineText';
import MoneyBox from '../../components/MoneyBox';
import HeaderSingleTerminal from '../../components/HeaderSingleTerminal';
import OneLineText from '../../components/OneLineText';
import PaymentTerminalAddition from '../../components/PaymentTerminalAddition';
import Button from '../../components/Button';
import PaymentsTerminalsText from '../../components/PaymentsTerminalsText';
import PaymentDevice from '../../components/PaymentDevice';
import MessageDeviceBox from '../../components/MessageDeviceBox';
import Testimonial from '../../components/Testimonial';
import Slider from 'react-slick';
import Footer from '../../components/Footer';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

//images
import MyposLogoImage from '../../assets/images/logo.png';
import PeopleImage from '../../assets/images/people.png';

//constants
import { PaymentSystemsItems } from '../../constants/PaymentSystemsItems';
import { TestimonialItems } from '../../constants/TestimonialItems';

import './styles.css';

const settings = {
  className: 'slider variable-width',
  centerMode: true,
  dots: true,
  infinite: true,
  autoplay: false,
  swipeToSlide: true,
  speed: 1500,
  slidesToScroll: 1,
  slidesToShow: 3,
  initialSlide: 0,
  variableWidth: true,
  adaptiveHeight: true,
  appendDots: (dots) => (
    <div
      style={{
        bottom: '-60px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      style={{
        height: '15px',
        width: '15px',
        backgroundColor: '#c0cbe1',
        borderRadius: '50%',
        display: 'inline-block',
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        variableWidth: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        centerMode: false,
      },
    },
  ],
};

const LandingPage = () => {
  const handleClick = () => {
    window.open('/todos');
  };

  return (
    <div className='wrapper'>
      <div className='container-fluid header-wrapper px-0'>
        <img src={MyposLogoImage} className='img-fluid' />
        <div className='header-innerwrapper'>
          <BackgroundBlob />
          <MultilineText
            text="Say 'YES' to every payment"
            smallText='No commitment. No monthly fees.'
          />
          <div>
            <Button text='Learn More' onPress={handleClick} />
          </div>
        </div>
        <MoneyBox />
        <HeaderSingleTerminal />
      </div>
      <div className='terminal-additions-wrapper'>
        <OneLineText
          color='dark'
          text='With every myPOS payment terminal you get:'
        />
        <div className='terminal-icons-wrapper'>
          <div className='d-flex flex-column'>
            <div className='d-flex'>
              <PaymentTerminalAddition
                icon='business-icon'
                addition='Business account with IBAN'
                type='0 EUR/month'
              />
              <PaymentTerminalAddition
                icon='data-icon'
                addition='Data connectivity'
                type='0 EUR/month'
              />
            </div>
            <div className='d-flex'>
              <PaymentTerminalAddition
                icon='visacard-icon'
                addition='Visa debit card'
                type='0 EUR/month'
              />
              <PaymentTerminalAddition
                icon='dashboard-icon'
                addition='Dashboard and reporting'
                type='24/7 access'
              />
            </div>
            <div className='d-flex'>
              <PaymentTerminalAddition
                icon='money-account-icon'
                addition='Money in your account'
                type='instantly'
              />
              <PaymentTerminalAddition
                icon='support-icon'
                addition='Phone, email & chat support'
                type='free'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='people-terminal-wrapper'>
        <img src={PeopleImage} className='img-fluid' alt='people-image' />
        <OneLineText color='white' text='Get your payment terminal today' />
        <Button text='buy now' />
      </div>
      <div className='container payments-terminal-devices'>
        <div className='payment-terminal-gradient' />
        <div className='row first-row-devices'>
          <div className='col-md-4'>
            <div className='payments-terminal-outterwrapper'>
              <PaymentsTerminalsText
                title='Payment Terminals'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              />
              <Button text='shop now' />
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <PaymentDevice image='mypos-combo' title='myPOS Combo' />
          </div>
          <div className='col-md-4 text-center align-self-end'>
            <MessageDeviceBox
              title='Mini Ice'
              content='Android OS, Touch-screen display, Paper Printer'
            />
            <div className='rectangle' />
            <PaymentDevice image='mypos-mini-ice' title='myPOS Mini Ice' />
          </div>
        </div>
        <div className='row last-row-devices align-items-end'>
          <div className='col-md-4 text-center'>
            <PaymentDevice image='mypos-smart-N5' title='myPOS Smart N5' />
          </div>
          <div className='col-md-4 text-center'>
            <PaymentDevice image='mypos-smart' title='myPOS Smart' />
          </div>
          <div className='col-md-4 text-center'>
            <PaymentDevice image='mypos-mini' title='myPOS Mini' />
          </div>
        </div>
      </div>
      <div className='container-fluid payments-systems'>
        <div className='d-flex align-items-center justify-content-center flex-wrap'>
          {PaymentSystemsItems.map((element, index) => (
            <div className='payment-item' key={index}>
              <img src={element.src} alt={element.alt} className='img-fluid' />
            </div>
          ))}
        </div>
      </div>
      <OneLineText color='light-dark' text='What our customers say' />
      <div className='carousel-wrapper'>
        <div className='testimonial-gradient' />
        <div className='carousel-innerwrapper'>
          <Slider {...settings}>
            {TestimonialItems.map((element, index) => (
              <Testimonial
                key={index}
                image={element.image}
                altTextImage={element.alt}
                name={element.name}
                title={element.title}
                firstText={element.firstText}
                secondText={element.secondText}
              />
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
