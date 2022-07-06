import React from 'react';
import logo from './assets/big-logo.png';
import Layout from '../../components/Layout';
import { AboutDesc, AboutLocation, AboutLogo, AboutTitle } from './styled';
const AboutUsPage = () => {
	return (
		<Layout>
			{/* <AboutLogo src={logo} /> */}
			<AboutTitle>About us</AboutTitle>
			<AboutDesc>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				bibendum neque a risus imperdiet, a fermentum leo aliquam. Vestibulum
				tristique varius sollicitudin. Nullam vitae pharetra mi. Nulla tincidunt
				vel turpis quis feugiat. Cras iaculis euismod risus, sed laoreet arcu
				hendrerit eget. Suspendisse eget magna ipsum. Nulla facilisi. Maecenas
				sit amet odio et mi bibendum consectetur nec ac augue. Sed fringilla,
				enim ac venenatis tempor, urna ipsum elementum urna, in lacinia urna
				odio eu lectus. Donec blandit, sem vitae tincidunt mattis, leo mi
				egestas nisi, at fermentum arcu turpis ut est. Sed risus augue, maximus
				vel ex at, suscipit lobortis lectus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas.
				Suspendisse imperdiet justo eget sem volutpat, et dictum mauris
				consectetur. Phasellus interdum quis turpis quis consequat. Donec
				dapibus orci ac nulla hendrerit aliquam. Sed eget fermentum nunc. Etiam
				gravida sed neque ut molestie. Mauris accumsan enim nec euismod
				consequat. Duis sit amet bibendum ipsum. Sed sodales malesuada tempor.
				Ut tincidunt ac lacus quis tristique. Aliquam in dui at ex egestas
				auctor.
			</AboutDesc>
			<AboutLocation
				title='map'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084125.163650035!2d20.218650825000005!3d40.984962800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ae9caee8ec08f9%3A0x5a5df7200d46644e!2sFoodland!5e0!3m2!1str!2str!4v1656422305349!5m2!1str!2str'
				allowfullscreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></AboutLocation>
		</Layout>
	);
};

export default AboutUsPage;
