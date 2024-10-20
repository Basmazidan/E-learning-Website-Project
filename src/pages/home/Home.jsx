import React from 'react'
import { Usection } from '../../components/Usection'
import { Mainsection } from '../../components/Mainsection'
import { Courses } from '../../components/Courses';
import { CourseCard } from '../../components/CourseCard';
import { Chooseus } from '../../components/Chooseus';
import { Footer } from '../../components/Footer';

const Home = () => {
    return (
        <>
          <Usection />
          <Mainsection />
          <Courses/>
          <CourseCard/>
          <Chooseus/>
          <Footer/>
        </>
      );


}

export default Home